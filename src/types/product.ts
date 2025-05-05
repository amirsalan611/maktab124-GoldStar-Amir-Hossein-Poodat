export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  images: string[];
  category: string;
  subCategory: string;
  brand: string;
  inStock: boolean;
  colors: string[];
  createdAt: string;
  updatedAt: string;
  quantity: number;
}

export interface CartItem {
  product: string;
  quantity: number;
  color: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface SubCategory {
  _id: string;
  name: string;
  category: string;
}
