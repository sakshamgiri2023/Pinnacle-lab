import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Trash2, Truck, Package } from 'lucide-react';
import { MenuItem, CartItem, Order } from '../types';
import { menuItems } from '../data/menuData';

interface OrderPageProps {
  cart: CartItem[];
  onUpdateCart: (cart: CartItem[]) => void;
  onSubmitOrder: (order: Omit<Order, 'id' | 'status' | 'timestamp'>) => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ cart, onUpdateCart, onSubmitOrder }) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [showCart, setShowCart] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateQuantity = (itemId: string, quantity: number) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0);
    onUpdateCart(updatedCart);
  };

  const removeFromCart = (itemId: string) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    onUpdateCart(updatedCart);
  };

  const addToCart = (menuItem: MenuItem) => {
    const existingItem = cart.find(item => item.id === menuItem.id);
    if (existingItem) {
      updateQuantity(menuItem.id, existingItem.quantity + 1);
    } else {
      const newCartItem: CartItem = { ...menuItem, quantity: 1 };
      onUpdateCart([...cart, newCartItem]);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const order = {
      customerName: customerInfo.name,
      customerEmail: customerInfo.email,
      customerPhone: customerInfo.phone,
      items: cart,
      total: getTotal(),
      type: orderType,
      address: orderType === 'delivery' ? customerInfo.address : undefined
    };
    onSubmitOrder(order);
    setIsSubmitted(true);
    onUpdateCart([]);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setCustomerInfo({ name: '', email: '', phone: '', address: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for your order. We'll notify you when it's ready for {orderType}.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting to homepage...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order Online
          </h1>
          <p className="text-xl text-gray-600">
            Enjoy our delicious food from the comfort of your home
          </p>
        </div>

        {/* Order Type Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setOrderType('pickup')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                orderType === 'pickup'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              <Package className="h-5 w-5 mr-2" />
              Pickup
            </button>
            <button
              onClick={() => setOrderType('delivery')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                orderType === 'delivery'
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              <Truck className="h-5 w-5 mr-2" />
              Delivery
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Menu Items</h2>
              <button
                onClick={() => setShowCart(!showCart)}
                className="lg:hidden bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart ({cart.length})
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <span className="text-lg font-bold text-amber-600">${item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart and Checkout */}
          <div className={`lg:block ${showCart ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Your Order
              </h2>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-600 ml-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>${getTotal().toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Customer Information Form */}
                  <form onSubmit={handleSubmitOrder} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                    {orderType === 'delivery' && (
                      <textarea
                        placeholder="Delivery Address"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                        required
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    )}
                    <button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Place Order (${getTotal().toFixed(2)})
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;