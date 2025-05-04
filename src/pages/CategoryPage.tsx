import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useOutletContext } from 'react-router-dom';
import { Product } from '../types';

interface ContextType {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function CategoryPage() {
  const { category } = useParams();
  const { setCartItems } = useOutletContext<ContextType>();
  
  const categoryInfo = categories.find(c => c.name.toLowerCase() === category?.toLowerCase());
  const categoryProducts = products.filter(p => p.category.toLowerCase() === category?.toLowerCase());

  const addToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };

  if (!categoryInfo) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/categories" className="text-blue-600 hover:text-blue-700">
            Return to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{categoryInfo.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryInfo.name}</h1>
          <p className="text-xl text-gray-600">{categoryInfo.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mt-2">₱{product.price.toLocaleString()}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600">No products found in this category.</p>
            <Link to="/categories" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
              Return to Categories
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}