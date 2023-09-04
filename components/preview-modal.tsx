// Import necessary modules and components
"use client"; // Using client-side rendering
import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Modal from "@/components/ui/modal";

// Define the PreviewModal component
const PreviewModal = () => {
    const previewModal = usePreviewModal();
    const product = usePreviewModal((state) => state.data);

    // Check if there is no product data, and return null if that's the case
    if (!product) {
        return null;
    }

    return (
        <Modal
            open={previewModal.isOpen}
            onClose={previewModal.onClose}
        >
            {/* Grid layout for displaying product information */}
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    {/* Display the product gallery */}
                    <Gallery images={product.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    {/* Display product information */}
                    <Info data={product} />
                </div>
            </div>
        </Modal>
    );
}

// Export the PreviewModal component as the default export
export default PreviewModal;
