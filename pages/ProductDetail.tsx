
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailProps {
  addToCart: (p: Product, q: number) => void;
  toggleWishlist: (id: string) => void;
  wishlist: string[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart, toggleWishlist, wishlist }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'reviews' | 'shipping'>('desc');

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="text-amber-600 font-bold">Back to Shop</button>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Images */}
        <div className="space-y-6">
          <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img src={`https://picsum.photos/400/400?random=${i + 10}`} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <div className="mb-6 flex items-center space-x-2">
            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{product.category}</span>
            {product.isNew && <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded">NEW ARRIVAL</span>}
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-slate-200'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-slate-500 font-medium">{product.reviewsCount} verified reviews</span>
          </div>

          <div className="flex items-end space-x-4 mb-8">
            <span className="text-4xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            {product.discount && (
              <span className="text-xl text-slate-400 line-through mb-1">
                ${(product.price / (1 - product.discount/100)).toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-slate-600 leading-relaxed mb-10 text-lg">
            {product.description} This exquisite piece is designed for those who value both form and function. Made with the finest materials to ensure lasting quality and timeless style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden h-14 w-full sm:w-32">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 h-full hover:bg-slate-50 text-xl">-</button>
              <span className="flex-1 text-center font-bold text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="flex-1 h-full hover:bg-slate-50 text-xl">+</button>
            </div>
            <button 
              onClick={() => addToCart(product, quantity)}
              className="flex-grow bg-slate-900 text-white h-14 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-xl flex items-center justify-center space-x-3"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Add to Selection</span>
            </button>
            <button 
              onClick={() => toggleWishlist(product.id)}
              className={`w-14 h-14 flex-shrink-0 flex items-center justify-center border-2 rounded-xl transition-all ${
                isWishlisted ? 'bg-amber-50 border-amber-600 text-amber-600' : 'border-slate-200 text-slate-400 hover:border-amber-600 hover:text-amber-600'
              }`}
            >
              <svg className="h-6 w-6" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Product Tabs */}
          <div className="border-t border-slate-100 pt-8">
            <div className="flex space-x-8 mb-6 border-b border-slate-100 pb-px">
              {['desc', 'reviews', 'shipping'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`pb-4 text-sm font-bold uppercase tracking-widest relative transition-colors ${
                    activeTab === tab ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab === 'desc' ? 'Description' : tab === 'reviews' ? 'Reviews' : 'Shipping'}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-600" />}
                </button>
              ))}
            </div>

            <div className="text-sm text-slate-600 leading-relaxed min-h-[100px] animate-in fade-in duration-300">
              {activeTab === 'desc' && (
                <ul className="list-disc pl-5 space-y-2">
                  <li>Premium handcrafted build quality</li>
                  <li>Exclusive design limited to FaisiBrands</li>
                  <li>Ethically sourced materials and labor</li>
                  <li>Rigorous quality control standards</li>
                </ul>
              )}
              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  <p className="font-medium text-slate-900">What others are saying:</p>
                  <p className="italic">"Absolutely gorgeous. Better than the photos!" - J. Doe</p>
                </div>
              )}
              {activeTab === 'shipping' && (
                <p>Enjoy free carbon-neutral shipping on this item. Typical delivery time: 3-5 business days within the US, 7-10 days international.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
