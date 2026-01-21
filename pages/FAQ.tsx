
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-500">Everything you need to know about our products and services.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
              <span className="font-bold text-slate-900">{faq.question}</span>
              <svg 
                className={`h-5 w-5 text-amber-600 transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === i && (
              <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 animate-in slide-in-from-top-2 duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center text-white">
        <h3 className="text-2xl font-serif font-bold mb-4">Still have questions?</h3>
        <p className="text-slate-400 mb-8">Can't find the answer you're looking for? Our concierge is ready to help.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:concierge@faisibrands.com" className="bg-amber-600 px-8 py-3 rounded-xl font-bold hover:bg-amber-500 transition-all">Email Us</a>
          <button className="bg-white/10 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">Live Chat</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
