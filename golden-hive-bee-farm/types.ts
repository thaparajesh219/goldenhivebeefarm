export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Honey & Consumables' | 'Beekeeping Equipment';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}