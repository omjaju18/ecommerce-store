// Import necessary components and actions
import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';

import getProducts from "@/actions/get-products";
import getCategory from '@/actions/get-category';
import getSizes from '@/actions/get-sizes';
import getColors from '@/actions/get-colors';

// Import filter components
import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';

// Set revalidation to 0 for this page
export const revalidate = 0;

// Define the props interface for the CategoryPage component
interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

// Define the CategoryPage component as an asynchronous functional component
const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    // Fetch products based on category and filter parameters
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });

    // Fetch available sizes and colors for filtering
    const sizes = await getSizes();
    const colors = await getColors();

    // Fetch category information for the billboard
    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-white">
            <Container>
                {/* Display a billboard with category information */}
                <Billboard
                    data={category.billboard}
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Display mobile filters */}
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            {/* Display filter options for sizes and colors */}
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {/* Display a message when there are no results */}
                            {products.length === 0 && <NoResults />}
                            {/* Display product cards in a grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

// Export the CategoryPage component as the default export
export default CategoryPage;
