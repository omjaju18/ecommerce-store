// Import necessary modules and components
import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";

// Define the props interface for the GalleryTab component
interface GalleryTabProps {
    image: Image;
}

// Define the GalleryTab component as a functional component
const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return (
        <Tab
            // Apply styles and attributes to the tab component
            className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
        >
            {({ selected }) => (
                <div>
                    {/* Display the image within a square container */}
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <NextImage
                            fill
                            src={image.url}
                            alt=""
                            className="object-cover object-center"
                        />
                    </span>
                    {/* Display a ring around the selected tab */}
                    <span
                        className={cn(
                            'absolute inset-0 rounded-md ring-2 ring-offset-2',
                            selected ? 'ring-black' : 'ring-transparent',
                        )}
                    />
                </div>
            )}
        </Tab>
    );
}

// Export the GalleryTab component as the default export
export default GalleryTab;
