import { Footer } from "@/components/footer";

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center px-4 pt-32">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight m-4 text-blue-800">Terms and Agreements</h1>

                <div className="text-left max-w-4xl text-lg space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <p className="text-gray-700">
                        Welcome to Calendr! By using our services, you agree to the following terms and conditions. Please read them carefully.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">1. Acceptance of Terms</h2>
                    <p className="text-gray-700">
                        By accessing or using Calendr, you agree to be bound by these terms. If you do not agree, you may not use our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">2. Use of Services</h2>
                    <p className="text-gray-700">
                        You agree to use Calendr only for lawful purposes and in compliance with all applicable laws and regulations. You are responsible for the accuracy of the information you provide.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">3. Privacy</h2>
                    <p className="text-gray-700">
                        Your privacy is important to us. Please review our <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a> to understand how we collect, use, and protect your information.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">4. Use of Google Calendar</h2>
                    <p className="text-gray-700">
                        Calendr integrates with Google Calendar to provide scheduling functionality. By using our services, you authorize us to access your Google Calendar to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Retrieve your calendar events to check for availability.</li>
                        <li>Create new events on your behalf when a meeting is scheduled.</li>
                    </ul>
                    <p className="text-gray-700">
                        We only access the information necessary to provide our services and do not share your calendar data with third parties. For more details, please review our <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a>.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">5. Limitation of Liability</h2>
                    <p className="text-gray-700">
                        Calendr is not responsible for any damages or losses resulting from your use of our services. Use Calendr at your own risk.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">6. Changes to Terms</h2>
                    <p className="text-gray-700">
                        We reserve the right to update these terms at any time. Continued use of our services after changes are made constitutes your acceptance of the new terms.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">7. Contact Us</h2>
                    <p className="text-gray-700">
                        If you have any questions about these terms, please contact us at <a href="mailto:nikhilmahadevan61@gmail.com" className="text-blue-500 underline">nikhilmahadevan61@gmail.com</a>.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}