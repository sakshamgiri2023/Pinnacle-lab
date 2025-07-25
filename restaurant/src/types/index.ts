export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appetizers' | 'mains' | 'desserts' | 'beverages';
  image: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  total: number;
  type: 'pickup' | 'delivery';
  address?: string;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  timestamp: Date;
}

export interface Chef {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
}