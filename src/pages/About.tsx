import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About TechStore</h1>
            <p className="text-gray-600 mb-4">
              Welcome to TechStore, your premier destination for cutting-edge technology and electronics. 
              We pride ourselves on offering the latest and most innovative products to enhance your digital lifestyle.
            </p>
            <p className="text-gray-600 mb-6">
              With a carefully curated selection of products from leading brands, we ensure that you have access 
              to the best technology the market has to offer.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold mb-2">Quality Products</h3>
                <p className="text-sm text-gray-600">Only the best from trusted brands</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm text-gray-600">24/7 customer assistance</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold mb-2">Fast Shipping</h3>
                <p className="text-sm text-gray-600">Quick and reliable delivery</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-sm text-gray-600">Safe and encrypted transactions</p>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img 
              src="./images/download.jpg" 
              alt="About Us" 
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Our Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <MapPin className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Salcedo City, Eastern Samar, Philippines</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Phone className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+63398277383</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Mail className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">techtrends@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">Mon -Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat - Sun: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
