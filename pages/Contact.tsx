
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Whether you have a question about our collections or need styling advice, our dedicated team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
          {submitted ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
              <p className="text-slate-500">We'll get back to you within 24 luxury hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-amber-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    type="text" required 
                    className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    type="email" required 
                    className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
                <select className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500">
                  <option>Product Inquiry</option>
                  <option>Order Support</option>
                  <option>Collaboration</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea 
                  required rows={5}
                  className="w-full bg-slate-50 border-slate-200 rounded-xl py-4 px-6 focus:ring-2 focus:ring-amber-500"
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-xl shadow-slate-100">
                Send Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Info & Map */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Our Studio</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                77 Luxury Lane<br />
                Fifth Avenue District<br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Contact Info</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                concierge@faisibrands.com<br />
                +1 (888) FAISI-LUXE<br />
                Mon-Fri: 9am - 6pm EST
              </p>
            </div>
          </div>

          <div className="h-80 bg-slate-100 rounded-3xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
            {/* Embedded Google Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1654876251234!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
            ></iframe>
          </div>

          <div className="bg-amber-50 p-8 rounded-3xl">
            <h3 className="font-bold text-amber-900 mb-2">Private Showings</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              We offer exclusive private viewing sessions in our New York studio. Contact our concierge to schedule an appointment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
