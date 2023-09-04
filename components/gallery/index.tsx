
"use client"; // Using the client-side rendering for Next.js

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";

// Define the props interface for the Gallery component
interface GalleryProps {
    images: Image[];
}

// Define the Gallery component as a functional component
const Gallery: React.FC<GalleryProps> = ({
    images = []
}) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Display a grid of tabs for each image */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        // Render a GalleryTab component for each image
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            {/* Display the image panels */}
            <Tab.Panels className="aspect-square w-full">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        {/* Display each image using NextImage */}
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                            <NextImage
                                fill
                                src={image.url}
                                alt="Image"
                                className="object-cover object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}

// Export the Gallery component as the default export
export default Gallery;
