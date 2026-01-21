
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-4xl font-serif font-bold mb-4 text-slate-900">Order Placed Successfully!</h1>
      <p className="text-slate-600 max-w-lg mx-auto mb-10 text-lg">
        Thank you for choosing FaisiBrands. We've received your order and our artisans are beginning preparation. You will receive a confirmation email shortly.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/shop" className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-amber-600 transition-all">
          Continue Shopping
        </Link>
        <button className="bg-slate-100 text-slate-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all">
          Track Your Order
        </button>
      </div>
      <p className="mt-16 text-slate-400 text-sm italic">"Luxury is in each detail." — Hubert de Givenchy</p>
    </div>
  );
};

export default OrderSuccess;
