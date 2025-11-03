
import React from 'react';
import { blogPosts } from '../constants';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-off-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair text-center text-dark-amber mb-8">Our Beekeeping Journal</h1>
        <div className="space-y-12 max-w-4xl mx-auto">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <img src={post.imageUrl} alt={post.title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-playfair text-dark-amber mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">By {post.author} on {post.date}</p>
                  <p className="text-light-amber mb-4">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a href="#" className="text-honey-gold font-bold hover:underline">Read More &rarr;</a>
                  <div className="flex gap-3 text-gray-500">
                    <a href="#" className="hover:text-blue-600"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-blue-700"><Linkedin size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
