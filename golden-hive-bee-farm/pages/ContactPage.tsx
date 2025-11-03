import React from 'react';
import Button from '../components/Button';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    // In a real app, you would handle form submission here
  };

  return (
    <div className="bg-off-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-playfair text-center text-dark-amber mb-8">Get in Touch</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-playfair text-dark-amber mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-amber">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-honey-gold focus:border-honey-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-amber">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-honey-gold focus:border-honey-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-amber">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-honey-gold focus:border-honey-gold"></textarea>
              </div>
              <div>
                <Button type="submit" variant="secondary" className="w-full">Submit</Button>
              </div>
            </form>
          </div>
          <div className="space-y-8 text-light-amber">
            <h2 className="text-2xl font-playfair text-dark-amber">Contact Information</h2>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-honey-gold mt-1" />
              <div>
                <h3 className="font-semibold text-dark-amber">Farm Address</h3>
                <p>Dolakha, Nepal, Mirge</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-honey-gold mt-1" />
              <div>
                <h3 className="font-semibold text-dark-amber">Phone</h3>
                <p>9801198269</p>
                <p>9861439652</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-honey-gold mt-1" />
              <div>
                <h3 className="font-semibold text-dark-amber">Email</h3>
                <p>thaparajesh219@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-playfair text-dark-amber mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-dark-amber"><Facebook size={28} /></a>
                <a href="#" className="hover:text-dark-amber"><Instagram size={28} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;