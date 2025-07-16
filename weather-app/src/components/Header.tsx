// import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
import { Link } from "react-router-dom"
import { ModeToggle } from "./ModeToggle";


const Header = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background">
            <div className="container mx-auto flex  h-16  items-center justify-between px-4">
                <Link to={"/"}>
                    <img src={isDark ? "/cloudy-day.png" : "/cloudy.png"} alt="Weather" className="h-14" />
                </Link>
                <div className="flex gap-4">
                    {/* search */}
                    {/* theme toggle */}
                    {/* <div onClick={() => setTheme(isDark ? "light" : "dark")}
                        className={`flex items-center cursor-pointer transition-all duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
                    >
                        {isDark ? (<Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />) :
                            (<Moon className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />)}
                    </div> */}
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header