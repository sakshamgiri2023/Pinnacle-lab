export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
  views: number;
  readTime: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'reader';
  avatar?: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  username: string;
  content: string;
  createdAt: string;
  parentId?: string;
  replies?: Comment[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  active: boolean;
}