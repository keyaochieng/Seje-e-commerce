import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Bell, Home, ShoppingBasket } from "lucide-react"
import ShoppingCartIcon from "./ShoppingCartIcon"


const Navbar = () => {
    return(
        // flexbox for nav tag to make left and right sections of navbar horizontal
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">

            {/* LEFT */}
            {/* flexbox for the link tag to make them horizontal(logo and seje name) */}
            <Link href="/" className="flex items-center">
            <Image 
            src="/logo-ai.jpeg" 
            alt="Seje Chilli" 
            width={36} 
            height={36} 
            className="w-6 h-6 md:w-9 md:h-9"
            />
            {/* tracking-wider for letter spacing in seje name */}
            <p className="hidden md:block text-md font-medium tracking-wider">SEJE</p>
            </Link>

            {/* RIGHT */}
            <div className="flex items-center gap-6">
                <SearchBar />
                <Link href="/">
                <Home className="w-4 h-4 text-gray-600"/>
                </Link>
                <Bell className="w-4 h-4 text-gray-600"/>
                <ShoppingCartIcon/>
                <Link href="/login">Sign In</Link>
            </div>
        </nav>
    )
}
export default Navbar