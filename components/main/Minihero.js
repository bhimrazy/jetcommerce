import React from "react";

export default function Minihero() {
  return (
    <section className="relative max-w-7xl py-8 container mx-auto px-10 justify-center items-center grid grid-cols-3 gap-4 md:gap-10">
      <div className="bg-gray-200 rounded-sm animate-pulse h-16 md:h-28 lg:h-36"></div>
      <div className="bg-gray-200 rounded-sm animate-pulse h-16 md:h-28 lg:h-36"></div>
      <div className="bg-gray-200 rounded-sm animate-pulse h-16 md:h-28 lg:h-36"></div>
    </section>
  );
}
