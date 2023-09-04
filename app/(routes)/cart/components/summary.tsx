"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";



// Define the Summary component
const Summary = () => {
    // Access query parameters from the URL
    const searchParams = useSearchParams();

    // Retrieve cart items and the removeAll function from the cart context
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    // Check for payment-related query parameters and display toasts accordingly
    useEffect(() => {
        if (searchParams.get('success')) {
            // Display a success toast when payment is completed
            toast.success('Payment completed.');
            // Remove all items from the cart
            removeAll();
        }

        if (searchParams.get('canceled')) {
            // Display an error toast when payment is canceled
            toast.error('Something went wrong.');
        }
    }, [searchParams, removeAll]);

    // Calculate the total price of items in the cart
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0);

    // Handle the checkout process
    const onCheckout = async () => {
        // Make a POST request to the checkout API with productIds
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id)
        });

        // Redirect to the payment URL received in the response
        window.location = response.data.url;
    }

    return (
        <div
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 className="text-lg font-medium text-gray-900">
                Order summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">Order total</div>
                    {/* Display the total price with currency */}
                    <Currency value={totalPrice} />
                </div>
            </div>
            {/* Render the "Checkout" button */}
            <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
                Checkout
            </Button>
        </div>
    );
}

// Export the Summary component as the default export
export default Summary;
