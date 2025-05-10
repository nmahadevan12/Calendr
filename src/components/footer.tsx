export function Footer() {
    return (
        <footer className="bg-blue-800 text-white py-4 w-full">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Calendr. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="/about" className="hover:underline">
                        About
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                    <a href="/privacy" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="hover:underline">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}