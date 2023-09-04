
"use client"; // Using client-side rendering
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Color, Size } from "@/types";

import Filter from "./filter";

// Define the props interface for the MobileFilters component
interface MobileFiltersProps {
    sizes: Size[],
    colors: Color[],
}

// Define the MobileFilters component as a functional component
const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);

    // Function to open the filter dialog
    const onOpen = () => setOpen(true);

    // Function to close the filter dialog
    const onClose = () => setOpen(false);

    return (
        <>
            {/* Button to open the mobile filters */}
            <Button
                onClick={onOpen}
                className="flex items-center gap-x-2 lg:hidden"
            >
                Filters
                <Plus size={20} />
            </Button>

            {/* Dialog for mobile filters */}
            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>

                {/* Background color and opacity */}
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                {/* Dialog position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

                        {/* Close button */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>

                        {/* Filters */}
                        <div className="p-4">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
};

// Export the MobileFilters component as the default export
export default MobileFilters;
