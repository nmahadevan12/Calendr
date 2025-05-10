import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

export function NavBar() {
    return ( 
        <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/80 backdrop-blur-md">
            <nav className="flex items-center gap-10 w-full max-w-screen-xl mx-auto px-10 font-semibold">
                <Link href="/" className="mr-auto">
                    <BrandLogo />
                </Link>
                <Link className="text-lg" href="/resources">
                    Resources
                </Link>
                <Link className="text-lg" href="/solutions">
                    Solutions
                </Link>
            </nav>
        </header>
    )
}