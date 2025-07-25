import React, { useState } from 'react';
import { MenuItem, CartItem, Reservation, Order } from './types';
import { menuItems } from './data/menuData';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage';
import OrderPage from './pages/OrderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentMenuItems, setCurrentMenuItems] = useState<MenuItem[]>(menuItems);

  const handleAddToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleReservationSubmit = (reservationData: Omit<Reservation, 'id' | 'status'>) => {
    const newReservation: Reservation = {
      ...reservationData,
      id: Date.now().toString(),
      status: 'pending'
    };
    setReservations([...reservations, newReservation]);
  };

  const handleOrderSubmit = (orderData: Omit<Order, 'id' | 'status' | 'timestamp'>) => {
    const newOrder: Order = {
      ...orderData,
      id: Date.now().toString(),
      status: 'pending',
      timestamp: new Date()
    };
    setOrders([...orders, newOrder]);
  };

  const handleUpdateMenuItem = (item: MenuItem) => {
    setCurrentMenuItems(currentMenuItems.map(menuItem =>
      menuItem.id === item.id ? item : menuItem
    ));
  };

  const handleDeleteMenuItem = (id: string) => {
    setCurrentMenuItems(currentMenuItems.filter(item => item.id !== id));
  };

  const handleAddMenuItem = (itemData: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...itemData,
      id: Date.now().toString()
    };
    setCurrentMenuItems([...currentMenuItems, newItem]);
  };

  const handleUpdateReservation = (id: string, status: Reservation['status']) => {
    setReservations(reservations.map(reservation =>
      reservation.id === id ? { ...reservation, status } : reservation
    ));
  };

  const handleUpdateOrder = (id: string, status: Order['status']) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status } : order
    ));
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage onSectionChange={setCurrentSection} />;
      case 'menu':
        return <MenuPage onAddToCart={handleAddToCart} />;
      case 'reservations':
        return <ReservationsPage onReservationSubmit={handleReservationSubmit} />;
      case 'order':
        return (
          <OrderPage
            cart={cart}
            onUpdateCart={setCart}
            onSubmitOrder={handleOrderSubmit}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return (
          <AdminPage
            menuItems={currentMenuItems}
            reservations={reservations}
            orders={orders}
            onUpdateMenuItem={handleUpdateMenuItem}
            onDeleteMenuItem={handleDeleteMenuItem}
            onAddMenuItem={handleAddMenuItem}
            onUpdateReservation={handleUpdateReservation}
            onUpdateOrder={handleUpdateOrder}
          />
        );
      default:
        return <HomePage onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        cartItemCount={getCartItemCount()}
      />
      <main className="flex-grow">
        {renderCurrentSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;