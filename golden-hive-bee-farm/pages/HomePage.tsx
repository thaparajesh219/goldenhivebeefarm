import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599827551925-564d7893a34a?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-playfair mb-4 leading-tight shadow-text">Welcome to Golden Hive Bee Farm!</h1>
          <p className="text-xl md:text-2xl font-light mb-8 shadow-text max-w-4xl mx-auto">Producing pure honey from happy bees and offering beekeeping courses and certified training.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products"><Button variant="primary">Shop Honey</Button></Link>
            <Link to="/training"><Button variant="secondary">Learn About Beekeeping</Button></Link>
            <Link to="/contact"><Button variant="primary" className="bg-transparent border-2 border-honey-gold text-honey-gold hover:bg-honey-gold hover:text-dark-amber">Contact Us</Button></Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair text-dark-amber mb-4">Our Commitment</h2>
          <p className="max-w-3xl mx-auto text-light-amber">
            At Golden Hive, we believe in sustainable and ethical beekeeping. Our bees forage freely on natural wildflowers, producing honey that is as pure as nature intended. We are dedicated to the health of our bees and the quality of our products.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;