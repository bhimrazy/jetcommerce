import { useState } from "react"
import Dropdown from "./components/Dropdown"
import SideMenu from "./components/SideMenu"
import Topbar from "./Topbar"

export default function Header() {
    const [menu, setMenu] = useState(false)
    const [sideMenu, setSideMenu] = useState(false)
    return (
        <header className="w-full flex flex-col items-center border-b border-gray-100 relative">
            <Topbar />
            {/* {menu &&  } */}
            <Dropdown menu={menu} />
            {menu && <div className="absolute w-full min-h-screen z-[5] taensition-opacity bg-gray-500/10"
                onClick={() => (setMenu(!menu))}>

            </div>}
            <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
            {sideMenu && <div className="absolute w-full min-h-screen z-[5] taensition-opacity bg-gray-500/10"
                onClick={() => (setSideMenu(!sideMenu))}>

            </div>}
            <div className={`bg-white py-4 w-full ${menu ? 'shadow-sm' : ''} z-20`}>
                <nav className="container mx-auto px-8 lg:px-12 xl:px-20 flex flex-row text-gray-900 font-normal justify-between items-center">
                    <div className="flex flex-row items-center">
                        <svg onClick={() => (setSideMenu(!sideMenu))} className="w-8 h-8 mr-4 text-gray-400 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        <img className="w-10 h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
                        <ul className="lg:flex lg:flex-row whitespace-nowrap space-x-8 hidden px-8 font-medium text-gray-700">
                            <li className="hover:text-gray-900 hover:cursor-pointer" onClick={() => (setMenu(!menu))}>Unisex</li>
                            <li className="hover:text-gray-900 hover:cursor-pointer">Mens</li>
                            <li className="hover:text-gray-900 hover:cursor-pointer">Women</li>
                            <li className="hover:text-gray-900 hover:cursor-pointer">Best sellers</li>
                            <li className="hover:text-gray-900 hover:cursor-pointer">Sale</li>
                        </ul>
                    </div>
                    <ul className="flex flex-row items-center ">
                        <li className="px-3 xl:px-4"><svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></li>
                        <li className="px-3 xl:px-4 border-r border-gray-400"><svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></li>
                        <li className="pl-3 xl:pl-4 pr-2"><svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></li>
                        <li className="text-gray-700 font-medium">0</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
