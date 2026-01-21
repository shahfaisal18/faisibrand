
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Office" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Legacy</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">"Style is a way to say who you are without having to speak."</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-24">
        <div className="prose prose-slate lg:prose-xl mx-auto text-slate-600 leading-relaxed space-y-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">The FaisiBrands Vision</h2>
          <p>
            Founded in 2020 with a single vision: to bridge the gap between high-end artisan craftsmanship and the accessibility of the digital age. FaisiBrands wasn't born in a boardroom, but in a small studio dedicated to the appreciation of fine materials and enduring design.
          </p>
          <p>
            We believe that every item you bring into your life should serve a purpose and spark joy. Whether it's the tactile feel of our premium leather goods, the crisp precision of our electronics, or the comforting scents of our lifestyle collection—quality is non-negotiable.
          </p>
          <div className="bg-slate-50 p-10 rounded-3xl border-l-4 border-amber-600 my-12">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Commitment</h3>
            <p className="text-sm italic mb-0">
              "We don't just sell products; we curate experiences. Every brand under the Faisi umbrella undergoes a rigorous vetting process. If it doesn't meet our standards for longevity, ethics, and aesthetics, it doesn't make the cut."
            </p>
          </div>
          <p>
            Today, FaisiBrands serves a global community of discerning individuals who refuse to settle for the disposable culture of fast fashion. We are constantly searching the globe for the next generation of master makers, ensuring that the legacy of quality continues for years to come.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden h-[500px] shadow-2xl">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1000&fit=crop" className="w-full h-full object-cover" alt="Team" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold">Sustainability & Ethics</h2>
          <p className="text-slate-600 leading-relaxed">
            We recognize our responsibility to the planet. FaisiBrands is committed to reaching carbon neutrality by 2026. We prioritize partners who use recycled materials, sustainable energy, and ensure fair living wages for every worker in their supply chain.
          </p>
          <ul className="space-y-4">
            {[
              '100% Plastic-free packaging by 2025',
              'Sourcing from 80% renewable-energy facilities',
              'Fair Trade certification for all textile partners',
              'Global reforestation program with every purchase'
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-sm font-medium text-slate-700">
                <div className="h-2 w-2 bg-amber-600 rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
