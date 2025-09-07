// file: cart/page.tsx

"use client"
import { CartItemsType, ShippingFormInputs } from "@/types" // <-- CHANGE: Import ShippingFormInputs
import { ArrowRight, Trash2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import Image from "next/image"


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
        description:"Ignite your taste buds...",
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
        description:"Ignite your taste buds...",
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
        description:"Spice things up...",
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
    const router = useRouter()
    
    // <-- CHANGE 1: Give the state a proper type
    const [shippingData, setShippingData] = useState<ShippingFormInputs | null>(null);

    const activeStep = parseInt(searchParams.get("step") || "1")
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
        {/* MAIN TITLE */}
        <h1 className="text-2xl font-medium ">Your Shopping Cart</h1>
        {/* STEPS */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {steps.map((step)=>(
                <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id <= activeStep ? "border-gray-800" : "border-gray-200"}`} key={step.id}>
                    {/* <-- CHANGE 2: Improved step styling to show completed steps */}
                    <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                        step.id <= activeStep ? "bg-gray-800": "bg-gray-200"
                    }`}
                    >
                        {step.id}
                    </div>
                    <p className={`text-sm font-medium ${
                        step.id <= activeStep ? "text-gray-800": "text-gray-400"
                        }`}
                    >
                        {step.title}
                    </p>
                </div>
            ))}
        </div>
        {/* STEPS AND DETAILS */}
        <div className="w-full flex flex-col lg:flex-row gap-16">
            {/* MAIN CONTENT AREA */}
            <div className="w-full lg:w-7/12 shadow-lg border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                {activeStep === 1 && (
                    cartItems.map(item=>(
                        <div className="flex items-center justify-between" key={item.id}>
                            <div className="flex gap-8">
                                <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                                 <Image 
                                    src={item.images[item.selectedSize]} 
                                    alt={item.name} 
                                    fill 
                                    className="object-contain"
                                 />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                        <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                                    </div>
                                    <p className="font-medium">Ksh {item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer">
                                <Trash2 className="w-3 h-3"/>
                            </button>
                        </div>
                    ))
                )}
                {activeStep === 2 && (
                    <ShippingForm setShippingForm={setShippingData} /> 
                )}
                {/* <-- CHANGE 3: The correct logic for rendering the PaymentForm */}
                {activeStep === 3 && shippingData && (
                    <PaymentForm shippingDetails={shippingData} cartItems={cartItems} />
                )}
                {activeStep === 3 && !shippingData && (
                     <div className='flex flex-col items-center justify-center text-center gap-4'>
                        <p className="text-sm text-gray-500">Please fill in your shipping details to continue.</p>
                        <button onClick={() => router.push('/cart?step=2')} className='text-red-600 underline'>Go back to shipping</button>
                    </div>
                )}
            </div>
            {/* DETAILS SIDEBAR */}
            <div className="w-full lg:w-5/12 shadow-lg border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
            <h2 className="font-semibold">Cart Details</h2>
            <div className="flex flex-col gap-4">
                <div className="text-sm flex justify-between">
                    <p className="text-gray-500">Subtotal</p>
                    <p className="font-medium">
                        Ksh {cartItems.reduce((acc, item)=> acc + item.price * item.quantity, 0).toFixed(2)}
                    </p>
                </div>
                <div className="text-sm flex justify-between">
                    <p className="text-gray-500">Shipping Fee</p>
                    <p className="font-medium"> Depends on Location</p>
                </div>
                <hr className="border-gray-200"/>
                <div className="flex justify-between">
                    <p className="text-gray-800 font-semibold">Total</p>
                    <p className="font-medium">
                        Ksh {cartItems.reduce((acc, item)=> acc + item.price * item.quantity, 0).toFixed(2)}
                    </p>
                </div>
            </div>
            {activeStep === 1 && (
                <button 
                    onClick={()=>router.push("/cart?step=2", { scroll: false })}
                    className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
                >
                    Continue to Shipping
                    <ArrowRight className="w-3 h-3 "/>
                </button>
            )}
            </div>
        </div>
    </div>
  )
}

export default CartPage