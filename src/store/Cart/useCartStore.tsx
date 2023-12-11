// cartStore.ts
import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        // If the item with the same ID exists, increase its quantity
        const updatedcartItems = [...state.cartItems];
        updatedcartItems[existingItemIndex].quantity += 1;

        return { cartItems: updatedcartItems };
      } else {
        // If the item does not exist, add it to the cart with a quantity of 1
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
    });
  },
  removeFromCart: (productId) => {
    set((state) => {
      const updatedcartItems = state.cartItems.map((item) => {
        if (item.id === productId) {
          // Reduce the quantity and remove the item if its quantity becomes zero
          item.quantity -= 1;
        }
        return item;
      });

      // Remove cartItems with quantity <= 0
      const filteredcartItems = updatedcartItems.filter(
        (item) => item.quantity > 0
      );

      return { cartItems: filteredcartItems };
    });
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
}));

export default useCartStore;
