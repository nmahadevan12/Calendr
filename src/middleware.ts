import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRout = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)", "/book(.*)", "/about(.*)", "/contact(.*)", "/privacy(.*)", "/terms(.*)", "/resources(.*)", "/solutions(.*)", "/guides(.*)", "/tools(.*)", "/faq(.*)", "/team-solutions(.*)", "/business-solutions(.*)", "/individual-solutions(.*)"])

export default clerkMiddleware(async (auth, req) => {
    if (!isPublicRout(req)) {
        await auth.protect(); 
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};

//ngrok config add-authtoken 2x6llecwZScTAwPwr6aYDpD9dCE_4rnBGvmM5kkFEXDDfjcrz
//ngrok config add-authtoken 2wv2XBnZltOSYt4AQRnI8iHv7Ou_6urxZRVNXbrLZvVU85Sw8