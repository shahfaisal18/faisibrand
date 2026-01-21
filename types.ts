
export type Category = 'Fashion' | 'Electronics' | 'Accessories' | 'Lifestyle';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
