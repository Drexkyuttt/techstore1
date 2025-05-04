import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface LocationState {
  cartItems: Product[];
  totalPrice: number;
}

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state as LocationState;
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoading(false);
    navigate('/payment-success');
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">₱{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="text-lg font-semibold">Total: ₱{totalPrice.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <form onSubmit={handlePayment}>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gcash"
                  name="payment"
                  value="gcash"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                  required
                />
                <label htmlFor="gcash" className="ml-2">GCash</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="maya"
                  name="payment"
                  value="maya"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="maya" className="ml-2">Maya</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  value="bank"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="bank" className="ml-2">Bank Transfer</label>
              </div>

              {paymentMethod && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Payment Details</h3>
                  {paymentMethod === 'gcash' && (
                    <p>GCash Number: 09398277383</p>
                  )}
                  {paymentMethod === 'maya' && (
                    <p>Maya Account: 09398277383</p>
                  )}
                  {paymentMethod === 'bank' && (
                    <div>
                      <p>Bank: BDO</p>
                      <p>Account Number: 1172983274983445</p>
                      <p>Account Name: Tech Trends</p>
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled={loading || !paymentMethod}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="loading-spinner mr-2"></div>
                    Processing...
                  </span>
                ) : (
                  'Complete Payment'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}