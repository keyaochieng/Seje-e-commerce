"use client"

import { ProductType } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({product}:{product:ProductType}) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden ">
        {/* IMAGE */}
        <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
            <Image src={product.images[product.sizes[0]]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300"/>
        </div>
        </Link>
        {/* PRODUCT DETAILS */}
        <div className="flex flex-col gap-4 p-4">
            <h1 className="font-medium">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.shortDescription}</p>
            {/* PRODUCT TYPE */}
            <div className="flex items-center text-xs">
                <div className="flex flex-row items-center gap-2">
                    <span className="">Size</span>
                    <select name="size" id="size" className="ring ring-gray-500 rounded-md px-2 py-1 focus:ring-red-500">
                        {product.sizes.map(size=>(
                            <option value={size}>{size}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* PRICE AND ADD TO CART */}
            <div className="flex items-center justify-between">
                <p className="font-medium">Kes {product.price.toFixed(2)}</p>
                <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4"/>
                    Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
