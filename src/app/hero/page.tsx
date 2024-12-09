import Image from "next/image"
import Frame321 from "../../../public/images/Frame321.png"
import Frame322 from "../../../public/images/Frame322.png"
import Frame341 from "../../../public/images/Frame341.png"
import Frame381 from "../../../public/images/Frame381.png"
import Frame61 from "../../../public/images/Frame61.png"
import Frame62 from "../../../public/images/Frame62.png"
import Frame63 from "../../../public/images/Frame63.png"
import Frame64 from "../../../public/images/Frame64.png"
import Frame22 from "../../../public/images/Frame22.png"
import Frame622 from "../../../public/images/Frame622.png"
import Frame644 from "../../../public/images/Frame644.png"
import Frame45 from "../../../public/images/Frame45.png"
export default function Hero(){
    return(
<div className="flex bg-white min-h-screen flex-col">
          {/* New Arrivals Heading Below Logos */}
 <div className="text-center mt-8">
    <h2 className="text-5xl font-extrabold text-black">NEW ARRIVALS</h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-8xl:gap-5 gap-4">
  {/* Product 1 */}
  <div className="bg-white p-5 cursor-pointer">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame321} alt="Product 1" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">VERTICAL STRIPED SHIRT</h3>
      <div className="flex items-center mt-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 4 ? "currentColor" : "none"}
            className={i < 4 ? "text-yellow-400" : "text-gray-300"}
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
          </svg>
        ))}
        <p className="text-sm text-gray-600 mt-1">5.5/0</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$212</h4>
    </div>
  </div>

  {/* Product 2 */}
  <div className="bg-white rounded-2xl p-5 cursor-pointer ">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame322} alt="Product 2" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">COURAGE GRAPHIC T-SHIRT</h3>
      <div className="flex items-center mt-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 3 ? "currentColor" : "none"}
            className={i < 3 ? "text-yellow-400" : "text-gray-300"}
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
          </svg>
        ))}
        <p className="text-sm text-gray-600 mt-1">4.0/5</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$145</h4>
    </div>
  </div>

  {/* Product 3 */}
  <div className="bg-white rounded-2xl p-5 cursor-pointer">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame341} alt="Product 3" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">LOOSE FIT BERMUDA SHORTS</h3>
      <div className="flex items-center mt-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 4 ? "currentColor" : "none"}
            className={i < 4 ? "text-yellow-400" : "text-gray-300"}
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
          </svg>
        ))}
        <p className="text-sm text-gray-600 mt-1">3.0</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$80</h4>
    </div>
  </div>

  {/* Product 4 */}
  <div className="bg-white rounded-2xl p-5 cursor-pointer">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame381} alt="Product 4" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">FADED SKINNY JEANS</h3>
      <div className="flex items-center mt-2">
        {/* Star Rating */}
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 5 ? "currentColor" : "none"}
            className={i < 5 ? "text-yellow-400" : "text-gray-300"}
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
          </svg>
        ))}
        <p className="text-sm text-gray-600 mt-1">4.5/5</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$210</h4>
    </div>
  </div>


  
</div>
<div className="max-w-screen-xl mx-auto py-12 px-4">
  <div className="bg-gray-100 p-8 rounded-lg">
    {/* Heading */}
    <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">BROWSE BY DRESS STYLE</h2>

    {/* Grid for images */}
<div className="grid grid-cols-2 gap-5">
  {/* Top row with reduced gap */}
  <div className="flex justify-center pr-2"> {/* Add right padding to reduce gap */}
    <Image src={Frame61} alt="Image 1" className="w-[407px] h-[289px] object-cover rounded-lg" />
  </div>
  <div className="flex justify-center pl-0"> {/* Add left padding to reduce gap */}
    <Image src={Frame62} alt="Image 2" className="w-[1306px] h-[289px] object-cover rounded-lg -ml-36" />
  </div>

  {/* Bottom row */}
  <div className="flex justify-center">
    <Image src={Frame64} alt="Image 3" className="w-[900px] h-[289px] object-cover rounded-lg ml-36" />
  </div>
  <div className="flex justify-center">
    <Image src={Frame63} alt="Image 4" className="w-[407px] h-[289px] object-cover rounded-lg" />
  </div>
</div>


  </div>
</div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">OUR HAPPY CUSTOMERS</h2>
    
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" src={Frame22}/>
        </div>
       
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" src={Frame622}/>
        </div>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" src={Frame644}/>
        </div>
        
      </div>
    </div>
  </div>
</section>

<div className="relative flex items-center justify-center flex-1">
  <Image 
    src={Frame45}  
    alt="Fashion"
    className="w-[1,240px] h-[180px] object-cover "
    />
    </div>

</div>

 
)}