// Import necessary modules and libraries
import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from '@/types';
import { AlertTriangle } from 'lucide-react';

// Define the interface for the CartStore
interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

// Create a custom hook called useCart using Zustand
const useCart = create(
    // Apply persistence to the CartStore state
    persist<CartStore>((set, get) => ({
        items: [],
        // Function to add a product to the cart
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) {
                // Display a toast message if the item is already in the cart
                return toast('Item already in cart.');
            }

            // Add the new item to the cart and display a success toast
            set({ items: [...get().items, data] });
            toast.success('Item added to cart.');
        },
        // Function to remove a product from the cart by ID
        removeItem: (id: string) => {
            // Remove the item with the specified ID from the cart and display a success toast
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success('Item removed from cart.');
        },
        // Function to remove all items from the cart
        removeAll: () => set({ items: [] }),
    }), {
        // Configure the storage for persisting cart data in localStorage
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
);

// Export the useCart custom hook as the default export
export default useCart;
