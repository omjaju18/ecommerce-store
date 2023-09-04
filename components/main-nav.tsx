"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

// Define the MainNavProps interface for the MainNav component
interface MainNavProps {
    data: Category[]; // Accepts an array of Category objects as data
}

// Define the MainNav component
const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    // Get the current pathname using usePathname
    const pathname = usePathname();

    // Create an array of route objects based on the provided data
    const routes = data.map((route) => ({
        href: `/category/${route.id}`, // Construct the href for each category
        label: route.name, // Set the label for each category
        active: pathname === `/category/${route.id}`, // Check if the current pathname matches the category
    }));

    // Render the MainNav component
    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {/* Map through the routes and render links */}
            {routes.map((route) => (
                <Link
                    key={route.href} // Use the href as the unique key
                    href={route.href} // Set the link's href
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-black',
                        route.active ? 'text-black' : 'text-neutral-500' // Apply different styles based on active state
                    )}
                >
                    {route.label} {/* Display the category label */}
                </Link>
            ))}
        </nav>
    )
};

export default MainNav; 