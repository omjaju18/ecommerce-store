
"use client"; // Using client-side rendering

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";

// Define the props interface for the Filter component
interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
};

// Define the Filter component as a functional component
const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey,
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get the currently selected value from the query parameters
    const selectedValue = searchParams.get(valueKey);

    // Function to handle filter button click
    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        // Create a new query object with the selected filter value
        const query = {
            ...current,
            [valueKey]: id
        };

        // If the current filter value is the same as the selected value, remove it
        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        // Construct the new URL with the updated query parameters
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true });

        // Update the route to reflect the selected filter
        router.push(url);
    }

    return (
        <div className="mb-8">
            {/* Display the filter name */}
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        {/* Display filter buttons */}
                        <Button
                            className={cn(
                                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                                selectedValue === filter.id && 'bg-black text-white'
                            )}
                            onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Export the Filter component as the default export
export default Filter;
