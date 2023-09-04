// Import necessary modules and components
"use client"; // Using client-side rendering
import { ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

// Define the props interface for the Info component
interface InfoProps {
    data: Product
};

// Define the Info component as a functional component
const Info: React.FC<InfoProps> = ({ data }) => {
    const cart = useCart();

    // Function to handle adding the product to the cart
    const onAddToCart = () => {
        cart.addItem(data);
    }

    return (
        <div>
            {/* Display the product name */}
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                {/* Display the product price with currency formatting */}
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    {/* Display the product size */}
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>
                        {data?.size?.value}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    {/* Display the product color */}
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                {/* Button to add the product to the cart */}
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    Add To Cart
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </div>
    );
}

// Export the Info component as the default export
export default Info;
