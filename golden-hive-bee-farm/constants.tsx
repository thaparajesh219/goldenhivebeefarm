import React from 'react';
import type { Product, GalleryItem, BlogPost } from './types';

export const products: Product[] = [
  { id: 1, name: 'Wildflower Honey', description: 'A delightful blend from various blossoms.', price: 12.99, imageUrl: 'https://picsum.photos/seed/honey1/400/400', category: 'Honey & Consumables' },
  { id: 2, name: 'Clover Honey', description: 'Classic, sweet, and light.', price: 10.99, imageUrl: 'https://picsum.photos/seed/honey2/400/400', category: 'Honey & Consumables' },
  { id: 3, name: 'Raw Honeycomb', description: 'Pure honey in its natural state.', price: 18.50, imageUrl: 'https://picsum.photos/seed/honey3/400/400', category: 'Honey & Consumables' },
  { id: 4, name: 'Beeswax Candles', description: 'Hand-poured, natural candles.', price: 15.00, imageUrl: 'https://picsum.photos/seed/honey4/400/400', category: 'Honey & Consumables' },
  { id: 5, name: 'Royal Jelly', description: 'A nutritious superfood from the hive.', price: 25.00, imageUrl: 'https://picsum.photos/seed/honey7/400/400', category: 'Honey & Consumables' },
  { id: 6, name: 'Propolis Tincture', description: 'Natural immune system support.', price: 22.00, imageUrl: 'https://picsum.photos/seed/honey6/400/400', category: 'Honey & Consumables' },
  { id: 7, name: 'Langstroth Bee Hive', description: 'A complete 10-frame hive, perfect for beginners and experts alike. Made from high-quality pine.', price: 150.00, imageUrl: 'https://picsum.photos/seed/hive1/400/400', category: 'Beekeeping Equipment' },
  { id: 8, name: 'Top Bar Bee Hive', description: 'A natural and simple hive design for hands-off beekeeping. Includes 28 top bars.', price: 120.00, imageUrl: 'https://picsum.photos/seed/hive2/400/400', category: 'Beekeeping Equipment' },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/farm1/800/600', title: 'Bees at Work', description: 'Our happy bees collecting nectar.' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/farm2/800/600', title: 'Golden Harvest', description: 'Extracting pure, golden honey.' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/farm3/800/600', title: 'Our Apiary', description: 'The hives nestled in the meadows.' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/farm4/800/600', title: 'Honeycomb Frame', description: 'A perfect frame of capped honey.' },
  { id: 5, imageUrl: 'https://picsum.photos/seed/farm5/800/600', title: 'Freshly Potted Honey', description: 'Jars ready for our customers.' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/farm6/800/600', title: 'Beekeeper Inspection', description: 'Ensuring our colonies are healthy.' },
];

export const blogPosts: BlogPost[] = [
  { id: 1, title: 'How to Start Your Own Bee Farm', author: 'Rajesh Thapa', date: 'October 26, 2023', excerpt: 'Our guide will walk you through the essential first steps of setting up your first hive and caring for bees...', imageUrl: 'https://picsum.photos/seed/blog1/600/400' },
  { id: 2, title: 'Top 5 Beekeeping Tools You Need', author: 'John Smith', date: 'October 15, 2023', excerpt: 'From hive tools to smokers, we break down the essential equipment every beekeeper needs to get started...', imageUrl: 'https://picsum.photos/seed/blog2/600/400' },
  { id: 3, title: 'Why Bees Are Important for Our Ecosystem', author: 'Jane Doe', date: 'September 30, 2023', excerpt: 'Bees are vital to our ecosystem. Learn about the challenges they face and how you can help protect our most important pollinators...', imageUrl: 'https://picsum.photos/seed/blog3/600/400' },
  { id: 4, title: 'Customer Story: From Hobbyist to Honey Seller', author: 'Guest Post', date: 'September 15, 2023', excerpt: 'Read about how one of our students took our beginner\'s course and turned their passion for bees into a thriving local business...', imageUrl: 'https://picsum.photos/seed/blog4/600/400' },
];

export const BeeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.981 4.981 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5A1.5 1.5 0 0 1 15 11.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM8 7a.5.5 0 0 0-.5.5v.5h1v-.5A.5.5 0 0 0 8 7zm-2 3a.5.5 0 0 0-.5.5v.5h1v-.5a.5.5 0 0 0-.5-.5zm4 0a.5.5 0 0 0-.5.5v.5h1v-.5a.5.5 0 0 0-.5-.5z"/>
  </svg>
);