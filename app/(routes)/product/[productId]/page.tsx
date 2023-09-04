import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';

// Define a constant for revalidation set to 0
export const revalidate = 0;

// Define the props interface for the ProductPage component
interface ProductPageProps {
    params: {
        productId: string;
    };
}

// Define the ProductPage component as an asynchronous functional component
const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    // Fetch product data based on the productId from the URL parameters
    const product = await getProduct(params.productId);

    // Fetch suggested products based on the category of the retrieved product
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    });

    // If the product data is not available, return null
    if (!product) {
        return null;
    }

    // Render the ProductPage component with the fetched data
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Display the product images using the Gallery component */}
                        <Gallery images={product.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            {/* Display product information using the Info component */}
                            <Info data={product} />
                        </div>
                    </div>
                    {/* Add a horizontal line */}
                    <hr className="my-10" />
                    {/* Display a list of related items using the ProductList component */}
                    <ProductList title="Related Items" items={suggestedProducts} />
                </div>
            </Container>
        </div>
    );
}

// Export the ProductPage component as the default export
export default ProductPage;
