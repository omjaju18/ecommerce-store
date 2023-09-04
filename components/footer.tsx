// Footer component for the Ommie Store website
const Footer = () => {
    return (
        // Footer section with a white background and a top border
        <footer className="bg-white border-t">
            {/* Container for content with vertical padding */}
            <div className="mx-auto py-10">
                {/* Copyright text in the center with small text size and black color */}
                <p className="text-center text-xs text-black">
                    &copy; 2023 Ommie Store, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
};

// Export the Footer component as the default export
export default Footer;
