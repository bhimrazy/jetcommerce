import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      <div className="bg-yellow-300">
        <div className="max-w-7xl container mx-auto px-10 flex flex-row items-center justify-between py-2">
          <div className="flex flex-row space-x-2 items-center">
            <svg
              className="w-8 h-8 transform rotate-45"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <p className="text-gray-700 text-xl">Sign Up to Newsletter</p>
          </div>
          <p>
            ...and recieve{" "}
            <span className="font-semibold">$20 Coupon for first shopping</span>
          </p>
          <div className="flex flex-row flex-nowrap">
            <div className="w-96 border bg-white px-4 py-2 rounded-l-full items-center">
              <input
                className="w-full focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <button className=" font-semibold focus:outline-none bg-gray-800 rounded-r-full px-4 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-7xl container mx-auto px-10"></div>
      </div>
      <div className="bg-gray-300">
        <div className="max-w-7xl container mx-auto px-10"></div>
      </div>
    </footer>
  );
}
