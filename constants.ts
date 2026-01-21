
import { Product, Category, FAQItem } from './types';

export const CATEGORIES: Category[] = ['Fashion', 'Electronics', 'Accessories', 'Lifestyle'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Leather Jacket',
    category: 'Fashion',
    price: 249.99,
    description: 'A timeless silhouette crafted from premium full-grain leather. Perfect for any season.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
    rating: 4.8,
    reviewsCount: 124,
    isFeatured: true,
    discount: 15
  },
  {
    id: '2',
    name: 'Wireless Noise Cancelling Headphones',
    category: 'Electronics',
    price: 349.00,
    description: 'Experience pure sound with our flagship active noise-cancelling technology.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    rating: 4.9,
    reviewsCount: 856,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Minimalist Gold Watch',
    category: 'Accessories',
    price: 189.00,
    description: 'Elegant design meets precision engineering. A statement piece for the modern minimalist.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    rating: 4.7,
    reviewsCount: 42,
    isNew: true
  },
  {
    id: '4',
    name: 'Smart Home Hub',
    category: 'Electronics',
    price: 129.99,
    description: 'Control your entire home with one simple, beautiful interface.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop',
    rating: 4.5,
    reviewsCount: 156
  },
  {
    id: '5',
    name: 'Premium Silk Scarf',
    category: 'Fashion',
    price: 75.00,
    description: 'Hand-woven from 100% natural mulberry silk with exclusive floral prints.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: '6',
    name: 'Aromatic Diffuser',
    category: 'Lifestyle',
    price: 45.00,
    description: 'Ultrasonic technology that fills your home with soothing scents and calm vibes.',
    image: 'https://images.unsplash.com/photo-1602928294248-ad69e0bf9821?w=600&h=600&fit=crop',
    rating: 4.6,
    reviewsCount: 92
  },
  {
    id: '7',
    name: 'Ceramic Table Lamp',
    category: 'Lifestyle',
    price: 120.00,
    description: 'Handcrafted ceramic base with a warm linen shade for cozy evenings.',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=600&h=600&fit=crop',
    rating: 4.8,
    reviewsCount: 64,
    isFeatured: true
  },
  {
    id: '8',
    name: 'Leather Messenger Bag',
    category: 'Accessories',
    price: 210.00,
    description: 'The perfect companion for your daily commute. Fits up to a 15-inch laptop.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    rating: 4.7,
    reviewsCount: 112,
    discount: 10
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is FaisiBrands shipping policy?",
    answer: "We offer free standard shipping on all orders over $100. International shipping is available to over 50 countries."
  },
  {
    question: "Can I return a product?",
    answer: "Yes, we have a 30-day return policy. Items must be unused and in their original packaging."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, you will receive an email with a tracking number and a link to track your package."
  },
  {
    question: "Are your electronics covered by warranty?",
    answer: "All electronics sold on FaisiBrands come with a minimum 1-year manufacturer warranty."
  }
];
