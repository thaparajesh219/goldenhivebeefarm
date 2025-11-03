import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { BeeIcon } from '../constants';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/products', text: 'Shop' },
    { to: '/training', text: 'Training' },
    { to: '/gallery', text: 'Gallery' },
    { to: '/blog', text: 'Blog' },
    { to: '/contact', text: 'Contact Us' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-lg transition-colors duration-300 ${isActive ? 'bg-honey-gold text-dark-amber' : 'hover:bg-honey-gold/50'}`;

  return (
    <header className="bg-off-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-playfair text-dark-amber">
          <BeeIcon className="w-8 h-8 text-honey-gold" />
          Golden Hive
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-light-amber font-medium">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.text}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/checkout" className="relative text-dark-amber hover:text-light-amber transition-colors">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden text-dark-amber"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-off-white pb-4">
          <nav className="flex flex-col items-center gap-4 text-light-amber font-medium">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setIsMenuOpen(false)}>
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;