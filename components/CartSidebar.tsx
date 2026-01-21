
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  total: number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, onUpdateQty, onRemove, total }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar Content */}
      <div className="relative w-full max-w-md bg-white shadow-2xl h-full flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Your Selection ({cart.length})</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <svg className="h-10 w-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Your cart is empty</h3>
              <p className="text-slate-500 mb-8">Looks like you haven't added anything yet.</p>
              <Link 
                to="/shop" 
                onClick={onClose}
                className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex space-x-4 animate-in fade-in zoom-in duration-300">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-red-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="px-2 py-1 hover:bg-slate-50 text-slate-500"
                      >-</button>
                      <span className="px-2 py-1 text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="px-2 py-1 hover:bg-slate-50 text-slate-500"
                      >+</button>
                    </div>
                    <span className="text-sm font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
            </div>
            <Link 
              to="/checkout" 
              onClick={onClose}
              className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-xl"
            >
              Secure Checkout
            </Link>
            <p className="text-center text-xs text-slate-400 mt-4">Shipping and taxes calculated at checkout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
