import React from 'react';
import { Link } from 'react-router-dom';
import { categories, products } from '../data/products';

export default function Categories() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Product Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categoryProducts = products.filter(p => p.category === category.name);
            return (
              <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <h2 className="text-2xl font-semibold">{category.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {categoryProducts.length} products available
                  </p>
                  <Link
                    to={`/categories/${category.name.toLowerCase()}`}
                    className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}