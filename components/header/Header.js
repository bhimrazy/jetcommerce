import React from "react";
import Bottombar from "./Bottombar";
import Middlebar from "./Middlebar";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <header className="max-w-7xl bg-gray-100 container mx-auto flex flex-col space-y-2">
      <Topbar />
      <Middlebar />
      <Bottombar />
    </header>
  );
}
