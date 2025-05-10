import { Footer } from "@/components/footer";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center px-4 pt-32">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight m-4 text-blue-800">Resources</h1>
                <div className="text-left max-w-4xl text-lg space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <p className="text-gray-700">
                        Welcome to the Resources page! Here, you'll find helpful guides, articles, and tools to make the most of Calendr.
                    </p>
                    <p className="text-gray-700">
                        Explore our resources to learn how to streamline your scheduling process and improve productivity.
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-gray-700">
                        <li>
                            <a href="/guides" className="text-blue-500 underline hover:text-blue-700">
                                Scheduling Guides
                            </a> - Learn how to optimize your scheduling process.
                        </li>
                        <li>
                            <a href="/tools" className="text-blue-500 underline hover:text-blue-700">
                                Productivity Tools
                            </a> - Discover tools to boost your efficiency.
                        </li>
                        <li>
                            <a href="/faq" className="text-blue-500 underline hover:text-blue-700">
                                FAQs
                            </a> - Find answers to common questions.
                        </li>
                    </ul>
                    <p className="text-gray-700 italic">
                        Note: These links will be set up shortly. Stay tuned for updates!
                    </p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}