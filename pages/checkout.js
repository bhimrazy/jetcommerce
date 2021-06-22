import Head from 'next/head'
export default function Checkout() {
    return (
      <div className="flex flex-col font-sans antialiased bg-gray-50 items-center min-h-screen">
          <Head>
             <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
          </Head>
       <header className="w-full flex flex-col py-8 bg-white items-center shadow-sm">
           <nav className="w-full max-w-screen-2xl flex flex-row mx-auto text-gray-900 font-normal  justify-between items-center text-xl ">
            <div className="flex flex-row items-center space-x-8">
                <img className="w-10 h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
                <ul className="flex flex-row whitespace-nowrap space-x-8">
                    <li>Unisex</li>
                    <li>Mens</li>
                    <li>Womans</li>
                    <li>Best sellers</li>
                    <li>Sale</li>
                </ul>
            </div>
            <ul className="flex flex-row items-center ">
                    <li className="border-r border-gray-500 px-4">Sign in</li>
                    <li className="px-4 ">Register</li>
                    <li className="px-4"><svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></li>
                    <li className="px-4"><svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></li>
                    <li className="px-4"><svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></li>
                    <li>0</li>
            </ul>
           </nav>           
       </header>
       <main className="w-full flex flex-col text-gray-900 items-center">
        <section className=" w-full flex flex-col border-b font-normal text-xl ">
            <div className="max-w-screen-2xl items-center mx-auto w-full">
                <ul className="grid grid-cols-4 text-center">
                        <li className="py-8 border-b-[3px] border-indigo-600 font-medium text-indigo-800">Delivery </li>
                        <li className="py-8 ">Payment</li>
                        <li className="py-8 ">Confirm</li>
                        <li className="py-8 ">Summary</li>
                </ul>
            </div>
        </section>
        <section className=" w-full flex flex-col font-normal text-xl py-28">
            <div className="max-w-screen-2xl flex flex-col mx-auto w-full">
                <div className="grid grid-cols-4">
                     <div className="col-span-3 flex flex-col space-y-10 mr-40">
                         <h3 className="text-2xl font-medium">  Select delivery method</h3>
                         <div className="relative bg-white rounded-md shadow-sm border flex flex-col">
                            <div className="flex flex-col text-xl">
                                <div className="flex flex-row justify-between items-center border-b py-6 px-8">
                                    <div className="flex flex-row space-x-6 text-indigo-600 items-center font-medium">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                        <span>Home Delivery</span>
                                    </div>
                                    <span><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></span>
                                </div>
                                <div className="flex flex-col border-b py-10 px-28 space-y-8 text-gray-800">
                                    <div className="grid grid-cols-2 gap-8">
                                        <label className="flex flex-col space-y-3">
                                            <span>First name</span>
                                            <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="firstname" />
                                        </label>
                                        <label className="flex flex-col space-y-3">
                                            <span>Last name</span>
                                            <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="lastname" />
                                        </label>
                                    </div>
                                    <label className="w-full flex flex-col space-y-3">
                                        <span>Company</span>
                                        <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="company" />
                                    </label>
                                    <label className="w-full flex flex-col space-y-3">
                                        <span>Address</span>
                                        <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="address" />
                                    </label>
                                    <label className="w-full flex flex-col space-y-3">
                                        <span>Apartment, suite, etc.</span>
                                        <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="address" />
                                    </label>
                                    <div className="grid grid-cols-2 gap-8">
                                        <label className="flex flex-col space-y-3">
                                            <span>City</span>
                                            <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="city" />
                                        </label>
                                        <label className="flex flex-col space-y-3">
                                            <span>Country</span>
                                            <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="country" />
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-3 gap-8 pb-4">
                                        <label className="flex flex-col space-y-3">
                                            <span>Province</span>
                                            <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="province" />
                                        </label>
                                        <label className="flex flex-col space-y-3">
                                            <span>Postal code</span>
                                            <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="postalcode" />
                                        </label>
                                        <label className="flex flex-col space-y-3">
                                            <span>Phone number</span>
                                            <input type="text" className="focus:outline-none border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="phonenumber" />
                                        </label>
                                    </div>
                                    <hr/>
                                    <div>
                                        <h3 className="py-6">Delivery method</h3>
                                        <div className="grid grid-cols-2 gap-8">
                                        <div className="border-[3px] border-indigo-500 space-y-10 rounded-lg p-6 flex flex-col shadow-sm">
                                            <div className="flex flex-row justify-between">
                                                <div className="flex flex-col space-y-2">
                                                    <span>Standard shipping</span>
                                                    <span className="text-gray-500">4-10 business days</span>
                                                </div>
                                                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            </div>
                                            <p className="text-indigo-600">$4.00</p>
                                        </div>
                                        <div className="border-[1.1px] border-gray-300 space-y-10 rounded-lg p-6 flex flex-col shadow-sm">
                                            <div className="flex flex-row justify-between">
                                                <div className="flex flex-col space-y-2">
                                                    <span>Express shipping</span>
                                                    <span className="text-gray-500">2-3 business days</span>
                                                </div>
                                                <svg className="w-8 h-8 opacity-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            </div>
                                            <p className="text-indigo-600">$14.00</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div><button type="submit" className="px-8 py-3 rounded-lg bg-indigo-600 text-white text-base text-center focus:outline-none">Save details</button></div>
                                </div>
                            </div>
                            <div className="flex flex-col text-xl">
                                <div className="flex flex-row justify-between items-center border-b py-6 px-8">
                                    <div className="flex flex-row space-x-6 text-gray-500 f items-center font-medium">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                        <span>Store Delivery</span>
                                    </div>
                                   
                                        <span><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></span>
                                </div>
                            </div>
                            <div className="flex flex-col text-xl bottom-0">
                                <div className="flex flex-row justify-between items-center border-b py-6 px-8">
                                    <div className="flex flex-row space-x-6 text-gray-500 f items-center font-medium">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Pick-up Location</span>
                                    </div>
                                    <span><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></span>
                                </div>
                            </div>
                         </div>
                     </div>   
                     <div className="col-span-1 flex flex-col -mx-12">
                         <h3 className="text-2xl font-medium pb-8"> Order summary</h3>
                         <div className="flex flex-row items-center justify-between pb-4 border-b"><span className="text-gray-600">Subtotal</span><span>$3090.00</span></div>
                         <div className="flex flex-row items-center justify-between py-4 border-b"><span className="text-gray-600">Tax</span><span>$200.00</span></div>
                         <div className="flex flex-row items-center justify-between pt-4 pb-6"><span className="text-gray-600">Standard delivery</span><span>$4</span></div>
                         <button className="bg-indigo-600 text-white rounded-xl py-4">Go to payment</button>
                         <div className="grid grid-cols-2 items-center text-center py-4 text-lg font-medium"><span className="border-r">Edit bag</span><span className="">Continue shopping</span></div>
                     </div>
                </div>
            </div>
        </section>
       </main>
       <footer className=" w-full bg-white shadow-sm py-20">
            <div className="max-w-screen-2xl flex flex-col w-full items-center mx-auto space-y-16">
                <div className="items-center">
                    <img className="w-10 h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
                </div>
                <div className="w-full flex flex-row justify-around text-gray-600 text-xl">
                    <div className="flex flex-col space-y-8">
                        <h3 className="font-medium text-2xl text-gray-800">Navigate</h3>
                        <ul className="flex flex-col whitespace-nowrap space-y-4">
                            <li>Sale</li>
                            <li>Clothing</li>
                            <li>Shoes</li>
                            <li>Accessories</li>
                            <li>Sportswear</li>
                            <li>Face + Body</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <h3 className="font-medium text-2xl text-gray-800">Customer service</h3>
                        <ul className="flex flex-col whitespace-nowrap space-y-4">
                            <li>Size Guide</li>
                            <li>Refer a Friend</li>
                            <li>Accessibility</li>
                            <li>Reviews</li>
                            <li>Contact</li>
                            <li>Follow on Twitter</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <h3 className="font-medium text-2xl text-gray-800">Company</h3>
                        <ul className="flex flex-col whitespace-nowrap space-y-4">
                            <li>About</li>
                            <li>Our Mission</li>
                            <li>Team</li>
                            <li>FAQ</li>
                            <li>Wholesale</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <h3 className="font-medium text-2xl text-gray-800">Legal</h3>
                        <ul className="flex flex-col whitespace-nowrap space-y-4">
                            <li>Terms of Service</li>
                            <li>Return Policy</li>
                            <li>Privacy Policy</li>
                            <li>Shipping Policy</li>
                        </ul>
                    </div>
                </div>
                <div className=" text-lg text-gray-600"><p>© 2021 . All rights reserved.</p></div>
            </div>
       </footer>
      </div>
    );
  }
  