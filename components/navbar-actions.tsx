"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

// Define the NavbarActions component
const NavbarActions = () => {
    // Initialize a state variable to track whether the component is mounted
    const [isMounted, setIsMounted] = useState(false);

    // Use useEffect to set isMounted to true once the component is mounted
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Get the router object for navigation
    const router = useRouter();

    // Use the useCart hook to get cart information
    const cart = useCart();

    // If the component is not mounted yet, return null (don't render)
    if (!isMounted) {
        return null;
    }

    // Render the NavbarActions component
    return (
        <div className="ml-auto flex items-center gap-x-4">
            {/* Button to navigate to the cart page */}
            <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
                {/* ShoppingBag icon */}
                <ShoppingBag
                    size={20}
                    color="white"
                />
                {/* Display the number of items in the cart */}
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions; 