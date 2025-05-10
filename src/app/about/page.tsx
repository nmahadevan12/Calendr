import { Footer } from "@/components/footer";

export default function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center px-4 pt-32">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight m-4 text-blue-800">About Us</h1>

                <div className="text-left max-w-4xl text-lg space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <p className="text-gray-700">
                        Welcome to the About page! Thank you for using our services.
                    </p>
                    <p className="text-gray-700">
                        I am a freshman college student studying Electrical Engineering with a Computer Science minor at the University of Georgia.
                    </p>
                    <p className="text-gray-700">
                        I created Calendr to help people schedule meetings more efficiently. My goal is to make scheduling as simple and seamless as possible.
                    </p>
                    <p className="text-gray-700">
                        If you have any questions, please contact us at <a href="mailto:nikhilmahadevan61@gmail.com" className="text-blue-500 underline">nikhilmahadevan61@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}