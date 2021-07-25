import React from "react";

export default function Footer() {
    return (
        <footer className=" w-full bg-white shadow-sm py-10 ">
            <div className="container mx-auto px-8 lg:px-12 xl:px-20 flex flex-col w-full items-center divide-y pt-4 divide-gray-100 space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between w-full">
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
                        <h3 className="font-medium text-lg text-gray-800">Connect</h3>
                        <ul className="flex flex-col text-gray-600 whitespace-nowrap space-y-2">
                            <li>Instagram</li>
                            <li>Pinterest</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row w-full text-gray-500 items-center justify-between pt-6">
                    <p className="hidden sm:block">
                        <span className="pr-4">Shipping to Nepal ($NRS)</span>
                        <span className="border-l px-4">English</span>
                    </p>
                    <p>© 2021 Clothing Company, Ltd.</p>
                </div>
            </div>
        </footer>
    );
}
