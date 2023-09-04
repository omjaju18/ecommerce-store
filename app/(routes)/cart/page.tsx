// Import necessary modules and components
"use client"; // Using client-side rendering
import { useEffect, useState } from 'react';

import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';

import Summary from './components/summary'
import CartItem from './components/cart-item';

// Set revalidation to 0 for this page
export const revalidate = 0;

// Define the CartPage component
const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    // Use useEffect to ensure the component is mounted
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // If the component is not yet mounted, return null
    if (!isMounted) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {/* Display a message when the cart is empty */}
                            {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
                            <ul>
                                {/* Display cart items */}
                                {cart.items.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </ul>
                        </div>
                        {/* Display the cart summary */}
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    )
};

// Export the CartPage component as the default export
export default CartPage;
