
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0; // Define revalidation for Next.js static generation

// Define the HomePage component as an asynchronous function
const HomePage = async () => {
    // Fetch featured products asynchronously using the getProducts function
    const products = await getProducts({ isFeatured: true });

    // Fetch billboard data asynchronously using the getBillboard function
    const billboard = await getBillboard("012dad66-d78c-435f-90ea-6cecc7412e07");

    // Render the HomePage component
    return (
        <Container>
            <div className="space-y-10 pb-10">
                {/* Render the Billboard component with the fetched data */}
                <Billboard
                    data={billboard}
                />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    {/* Render the ProductList component with featured products */}
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
};

export default HomePage; // Export the HomePage component as the default export
