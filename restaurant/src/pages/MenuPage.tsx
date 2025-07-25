import React, { useState } from 'react';
import { Leaf, Wheat } from 'lucide-react';
import { MenuItem } from '../types';
import { menuItems } from '../data/menuData';

interface MenuPageProps {
  onAddToCart: (item: MenuItem) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted dishes made with the finest seasonal ingredients 
            and inspired by culinary traditions from around the world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.isVegetarian && (
                    <div className="bg-green-100 p-2 rounded-full">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                  )}
                  {item.isGlutenFree && (
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Wheat className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-600">
                    ${item.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {item.isVegetarian && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Vegetarian
                      </span>
                    )}
                    {item.isGlutenFree && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Gluten Free
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;