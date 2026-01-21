
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product, Category } from '../types';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

interface ShopProps {
  addToCart: (p: Product) => void;
  toggleWishlist: (id: string) => void;
  wishlist: string[];
  initialSearch: string;
}

const Shop: React.FC<ShopProps> = ({ addToCart, toggleWishlist, wishlist, initialSearch }) => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low' | 'rating'>('featured');

  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam && CATEGORIES.includes(catParam as Category)) {
      setSelectedCategory(catParam as Category);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(initialSearch.toLowerCase());
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchCategory && matchSearch && matchPrice;
    }).sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price;
      if (sortBy === 'high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // Featured or Default
    });
  }, [selectedCategory, initialSearch, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 space-y-10">
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter by
            </h3>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Categories</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className={`block text-sm transition-colors ${selectedCategory === 'All' ? 'text-amber-600 font-bold' : 'text-slate-600 hover:text-amber-600'}`}
                >
                  All Products
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block text-sm transition-colors ${selectedCategory === cat ? 'text-amber-600 font-bold' : 'text-slate-600 hover:text-amber-600'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Price Range</h4>
            <div className="space-y-4">
              <input 
                type="range" 
                min="0" 
                max="1000" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-amber-600"
              />
              <div className="flex justify-between text-xs font-medium text-slate-500">
                <span>$0</span>
                <span>Up to ${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 p-6 rounded-2xl">
            <h4 className="font-bold text-slate-900 mb-2">Need advice?</h4>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">Use our AI assistant in the bottom right corner for personalized picks!</p>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="flex-grow">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <p className="text-sm text-slate-500">
              Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> products
              {initialSearch && <span> for "<span className="text-amber-600">{initialSearch}</span>"</span>}
            </p>
            
            <div className="flex items-center space-x-3">
              <label className="text-xs font-bold uppercase text-slate-400">Sort by:</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-sm border-slate-200 rounded-lg py-2 focus:ring-amber-500 border-none bg-slate-100 pr-8"
              >
                <option value="featured">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={addToCart} 
                  toggleWishlist={toggleWishlist}
                  isWishlisted={wishlist.includes(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-slate-500">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setPriceRange([0, 1000]); }}
                className="mt-6 text-amber-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
