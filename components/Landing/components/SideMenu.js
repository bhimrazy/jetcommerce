import React from 'react'

export default function SideMenu({sideMenu,setSideMenu}) {
    return (
        <div className={`
        ${sideMenu
            // ? `animate-dropdown transition-opacity ease-in-out duration-700`
            ? ` transition-all duration-200 ease-out  transform translate-x-0`
            : `transform -translate-x-full transition-ll ease-in-out duration-500`}
        absolute inset-0 min-h-screen w-2/3 flex flex-col px-6 py-10 space-y-4 bg-white shadow z-30 md:hidden
        `}>
            <div  onClick={() => (setSideMenu(!sideMenu))} className="bg-gray-50 rounded-full text-gray-500 flex justify-center items-center w-10 h-10">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </div>
            <nav>
                <ul className="font-medium text-gray-700 space-y-3">
                    <li className="hover:text-gray-900 hover:cursor-pointer">Unisex</li>
                    <li className="hover:text-gray-900 hover:cursor-pointer">Mens</li>
                    <li className="hover:text-gray-900 hover:cursor-pointer">Women</li>
                    <li className="hover:text-gray-900 hover:cursor-pointer">Best sellers</li>
                    <li className="hover:text-gray-900 hover:cursor-pointer">Sale</li>
                </ul>
            </nav>
        </div>
    )
}
