
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { BeeIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-amber text-off-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-playfair mb-2 flex items-center justify-center md:justify-start gap-2">
              <BeeIcon className="w-6 h-6 text-honey-gold" />
              Golden Hive Bee Farm
            </h3>
            <p className="text-sm text-gray-300">Pure Honey from Happy Bees</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#/products" className="hover:text-honey-gold">Shop</a></li>
              <li><a href="#/blog" className="hover:text-honey-gold">Blog</a></li>
              <li><a href="#/contact" className="hover:text-honey-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-honey-gold"><Facebook size={24} /></a>
              <a href="#" className="hover:text-honey-gold"><Instagram size={24} /></a>
              <a href="#" className="hover:text-honey-gold"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-light-amber mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Golden Hive Bee Farm. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
