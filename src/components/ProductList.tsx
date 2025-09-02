import { ProductsType } from "@/types"
import Categories from "./Categories"
import ProductCard from "./ProductCard"

const products:ProductsType = [
    {
        id:1,
        name:"Classic Red Chili",
        shortDescription:"Seje Extra Hot Chili Sauce – With Ginger & Garlic",
        description:"Ignite your taste buds with the fiery kick of our Extra Hot African Chili Sauce — a bold fusion of sun-ripened African chilies, zesty ginger, and fresh savory garlic. Crafted for true heat seekers, this sauce delivers an intense heat balanced by rich, earthy undertones and a burst of fresh flavor. Whether you’re spicing up grilled meats, drizzling over rice, or adding heat to your favorite stews, every drop packs a punch. No shortcuts, no fillers — just raw, authentic fire.",
        price:500,
        sizes:["380g",""],
        images: {
            "380g": "/classic_bottle_no_bg.png",
            "": "",
        },

    },
    {
        id:2,
        name:"Green Chili",
        shortDescription:"Seje Extra Hot Chili Sauce – With Ginger & Garlic",
        description:"Ignite your taste buds with the fiery kick of our Extra Hot African Chili Sauce — a bold fusion of sun-ripened African chilies, zesty ginger, and fresh savory garlic. Crafted for true heat seekers, this sauce delivers an intense heat balanced by rich, earthy undertones and a burst of fresh flavor. Whether you’re spicing up grilled meats, drizzling over rice, or adding heat to your favorite stews, every drop packs a punch. No shortcuts, no fillers — just raw, authentic fire.",
        price:500,
        sizes:["380g",""],
        images: {
            "380g": "/classicbottle2.JPG",
            "": "",
        },

    },
    {
        id:3,
        name:"Lemon and Herb Chili",
        shortDescription:"Seje Lemon and Herb Chili Sauce – Bold Heat with Ginger & Garlic",
        description:"Spice things up with a bold yet balanced chili sauce made from authentic African chilies, aromatic ginger, and savory garlic. This flavorful blend brings just the right amount of heat to elevate your meals without overwhelming your palate. Perfect for marinades, dipping, or giving your everyday dishes a flavorful kick.",
        price:500,
        sizes:["380g",""],
        images: {
            "380g": "/classicbottle3.JPG",
            "": "",
        },

    }
]
const ProductList = () => {
  return (
    <div className="w-full">
        <Categories />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grip-cols-4 gap-12">
            {products.map(product=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default ProductList
