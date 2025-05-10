import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
    const { userId } = await auth();
    if (userId != null) redirect("/events");

    return (
        <>
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 text-blue-600 bg-cover bg-center">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4 text-blue-800">
                    Calendr
                </h1>
                <p className="text-lg xl:text-4xl max-w-screen-xl font-bold m-4">
                    Join to easily book meetings with the #1 scheduling tool.
                </p>
                <div className="mt-8">
                    <div className="flex gap-2 justify-center">
                        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all" asChild>
                            <SignInButton />
                        </Button>
                        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all" asChild>
                            <SignUpButton />
                        </Button>
                        <UserButton />
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-800 text-white py-4">
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
        </>
    );
}