import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Top Footer Bar */}
      <div className="bg-yellow-300">
        <div className="max-w-7xl container mx-auto px-10 flex flex-col md:flex-row items-center justify-between py-2 space-y-4 md:space-y-0">
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
          <p className="hidden lg:block">
            ...and recieve
            <span className="font-semibold">$20 Coupon for first shopping</span>
          </p>
          <div className="flex flex-row flex-nowrap">
            <div className=" w-72 lg:w-96 border bg-white px-4 py-2 rounded-l-full items-center">
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
      {/* Middle Footer Bar */}
      <div className="max-w-7xl w-full conatiner mx-auto px-10 py-6 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-start space-y-1">
          <a className=" text-4xl font-bold font-poppins flex flex-col items-end">
            <span> jetelectro </span>
            <span className="bg-yellow-400 rounded-full w-2 h-2 -mt-3 -mr-2"></span>
          </a>
          <div className="flex flex-row items-center -ml-3">
            <svg
              className="w-12 h-12 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex flex-col py-4 font-normal tracking-wider">
              {" "}
              <p>Got questions ? Call Us 24x7</p>
              <p>(800)8001-8588,(0600)874586</p>
            </div>
          </div>
          <p className="font-semibold">Contact info</p>
          <small>17 Princess Road London NW 18K</small>
          <div className="flex flex-row py-6 space-x-3">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-8 h-8 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-8 h-8 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-8 h-8 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-8 h-8 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:space-x-16">
          <div className="flex flex-col space-y-1 text-sm text-gray-600">
            <p className="font-bold text-gray-800 pb-4 text-base">
              Find it Fast
            </p>
            <p>Laptops and computers</p>
            <p>Cameras & Photo</p>
            <p>Smartphones & Tablets</p>
            <p>Video games</p>
            <p>TV Audio</p>
            <p>Gadgets</p>
            <p>Car Electronic & GPS</p>
          </div>
          <div className="flex flex-col space-y-1 text-sm text-gray-600">
            <p className="font-bold text-gray-800 pb-4 text-base">
              Accessories
            </p>
            <p>Printers & Link</p>
            <p>Software</p>
            <p>Offices Supplies</p>
            <p>Computer Components</p>
          </div>
          <div className="flex flex-col space-y-1 text-sm text-gray-600">
            <p className="font-bold text-gray-800 pb-4 text-base">
              Customer Care
            </p>
            <p>My Account</p>
            <p>Order Tracking</p>
            <p>Wish List</p>
            <p>Customer Care</p>
            <p>Returns/Exchange</p>
            <p>FAQs</p>
            <p>Product Support</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar  */}
      <div className="bg-gray-100 py-4 items-center justify-center">
        <div className="max-w-7xl mx-auto px-10">
          <p>
            © <span className="font-bold">JetElectro</span> . All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
