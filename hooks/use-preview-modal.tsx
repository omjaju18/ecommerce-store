// Import necessary modules and components
import { create } from 'zustand';

import { Product } from '@/types';

// Define the interface for the PreviewModalStore
interface PreviewModalStore {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
}

// Create a custom hook called usePreviewModal using Zustand
const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    // Function to open the preview modal with product data
    onOpen: (data: Product) => set({ isOpen: true, data }),
    // Function to close the preview modal
    onClose: () => set({ isOpen: false }),
}));

// Export the usePreviewModal custom hook as the default export
export default usePreviewModal;
