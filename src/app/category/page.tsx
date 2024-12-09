
import Image from 'next/image';
import Frame56 from "../../../public/images/Frame56.png"
import Frame57 from "../../../public/images/Frame57.png"
import Frame58 from "../../../public/images/Frame58.png"
import Frame33 from "../../../public/images/Frame33.png"
import Frame34 from "../../../public/images/Frame34.png"
import Frame38 from "../../../public/images/Frame38.png"
import Frame45 from "../../../public/images/Frame45.png"
import React from 'react';


export default function Home() {
    return (
<div className="flex bg-white min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-5 space-y-8">
        <div>
          <h3 className="font-bold text-lg text-gray-800">Filters</h3>
        </div>

        {/* T-shirt Names */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">T-Shirt Names</h4>
          <ul className="space-y-2 mt-2">
            <li><button className="text-gray-600">Gradient Graphic T-shirt</button></li>
            <li><button className="text-gray-600">Polo with Tipping Details</button></li>
            <li><button className="text-gray-600">Black Striped T-shirt</button></li>
            <li><button className="text-gray-600">COURAGE GRAPHIC T-SHIRT</button></li>
            <li><button className="text-gray-600">Skinny Fit Jeans</button></li>
          </ul>
        </div>

        {/* Price Range Slider */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">Price Range</h4>
          <input
            type="range"
            min="0"
            max="500"
            className="w-full mt-2"
          />
          <div className="flex justify-between text-sm mt-1 text-gray-600">
            <span>$0</span>
            <span>$500</span>
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">Color</h4>
          <div className="flex space-x-2 mt-2">
            {/* Add up to 10 color options */}
            {['red', 'blue', 'green', 'yellow', 'purple', 'black', 'gray', 'orange', 'white', 'pink'].map(color => (
              <div key={color} className={`w-6 h-6 rounded-full bg-${color}-500`}></div>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">Size</h4>
          <div className="mt-2">
            <select className="w-full p-2 text-black border border-gray-300 rounded-md">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
          </div>
        </div>

        {/* Dress Style Selection */}
        <div>
          <h4 className="font-semibold text-sm text-gray-700">Dress Style</h4>
          <div className="mt-2">
            <select className="w-full p-2 text-black border-border-gray-300 rounded-md">
              <option>Casual</option>
              <option>Formal</option>
              <option>Sporty</option>
              <option>Party</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Products Grid */}
      <div className="w-3/4 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Product 1 */}
          <div className="bg-white p-5 cursor-pointer">
            <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <Image src={Frame56} alt="Product 1" className="h-full w-full object-contain" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Gradient Graphic T-shirt</h3>
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
                <p className="text-sm text-gray-600 mt-1">4.5/5</p>
              </div>
              <h4 className="text-lg text-gray-800 font-bold mt-4">$145</h4>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl p-5 cursor-pointer ">
            <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <Image src={Frame57} alt="Product 2" className="h-full w-full object-contain" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Polo with Tipping Details</h3>
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
                <p className="text-sm text-gray-600 mt-1">3.5/5</p>
              </div>
              <h4 className="text-lg text-gray-800 font-bold mt-4">$180</h4>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl p-5 cursor-pointer">
            <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <Image src={Frame58} alt="Product 3" className="h-full w-full object-contain" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Black Striped T-shirt</h3>
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
                <p className="text-sm text-gray-600 mt-1">4.5/5</p>
              </div>
              <h4 className="text-lg text-gray-800 font-bold mt-4">$120</h4>
            </div>
          </div>

           {/* Product 4 */}
  
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-8xl:gap-5 gap-4">
  {/* Product 1 */}
  <div className="bg-white p-5 cursor-pointer">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame33} alt="Product 1" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">SKINNY FIT JEANS</h3>
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
        <p className="text-sm text-gray-600 mt-1">4.5/5</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$240</h4>
    </div>
  </div>

  {/* Product 2 */}
  <div className="bg-white rounded-2xl p-5 cursor-pointer ">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame34} alt="Product 2" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">CHECKERED SHIR</h3>
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
        <p className="text-sm text-gray-600 mt-1">3.5/5</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$180</h4>
    </div>
  </div>

  {/* Product 3 */}
  <div className="bg-white rounded-2xl p-5 cursor-pointer">
    <div className="w-[295px] h-[298px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
      <Image src={Frame38} alt="Product 3" className="h-full w-full object-contain" />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-800">SLEEVE STRIPED T-SHIR</h3>
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
        <p className="text-sm text-gray-600 mt-1">4.5/5</p>
      </div>
      <h4 className="text-lg text-gray-800 font-bold mt-4">$130</h4>
    </div>
  </div>


         
          
        </div>
      </div>

      <div className="relative flex items-center justify-center flex-1">
  <Image 
    src={Frame45}  
    alt="Fashion"
    className="w-[1,240px] h-[180px] object-cover "
    />
    </div>

      </div>
   
  );
}

  

  