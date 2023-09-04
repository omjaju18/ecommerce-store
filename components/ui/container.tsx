
interface ContainerProps {
    children: React.ReactNode; // Accepts a React node as children
}

// Define the Container component
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        // Container with a maximum width and centered horizontally
        <div className="mx-auto max-w-7xl">
            {children} {/* Render the children components inside the container */}
        </div>
    );
};

export default Container;