import React from "react";

export default function Hero() {
  return (
    <section className="relative max-w-7xl container mx-auto px-10 pb-20 grid grid-cols-3  bg-gray-100">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/mi11xpro.jpg"
        alt="Mi 11X Pro"
        height="100%"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-teal-600 to-transparent opacity-60"></div>
      <div className="z-10 flex text-sm">
        <ul className="flex flex-col pl-4 pr-[2.85rem] space-y-4 bg-white rounded-b-xl">
          <li>Value of the Day</li>
          <li className="">Top 100 Offers</li>
          <li className="">New Arrivals</li>
          <li className="">Laptopsd & Computers</li>
          <li className="">Cameras and Photography</li>
          <li className="">Samrt Phones & Tablets</li>
          <li className="">Video Games & Consoles</li>
          <li className="">TV & Audio</li>
          <li className="">Gadgets</li>
          <li className="">Car Electric & GPS</li>
          <li className="">Accesories</li>
        </ul>
      </div>
      <div className=" z-10 pt-20">
        <h1 className="text-4xl font-bold text-gray-900">
          <span> Mi 11X Pro</span>
          <br /> CUT ABOVE THE BEST
        </h1>
        <p className="text-sm py-2 font-light">
          120Hz E4 AMOLED Display <br />
          Qualcomm® Snapdragon™ 888 <br />
          108MP HM2 Primary Camera
        </p>
        <small className="text-sm text-gray-300">FROM</small>
        <p className="font-bold text-5xl -mt-2">$399</p>
        <button className="px-8 py-2 mt-4 text-gray-700 font-bold bg-yellow-300 rounded-lg text-center focus:outline-none">
          Start Buying
        </button>
        <div className="flex flex-row pt-8 space-x-3  transition-opacity ease-in-out duration-500">
          <span className="bg-yellow-300 w-2 h-2 px-4 rounded-full"></span>
          <span className="bg-gray-300 w-2 h-2 hover:bg-yellow-300 rounded-full"></span>
          <span className="bg-gray-300 w-2 h-2 hover:bg-yellow-300 rounded-full"></span>
          <span className="bg-gray-300 w-2 h-2 hover:bg-yellow-300 rounded-full"></span>
          <span className="bg-gray-300 w-2 h-2 hover:bg-yellow-300 rounded-full"></span>
          <span className="bg-gray-300 w-2 h-2 hover:bg-yellow-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
