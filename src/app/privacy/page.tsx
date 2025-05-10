import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center px-4 pt-32">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight m-4 text-blue-800">Privacy Policy</h1>

                <div className="text-left max-w-4xl text-lg space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <p className="text-gray-700">
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use Calendr.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">1. Information We Collect</h2>
                    <p className="text-gray-700">
                        We collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Personal information you provide when signing up, such as your name, email address, and password.</li>
                        <li>Calendar data from Google Calendar to check availability and schedule meetings.</li>
                        <li>Usage data, such as your interactions with our platform, to improve our services.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600">2. How We Use Your Information</h2>
                    <p className="text-gray-700">
                        We use your information to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Provide and improve our scheduling services.</li>
                        <li>Send notifications and updates about your meetings.</li>
                        <li>Ensure the security and functionality of our platform.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600">3. Google Calendar Integration</h2>
                    <p className="text-gray-700">
                        Calendr integrates with Google Calendar to provide scheduling functionality. By using our services, you authorize us to access your Google Calendar to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Retrieve your calendar events to check for availability.</li>
                        <li>Create new events on your behalf when a meeting is scheduled.</li>
                    </ul>
                    <p className="text-gray-700">
                        We only access the information necessary to provide our services and do not share your calendar data with third parties. For more details, please review our <a href="/terms" className="text-blue-500 underline">Terms and Agreements</a>.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">4. Sharing Your Information</h2>
                    <p className="text-gray-700">
                        We do not share your personal information with third parties, except as necessary to provide our services (e.g., integrating with Google Calendar) or as required by law.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">5. Data Security</h2>
                    <p className="text-gray-700">
                        We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">6. Your Rights</h2>
                    <p className="text-gray-700">
                        You have the right to access, update, or delete your personal information. Please contact us at <a href="mailto:nikhilmahadevan61@gmail.com" className="text-blue-500 underline">nikhilmahadevan61@gmail.com</a> for assistance.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">7. Changes to This Policy</h2>
                    <p className="text-gray-700">
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600">8. Contact Us</h2>
                    <p className="text-gray-700">
                        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:nikhilmahadevan61@gmail.com" className="text-blue-500 underline">nikhilmahadevan61@gmail.com</a>.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}