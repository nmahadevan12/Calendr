import { NavLink } from "@/components/NavLink"
import { UserButton } from "@clerk/nextjs"
import { CalendarRange } from "lucide-react"
import { ReactNode } from "react"

export default function PrivateLayout({ children }: { children: ReactNode }) {
    return (
        <>
        <header className="flex py-2 border-b bg-card">
            <nav className="font-medium flex items-center text-sm gap-6 container">
                <div className="flex items-center gap-2 font-semibold p-8">
                    <CalendarRange className="size-8" />  {/* Increased logo size */}
                    <span className="sr-only md:not-sr-only text-xl">Calendr</span>  {/* Made logo text bigger */}
                </div>
                <NavLink href="/events" className="text-xl lg:text-2xl">Events</NavLink>  {/* Bigger text for Events */}
                <NavLink href="/schedule" className="text-xl lg:text-2xl">Schedule</NavLink>  {/* Bigger text for Schedule */}
                <div className="ml-auto">
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonAvatarBox: "w-16 h-16",  // Increased avatar size
                            }
                        }}
                    />
                </div>
            </nav>
        </header>
        <main className="container my-6 items-center 2xl:max-w-[1400px] p-8">{children}</main>
        </>
    )
}


