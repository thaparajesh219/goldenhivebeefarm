
import React, { useState } from 'react';
import { galleryItems } from '../constants';
import type { GalleryItem } from '../types';
import { X } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="bg-off-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair text-center text-dark-amber mb-8">From Our Farm</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(item)}>
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-xl font-bold text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.imageUrl} alt={selectedImage.title} className="w-full h-auto object-contain rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200"
            >
              <X size={24} />
            </button>
            <div className="text-white text-center mt-2 bg-black/50 p-2 rounded-b-lg">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
