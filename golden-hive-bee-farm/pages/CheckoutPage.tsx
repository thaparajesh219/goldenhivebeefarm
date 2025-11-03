
import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Trash2 } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your order! Your pure honey is on its way.');
    dispatch({ type: 'CLEAR_CART' });
  };

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-off-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-playfair text-center text-dark-amber mb-8">Shopping Cart</h1>
        {state.items.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-light-amber mb-4">Your cart is empty.</p>
            <Link to="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-playfair text-dark-amber border-b pb-4 mb-4">Your Items</h2>
              <div className="space-y-4">
                {state.items.map(item => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                    <div className="flex-grow">
                      <h3 className="font-bold text-dark-amber">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-16 text-center border rounded-md"
                        min="1"
                      />
                    </div>
                    <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
              <h2 className="text-2xl font-playfair text-dark-amber border-b pb-4 mb-4">Order Summary</h2>
              <div className="space-y-2 text-light-amber">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between font-bold text-dark-amber text-lg pt-2 border-t mt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
              <form onSubmit={handleCheckout} className="mt-6">
                <h3 className="text-xl font-playfair text-dark-amber mb-4">Shipping & Payment</h3>
                <div className="space-y-4">
                    <input type="text" placeholder="Full Name" required className="w-full p-2 border rounded-md"/>
                    <input type="email" placeholder="Email" required className="w-full p-2 border rounded-md"/>
                    <input type="text" placeholder="Address" required className="w-full p-2 border rounded-md"/>
                    <input type="text" placeholder="Credit Card Number" required className="w-full p-2 border rounded-md"/>
                </div>
                <Button type="submit" variant="secondary" className="w-full mt-6">
                  Place Order
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
