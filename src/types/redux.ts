export interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface RootState {
  userData: {
    userData: UserData | null;
  };
  darkMode: {
    isDarkMode: boolean;
  };
  colorSelected: {
    colorSelected: {
      color: string;
    };
  };
  cart: CartItem[];
}

export interface CartItem {
  product: string;
  quantity: number;
  color: string;
}
