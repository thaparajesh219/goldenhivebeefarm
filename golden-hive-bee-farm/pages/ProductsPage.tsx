import React, { useState } from 'react';
import { products } from '../constants';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

const ProductCard: React.FC<{ product: Product, onAddToCart: (product: Product) => void }> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 flex flex-col">
      <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold font-playfair text-dark-amber">{product.name}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-light-amber">${product.price.toFixed(2)}</span>
          <Button onClick={() => onAddToCart(product)} className="px-4 py-2 text-sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  const { dispatch } = useCart();
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    setShowNotification(`${product.name} added to cart!`);
    setTimeout(() => setShowNotification(null), 3000);
  };
  
  const productCategories = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="bg-off-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair text-center text-dark-amber mb-12">Our Products</h1>
        {Object.entries(productCategories).map(([category, items]) => (
            <section key={category} className="mb-12">
                 <h2 className="text-3xl font-playfair text-dark-amber mb-8 border-b-2 border-honey-gold pb-2">{category}</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                 </div>
            </section>
        ))}
      </div>
      {showNotification && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-3 px-5 rounded-lg shadow-xl flex items-center gap-3 animate-bounce">
            <CheckCircle />
            {showNotification}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;