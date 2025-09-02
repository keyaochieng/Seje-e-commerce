import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className='bg-neutral-50'>

      {/* Main Banner come slider */}
      <div className="relative aspect-[3/1] mb-12 ">
        {/* remember when using fill you have to give size of parent */}
        <Image src ="/Extra_hot_sticker.jpg" alt="Featured Product" fill/>
      </div>
      <ProductList />
    </div>
  )
}

export default Homepage