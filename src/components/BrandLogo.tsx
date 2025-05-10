import { CalendarRange } from "lucide-react"; // Correct way to import the icon

export function BrandLogo() {
    return (
        <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
        <CalendarRange className="w-8 h-8" /> {/* Set size using w-8 and h-8 */}
        <span>Calendr</span>
        </span>
    );
}