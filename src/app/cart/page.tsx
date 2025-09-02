//since its an interactive page
"use client"
import { CartItemsType } from "@/types"
import { ArrowRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"


const steps = [
    {
        id:1,
        title:"Shopping Cart"
    },
    {
        id:2,
        title:"Shipping Address"
    },
    {
        id:3,
        title:"Payment Method"
    },
]


//TEMPORARY DATA
const cartItems:CartItemsType = [
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
        quantity:1,
        selectedSize:"380g"

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
        quantity:2,
        selectedSize:"380g"
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
        quantity:3,
        selectedSize:"380g"
    }
]

const CartPage = () => {
    const searchParams = useSearchParams()
    const route = useRouter()

    const activeStep = parseInt(searchParams.get("step") || "1")
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
        {/* MAIN TITLE */}
        <h1 className="text-2xl font-medium ">Your Shopping Cart</h1>
        {/* STEPS */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {steps.map(step=>(
                <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id===activeStep ? "border-gray-800" : "border-gray-200"}`} key={step.id}>
                    <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id===activeStep ? "bg-gray-800": "bg-gray-200"}`}>{step.id}</div>
                    <p className={`text-sm font-medium ${step.id===activeStep ? "text-gray-800": "text-gray-400"}`}>{step.title}</p>
                </div>
            ))}
        </div>
        {/* STEPS AND DETAILS */}
        <div className="w-full flex flex-col lg:flex-row gap-16">
            {/* STEPS */}
            <div className="w-full lg:w-7/12 shadow-lg border-gray-100 p-8 rounded-lg flex flex-col gap-8">1</div>
            {/* DETAILS */}
            <div className="w-full lg:w-5/12 shadow-lg border-gray-100 p-8 rounded-lg flex flex-col gap-8">
            <h2 className="font-semibold">Cart Details</h2>
            <div className="flex flex-col gap-4"></div>
            <button className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                Continue
                <ArrowRight className="w-3 h-3 "/>
            </button>
            </div>
        </div>
    </div>
  )
}

export default CartPage
