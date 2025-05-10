import { Footer } from "@/components/footer";

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center px-4 pt-32">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight m-4 text-blue-800">Solutions</h1>
                <div className="text-left max-w-4xl text-lg space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <p className="text-gray-700">
                        Welcome to the Solutions page! Discover how Calendr can help you simplify scheduling and save time.
                    </p>
                    <p className="text-gray-700">
                        Our solutions are designed to meet the needs of individuals, teams, and businesses of all sizes.
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-gray-700">
                        <li>
                            <a href="/team-solutions" className="text-blue-500 underline hover:text-blue-700">
                                Team Solutions
                            </a> - Collaborate and schedule meetings effortlessly.
                        </li>
                        <li>
                            <a href="/business-solutions" className="text-blue-500 underline hover:text-blue-700">
                                Business Solutions
                            </a> - Streamline scheduling for your organization.
                        </li>
                        <li>
                            <a href="/individual-solutions" className="text-blue-500 underline hover:text-blue-700">
                                Individual Solutions
                            </a> - Manage your personal schedule with ease.
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