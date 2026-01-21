
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/shop');
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">Faisi<span className="text-amber-600">Brands</span></span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Shop</Link>
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Our Vision</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Contact</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search premium products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 border-transparent focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent rounded-full py-2 px-4 pl-10 text-sm transition-all"
              />
              <svg className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <Link to="/login" className="hidden sm:block text-slate-600 hover:text-amber-600 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            <button onClick={onOpenCart} className="relative text-slate-600 hover:text-amber-600 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-600 hover:text-amber-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 space-y-4 animate-in slide-in-from-top duration-300">
          <Link to="/" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/about" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Our Vision</Link>
          <Link to="/contact" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <hr />
          <Link to="/login" className="block text-base font-medium text-amber-600" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
