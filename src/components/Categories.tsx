"use client"

import { PiFireSimpleFill, PiLeafFill} from 'react-icons/pi';
import { GrAppsRounded } from "react-icons/gr";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const categories = [
    {
        name:"All",
        icon:<GrAppsRounded className="w-4 h-4"/>,
        slug:"all",
    },
    {
        name:"Hot",
        icon:<PiFireSimpleFill className='w-4 h-4'/>,
        slug:"hot",
    },
    {
        name:"Mild",
        icon:<PiLeafFill className='w-4 h-4'/>,
        slug:"mild",
    }
]
const Categories = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selectedCategory = searchParams.get("category");

    const handleChange = (value:string | null) =>{
        const params = new URLSearchParams(searchParams);
        params.set("category",value || "all");
        router.push(`${pathname}?${params.toString()}`,{scroll:false})
    }

  return (
    <div className="flex flex-wrap justify-center pb-2 gap-4 md:gap-8">
  {categories.map(category => (
    // We've made the items themselves a bit larger and more interactive.
    <div 
      className={`flex items-center justify-center gap-2 cursor-pointer rounded-full bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-200 ${category.slug === selectedCategory ? "bg-gray-300" : "text-gray-700"}`}
      key={category.name}
      onClick={()=>handleChange(category.slug)}
    >
      {category.icon}
      <span>{category.slug}</span>
    </div>
  ))}
</div>
  )
}

export default Categories
