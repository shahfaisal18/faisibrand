
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  total: number;
  onOrderSuccess: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, total, onOrderSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      onOrderSuccess();
      navigate('/order-success');
    }, 1500);
  };

  if (cart.length === 0) {
    navigate('/shop');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Form */}
        <div className="flex-grow">
          <h2 className="text-3xl font-serif font-bold mb-8">Checkout Information</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Contact Details</h3>
              <input 
                type="email" 
                placeholder="Email address" 
                required
                className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Shipping Address</h3>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  required
                  className="bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  required
                  className="bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
              <input 
                type="text" 
                placeholder="Address line" 
                required
                className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="City" 
                  required
                  className="bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Postal Code" 
                  required
                  className="bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                  value={formData.zip}
                  onChange={(e) => setFormData({...formData, zip: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Payment Details</h3>
              <input 
                type="text" 
                placeholder="Card Number" 
                required
                className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                value={formData.card}
                onChange={(e) => setFormData({...formData, card: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="MM/YY" 
                  required
                  className="bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                  value={formData.expiry}
                  onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="CVC" 
                  required
                  className="bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                  value={formData.cvc}
                  onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-amber-600 transition-all shadow-xl shadow-slate-200"
            >
              Complete Order — ${(total + 15).toFixed(2)}
            </button>
            <p className="text-center text-xs text-slate-400">By clicking complete, you agree to our terms and conditions.</p>
          </form>
        </div>

        {/* Right: Order Summary */}
        <aside className="w-full lg:w-96 bg-slate-50 rounded-3xl p-8 h-fit lg:sticky lg:top-32">
          <h3 className="text-xl font-bold mb-6">Order Summary</h3>
          <div className="space-y-4 mb-8 max-h-96 overflow-y-auto pr-2">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden border border-slate-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 line-clamp-1">{item.name}</p>
                    <p className="text-slate-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 border-t border-slate-200 pt-6 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-medium text-slate-900">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Flat Rate Shipping</span>
              <span className="font-medium text-slate-900">$15.00</span>
            </div>
            <div className="flex justify-between pt-4 border-t border-slate-200">
              <span className="text-lg font-bold">Total Due</span>
              <span className="text-lg font-bold text-amber-600">${(total + 15).toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-4 flex items-center space-x-3 border border-slate-100">
            <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c-.13.005-.26.009-.39.013a11.955 11.955 0 01-2.944 8.618 11.955 11.955 0 013.04 8.618c.004.13.008.26.013.39a11.955 11.955 0 018.618 2.944 11.955 11.955 0 018.618-2.944c.13-.004.26-.008.39-.013a11.955 11.955 0 012.944-8.618 11.955 11.955 0 01-3.04-8.618c-.005-.13-.009-.26-.013-.39z" />
              </svg>
            </div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Secured by 256-bit SSL encryption
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
