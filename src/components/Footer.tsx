// this is going to be 4 Sections, each section is a link
import Link from "next/link"
import Image from "next/image"
const Footer = () => {
    return(
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-[#2a1a1a] p-8 rounded-lg">
            {/* section 1 */}
            <div className="flex flex-col gap-4 items-center md:items-start">
            <Link href="/" className="flex items-center">
            <Image 
            src="/logo2.jpg" 
            alt="Seje Chilli" 
            width={36} 
            height={36} 
            />
            {/* tracking-wider for letter spacing in seje name */}
            <p className="hidden md:block text-md font-medium tracking-wider text-white">SEJE</p>
            </Link>
            <p className="text-sm text-gray-400">© 2025 SEJE CHILLI</p>
            <p className="text-sm text-gray-400">All rights reserved</p>
            </div>

            {/* section 2 */}
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm  text-amber-50">Links</p>
                <Link href="/">Homepage</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
            </div>

            {/* section 3 */}
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm  text-amber-50">Products</p>
                <Link href="/">All Products</Link>
                <Link href="/">New Arrivals</Link>
                <Link href="/">Best Sellers</Link>
                <Link href="/">Reviews</Link>
            </div>

            {/* section 4 */}
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm  text-amber-50">Company</p>
                <Link href="/">About</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/">Instagram</Link>
                <Link href="/">Privacy Policy</Link>
            </div>
        </div>
    )
}
export default Footer