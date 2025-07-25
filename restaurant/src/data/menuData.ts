import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls with black truffle, parmesan, and sage aioli',
    price: 16,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Seared Scallops',
    description: 'Pan-seared scallops with cauliflower purée and pancetta crisps',
    price: 22,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Burrata Caprese',
    description: 'Fresh burrata with heirloom tomatoes, basil oil, and balsamic reduction',
    price: 18,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVegetarian: true
  },
  
  // Mains
  {
    id: '4',
    name: 'Wagyu Ribeye',
    description: 'Grilled wagyu ribeye with roasted bone marrow, truffle fries, and red wine jus',
    price: 65,
    category: 'mains',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    name: 'Lobster Ravioli',
    description: 'House-made lobster ravioli in brown butter sauce with crispy sage',
    price: 38,
    category: 'mains',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg with orange glaze, wild rice, and seasonal vegetables',
    price: 42,
    category: 'mains',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    name: 'Vegetarian Wellington',
    description: 'Mushroom and lentil wellington with roasted vegetables and herb gravy',
    price: 28,
    category: 'mains',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVegetarian: true
  },
  
  // Desserts
  {
    id: '8',
    name: 'Chocolate Soufflé',
    description: 'Dark chocolate soufflé with vanilla bean ice cream and berry coulis',
    price: 14,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVegetarian: true
  },
  {
    id: '9',
    name: 'Tiramisu',
    description: 'Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone',
    price: 12,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVegetarian: true
  },
  {
    id: '10',
    name: 'Crème Brûlée',
    description: 'Vanilla bean crème brûlée with caramelized sugar and fresh berries',
    price: 11,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVegetarian: true
  },

  // Beverages
  {
    id: '11',
    name: 'Sommelier Wine Selection',
    description: 'Curated wine pairing selected by our sommelier',
    price: 15,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/1170502/pexels-photo-1170502.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '12',
    name: 'Craft Cocktail',
    description: 'House-made cocktail with premium spirits and fresh ingredients',
    price: 16,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];