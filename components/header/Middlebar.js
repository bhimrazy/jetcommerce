import React from "react";

export default function Middlebar() {
  return (
    <div className="pb-6 pt-3 px-10 flex  flex-wrap space-y-2 flex-row items-center justify-between">
      <a className="order-1 md:order-none text-3xl font-bold font-poppins flex flex-col items-end">
        <span> jetcommerce </span>
        <span className="bg-yellow-400 rounded-full w-2 h-2 -mt-3 -mr-2"></span>
      </a>
      <div className="order-2 w-full lg:order-none border border-yellow-300  lg:w-96 justify-between py-1 rounded-full flex flex-row items-center">
        <p className="sr-only">search bar</p>
        <input
          className="focus:outline-none text-sm items-center mx-4 w-full text-gray-700"
          type="text"
          placeholder="Search for products"
          name="search"
        />
        <button className=" bg-gray-100 hover:bg-gray-200 rounded-full p-2 mr-1 focus:outline-none">
          <p className="sr-only">Search Button</p>
          <svg
            className="w-3 h-3 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="order-1 md:order-none flex flex-row space-x-3">
        <button className="text-gray-600 hover:text-gray-800  transition-opacity duration-100 ease-in-out p-1 rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-yellow-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-800  transition-opacity duration-100 ease-in-out p-1 rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-yellow-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-800  transition-opacity duration-100 ease-in-out p-1 rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-yellow-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
