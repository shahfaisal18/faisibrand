
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface AuthProps {
  type: 'login' | 'signup';
}

const Auth: React.FC<AuthProps> = ({ type }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
        <div className="text-center">
          <Link to="/" className="inline-block mb-6">
            <span className="text-3xl font-serif font-bold tracking-tight text-slate-900">Faisi<span className="text-amber-600">Brands</span></span>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900">
            {type === 'login' ? 'Welcome Back' : 'Join Our Collective'}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {type === 'login' ? "Please enter your credentials to access your account." : "Create your premium account to enjoy exclusive benefits."}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {type === 'signup' && (
              <input
                type="text"
                required
                className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="Full Name"
              />
            )}
            <input
              type="email"
              required
              className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
              placeholder="Email address"
            />
            <input
              type="password"
              required
              className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500 transition-all"
              placeholder="Password"
            />
          </div>

          {type === 'login' && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500" />
                <label className="ml-2 text-slate-500">Remember me</label>
              </div>
              <a href="#" className="font-bold text-amber-600 hover:text-amber-500">Forgot password?</a>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-xl disabled:opacity-50"
          >
            {loading ? 'Processing...' : type === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-slate-500">
            {type === 'login' ? "New to FaisiBrands?" : "Already have an account?"}
          </span>
          <Link 
            to={type === 'login' ? '/signup' : '/login'} 
            className="ml-2 font-bold text-amber-600 hover:text-amber-500"
          >
            {type === 'login' ? 'Sign up for free' : 'Sign in now'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
