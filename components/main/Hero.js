import React from "react";

export default function Hero() {
  return (
    <section className="relative max-w-7xl container mx-auto px-10 pb-20 flex justify-center items-center bg-gray-100">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/mi11xpro.jpg"
        alt="Mi 11X Pro"
        height="100%"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-teal-600 to-transparent opacity-60"></div>
      <div className="absolute left-10 -mt-8 z-20 shadow-lg md:mt-2 hidden lg:flex text-sm">
        <ul className="flex flex-col px-[0.8rem] bg-white rounded-b-xl">
          <li className="border-b hover:bg-gray-50 font-bold px-2 pb-2 pt-2">
            Value of the Day
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 font-bold px-2 pb-2 ">
            Top 100 Offers
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 font-bold px-2 pb-2 ">
            New Arrivals
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 flex flex-row justify-between pl-2 space-x-2 pb-2 ">
            <p> Laptops & Computers</p>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 flex flex-row justify-between pl-2 space-x-2 pb-2 ">
            <p>Cameras and Photography</p>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 flex flex-row justify-between pl-2 space-x-2 pb-2 ">
            <p>Smart Phones & Tablets</p>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 flex flex-row justify-between pl-2 space-x-2 pb-2 ">
            <p>Video Games & Consoles</p>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 flex flex-row justify-between pl-2 space-x-2 pb-2 ">
            <p>TV & Audio</p>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 flex flex-row justify-between pl-2 space-x-2 pb-2 ">
            <p> Gadgets</p>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="border-b hover:bg-gray-50 pt-2 flex flex-row justify-between pl-2 space-x-2 pb-2 ">
            <p>Car Electric & GPS</p>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="flex flex-row justify-between hover:bg-gray-50 pt-2 pl-2 space-x-2 pb-2">
            <p>Accesories</p>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
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
        <button className="px-8 py-2 mt-4 text-gray-700 font-bold bg-yellow-300 transition-all ease-in-out duration-500 hover:text-gray-600 hover:bg-yellow-400 rounded-lg text-center focus:outline-none">
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
