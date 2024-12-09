import Image from "next/image"
import Rectangle from "../../../public/images/Rectangle.png"
import Rectangle3 from "../../../public/images/Rectangle3.png"
import Vector2 from "../../../public/images/Vector2.png"
import zara from "../../../public/images/zara.png"
import Vector3 from "../../../public/images/Vector3.png"
import Group from "../../../public/images/Group.png"
import Vector4 from "../../../public/images/Vector4.png"
import Frame32 from "../../../public/images/Frame32.png"
import Frame33 from "../../../public/images/Frame33.png"
import Frame34 from "../../../public/images/Frame34.png"
import Frame38 from "../../../public/images/Frame38.png"

export default function Shop() {
  return (
    <div className="flex bg-white min-h-screen flex-col">

      {/* Top Section: First Image and Text */}
      <div className="relative w-full">
        {/* Right Side (Image) */}
        <div className="flex-1">
          <Image 
            src={Rectangle}  
            alt="Fashion"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left Side (Text over Image) */}
        <div className="absolute top-0 left-0 w-full h-full p-8 text-left mx-auto max-w-4xl flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-black font-extrabold">
            Find Clothes That Matches Your Style
          </h1>
          <p className="text-black mt-4 text-sm sm:text-base md:text-lg">
            Browse through our diverse ranges of meticulously crafted garments, designed 
            to bring out your individuality and cater to your sense of style.
          </p>
          {/* Shop Now button */}
          <button className="mt-4 bg-black text-white font-bold py-2 px-6 rounded-full max-w-[200px]">
            Shop Now
          </button>
        </div>
      </div>

      {/* Bottom Section: Second Image with Logos */}
      <div className="relative flex-1">
        <Image 
          src={Rectangle3}  
          alt="Fashion"
          className="w-full h-full object-cover"
        />

        {/* Logos over the second image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full px-10">
          <div className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-32">
            <Image src={Vector2} alt="Logo 1" className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain" />
            <Image src={zara} alt="Logo 2" className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain" />
            <Image src={Vector3} alt="Logo 3" className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain" />
            <Image src={Group} alt="Logo 4" className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain" />
            <Image src={Vector4} alt="Logo 5" className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[130px] object-contain" />
          </div>
        </div>
      </div>

      {/* New Arrivals Heading Below Logos */}
      <div className="text-center mt-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">NEW ARRIVALS</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 p-6">
        {/* Product 1 */}
        <div className="bg-white p-5 cursor-pointer rounded-2xl">
          <div className="w-full h-[295px] sm:h-[320px] md:h-[350px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 mb-4">
            <Image src={Frame32} alt="Product 1" className="h-full w-full object-contain" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800">T-SHIRT WITH TAPE DETAILS</h3>
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

        {/* Product 2 */}
        <div className="bg-white p-5 cursor-pointer rounded-2xl">
          <div className="w-full h-[295px] sm:h-[320px] md:h-[350px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 mb-4">
            <Image src={Frame33} alt="Product 2" className="h-full w-full object-contain" />
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
                  fill={i < 3 ? "currentColor" : "none"}
                  className={i < 3 ? "text-yellow-400" : "text-gray-300"}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 .25a.75.75 0 0 1 .66.428l1.5 3.027 3.347.488a.75.75 0 0 1 .416 1.282l-2.42 2.36.572 3.34a.75.75 0 0 1-1.088.79l-2.992-1.574-2.993 1.574a.75.75 0 0 1-1.088-.79l.573-3.34-2.42-2.36a.75.75 0 0 1 .416-1.282l3.348-.488L7.34.678a.75.75 0 0 1 .66-.428z" />
                </svg>
              ))}
              <p className="text-sm text-gray-600 mt-1">3.5/5</p>
            </div>
            <h4 className="text-lg text-gray-800 font-bold mt-4">$240</h4>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white p-5 cursor-pointer rounded-2xl">
          <div className="w-full h-[295px] sm:h-[320px] md:h-[350px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 mb-4">
            <Image src={Frame34} alt="Product 3" className="h-full w-full object-contain" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800">CHECKERED SHIRT</h3>
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
            <h4 className="text-lg text-gray-800 font-bold mt-4">$180</h4>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white p-5 cursor-pointer rounded-2xl">
          <div className="w-full h-[295px] sm:h-[320px] md:h-[350px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 mb-4">
            <Image src={Frame38} alt="Product 4" className="h-full w-full object-contain" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800">SLEEVE STRIPED T-SHIRT</h3>
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
            <h4 className="text-lg text-gray-800 font-bold mt-4">$99</h4>
          </div>
        </div>

      </div>

    </div>
  );
}
