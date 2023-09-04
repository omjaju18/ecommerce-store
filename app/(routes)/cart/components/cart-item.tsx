import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

// Define the CartItemProps interface to specify the data prop
interface CartItemProps {
    data: Product;
}

// Define the CartItem component with the provided data prop
const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    const cart = useCart();

    // Define a function to handle item removal from the cart
    const onRemove = () => {
        cart.removeItem(data.id);
    };

    return (
        // Render a list item for the cart item
        <li className="flex py-6 border-b">
            {/* Display the product image */}
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={data.images[0].url}
                    alt=""
                    className="object-cover object-center"
                />
            </div>
            {/* Display product details */}
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    {/* Render a remove button */}
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    {/* Display product name */}
                    <div className="flex justify-between">
                        <p className=" text-lg font-semibold text-black">
                            {data.name}
                        </p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        {/* Display product color and size */}
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p>
                    </div>
                    {/* Display product price with currency */}
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    );
}

// Export the CartItem component as the default export
export default CartItem;
