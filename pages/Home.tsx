
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  addToCart: (p: Product) => void;
  toggleWishlist: (id: string) => void;
  wishlist: string[];
}

const Home: React.FC<HomeProps> = ({ addToCart, toggleWishlist, wishlist }) => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Elegance in <br /><span className="text-amber-500">Every Detail.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Experience the pinnacle of curated lifestyle brands. From high-end fashion to cutting-edge tech, FaisiBrands defines the modern standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop" 
                className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-xl font-bold text-center transition-all shadow-lg shadow-amber-900/20"
              >
                Shop Collection
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-center transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Explore by Category</h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Fashion', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop', items: '240+ Items' },
            { name: 'Electronics', img: 'https://images.unsplash.com/photo-1526733158272-11144009ecd5?w=600&h=800&fit=crop', items: '120+ Items' },
            { name: 'Accessories', img: 'https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?w=600&h=800&fit=crop', items: '80+ Items' },
            { name: 'Lifestyle', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=800&fit=crop', items: '150+ Items' },
          ].map((cat) => (
            <Link 
              key={cat.name} 
              to={`/shop?category=${cat.name}`} 
              className="group relative h-[400px] rounded-2xl overflow-hidden"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-1">{cat.name}</h3>
                <p className="text-amber-500 text-sm font-medium">{cat.items}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Curated Selection</h2>
              <p className="text-slate-500">Hand-picked by our stylists for your consideration.</p>
            </div>
            <Link to="/shop" className="text-amber-600 font-bold hover:text-amber-500 flex items-center">
              View All Products
              <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
                toggleWishlist={toggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Authenticity Guaranteed</h3>
            <p className="text-slate-500 text-sm">We source directly from premium artisans and official brand manufacturers.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Fast Global Shipping</h3>
            <p className="text-slate-500 text-sm">Free tracked shipping for orders over $100 to over 50 countries worldwide.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Support</h3>
            <p className="text-slate-500 text-sm">Our concierge service is available 24/7 to help you with your styling needs.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Voice of the Customer</h2>
            <p className="text-slate-400">Join thousands of satisfied premium shoppers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Marcus Chen', role: 'Tech Executive', review: 'The headphones I ordered from Faisi are simply unmatched. The delivery was fast and the packaging was pure luxury.' },
              { name: 'Elena Rodriguez', role: 'Fashion Designer', review: 'Finally a store that understands the balance between style and substance. Their silk collection is divine.' },
              { name: 'Samuel Wilson', role: 'Modern Minimalist', review: 'FaisiBrands is my go-to for home tech. Clean designs, high performance, and great customer service.' },
            ].map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="flex text-amber-500 mb-6">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{review.review}"</p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
