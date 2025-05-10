import { Footer } from "@/components/footer";

export default function contactUs() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center px-4 pt-32">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight m-4 text-blue-800">Contact Us</h1>

                <div className="text-left max-w-4xl text-lg space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <p className="text-gray-700">
                        Welcome to the Contact Us page! If you have any questions or concerns, please feel free to reach out to us. We are here to help you with any inquiries you may have regarding our services.
                    </p>
                    <p className="text-gray-700">
                        Your feedback is important to us, and we strive to provide the best experience possible. Whether you have questions about our features, need assistance with your account, or want to share your thoughts, we are just an email away.
                    </p>
                    <p className="text-gray-700">
                        If you have any questions, please contact us at <a href="mailto:nikhilmahadevan61@gmail.com" className="text-blue-500 underline">nikhilmahadevan61@gmail.com</a>.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}