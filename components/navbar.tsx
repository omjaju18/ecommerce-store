
import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";

import getCategories from "@/actions/get-categories";

// Define the Navbar component as an asynchronous function
const Navbar = async () => {
    // Fetch categories asynchronously using the getCategories function
    const categories = await getCategories();

    // Render the Navbar component
    return (
        <div className="border-b">
            {/* Container to control the width of the navbar */}
            <Container>
                {/* Navbar content */}
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    {/* Link to the homepage with the "STORE" text */}
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">OMMIE-STORE</p>
                    </Link>

                    {/* Render the MainNav component with categories data */}
                    <MainNav data={categories} />
                    {/* Render the NavbarActions component */}
                    <NavbarActions /> 
                </div>
            </Container>
        </div>
    );
};

export default Navbar; // Export the Navbar component as the default export
