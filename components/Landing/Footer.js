import React from "react";

export default function Footer() {
    return (
        <footer className=" w-full bg-white shadow-sm py-10 ">
            <div className="container mx-auto px-8 lg:px-12 xl:px-20 flex flex-col w-full items-center divide-y pt-4 divide-gray-100 space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 justify-between w-full py-4">
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-medium text-lg text-gray-800">Service</h3>
                        <ul className="flex flex-col text-gray-600 whitespace-nowrap space-y-2">
                            <li>Shipping & Returns</li>
                            <li>Warranty</li>
                            <li>FAQ</li>
                            <li>Find a store</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-medium text-lg text-gray-800">Company</h3>
                        <ul className="flex flex-col text-gray-600 whitespace-nowrap space-y-2">
                            <li>Who are we</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-medium text-lg text-gray-800">Account</h3>
                        <ul className="flex flex-col text-gray-600 whitespace-nowrap space-y-2">
                            <li>Manage Account</li>
                            <li>Saved Items</li>
                            <li>Orders</li>
                            <li>Redeem Gift card</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-medium text-lg text-gray-800">Connect</h3>
                        <ul className="flex flex-col text-gray-600 whitespace-nowrap space-y-2">
                            <li>Instagram</li>
                            <li>Pinterest</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className="flex flex-col col-span-2 space-y-3 md:space-y-4 max-w-lg">
                        <h3 className="font-medium text-lg text-gray-800">Sign up for our newsletter</h3>
                        <p className=" text-normal text-gray-600">Be the first to know when we release new products</p>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                            <input type="text" className="focus:outline-none focus:ring-1 focus:ring-indigo-600 border border-gray-300 shadow-sm px-6 py-2 w-full rounded-lg" name="email" />
                            <button className="focus:outline-none px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 whitespace-nowrap text-white text-lg">Sign up</button>
                        </div>                        
                    </div>
                </div>
                <div className="flex flex-row w-full text-gray-500 items-center pt-6">
                    <p>Copyright © 2021 Clothing Company Inc.</p>
                </div>
            </div>
        </footer>
    );
}
