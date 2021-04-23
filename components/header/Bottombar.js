import React from "react";

export default function Bottombar() {
  return (
    <div className="px-10 flex flex-row justify-between items-center font-semibold">
      <div className="flex flex-row space-x-2 items-center bg-yellow-300 pl-4 pr-16 py-2 rounded-t-xl">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <p className="">All Departments</p>
      </div>
      <div className="hidden sm:flex flex-row space-x-4">
        <p className="text-red-600">Super Deals</p>
        <p>Top 10 Printers</p>
        <p>Featured Brands</p>
      </div>
      <div className="hidden lg:flex flex-row space-x-4">
        <p>Gift Cards</p>
        <p>Blog</p>
      </div>
      <p className="hidden lg:block font-normal text-gray-600 text-sm">
        Free Shipping on Order $50
      </p>
    </div>
  );
}
