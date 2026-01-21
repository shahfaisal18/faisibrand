
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  addToCart: (p: Product) => void;
  toggleWishlist: (id: string) => void;
  isWishlisted: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart, toggleWishlist, isWishlisted }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.discount && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={() => toggleWishlist(product.id)}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow-md transition-all ${
          isWishlisted ? 'bg-amber-600 text-white' : 'bg-white text-slate-400 hover:text-amber-600'
        }`}
      >
        <svg className="h-5 w-5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </Link>

      {/* Info */}
      <div className="p-5">
        <p className="text-xs text-amber-600 font-bold mb-1 uppercase tracking-wider">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-slate-900 mb-2 truncate group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mb-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-slate-200'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-slate-400 ml-2">({product.reviewsCount})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            {product.discount && (
              <span className="text-xs text-slate-400 line-through">
                ${(product.price / (1 - product.discount/100)).toFixed(2)}
              </span>
            )}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="p-3 bg-slate-900 text-white rounded-lg hover:bg-amber-600 transition-colors shadow-lg hover:shadow-amber-200"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
