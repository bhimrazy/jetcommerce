import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image'
import bagPic from '../public/bag.jpg'

export default function Shop() {
    const [menu, setMenu] = useState(false)
    const handleMenu=()=>{
      setMenu(!menu)
    }
    return (
      <div className="flex flex-col font-inter antialiased bg-gray-50 items-center min-h-screen">
          <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
            <title>Shop | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav </title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="title"
          content="Shop | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          name="description"
          content="Shop | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jetcommerce.vercel.app/shop"
        />
        <meta
          property="og:title"
          content="Shop | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="og:description"
          content="Shop | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="og:image"
          content="https://jetcommerce.vercel.app/shop.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://jetcommerce.vercel.app/shop"
        />
        <meta
          property="twitter:title"
          content="Shop | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="twitter:description"
          content="Shop | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="twitter:image"
          content="https://jetcommerce.vercel.app/shop.jpg"
        />
          </Head>
       <header className="w-full flex flex-col bg-white items-center border-b">
           <nav className="w-full  lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl py-6 px-8 lg:px-0 relative flex flex-row mx-auto text-gray-900 font-normal  justify-between items-center text-xl border-b">
            <div className="flex flex-row items-center space-x-2 md:space-x-0">
                <svg className="w-8 h-8 text-gray-400 lg:hidden" onClick={handleMenu} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                <div className="space-x-5 md:space-x-6 xl:space-x-8 flex flex-row items-center">
                  <img className="w-10 h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
                  <ul className="lg:flex lg:flex-row whitespace-nowrap space-x-8 hidden ">
                      <li className="text-gray-800">Men</li>
                      <li className="text-gray-500">Women</li>
                      <li className="text-gray-500">Everything</li>
                      <li className="text-gray-500">Company</li>
                  </ul>
                </div>
            </div>
           {
              menu &&  <div className="absolute w-full inset-0 z-10">
                          <div className="w-full p-4" >
                              <svg className="w-8 h-8 absolute right-8 text-gray-600" onClick={handleMenu} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                              <ul className="flex flex-col whitespace-nowrap space-y-4 p-4 rounded-lg shadow-sm bg-white">
                                    <li className="text-gray-800">Men</li>
                                    <li className="text-gray-500">Women</li>
                                    <li className="text-gray-500">Everything</li>
                                    <li className="text-gray-500">Company</li>
                              </ul>
                          </div>
                      </div>
            }
            <ul className="flex flex-row items-center ">                    
                    <li className="px-3 xl:px-4 hidden md:block">
                        <label className="relative">
                            <input type="text" className="focus:outline-none focus:ring-1 focus:ring-indigo-600 border border-gray-300 shadow-sm pl-12 pr-6 py-2 rounded-lg" name="search"/>
                            <svg className="w-6 h-6 text-gray-400 absolute inset-0 mx-2 hover:text-gray-500 transition-all duration-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </label>
                    </li>
                    <li className="px-3 xl:px-4"><svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></li>
                    <li className="px-3 xl:px-4"><svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></li>
                    <li className="pl-3 xl:pl-4"><svg className="w-8 h-8 text-gray-400"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg></li>
                    <li className="text-gray-450 px-1">0</li>
            </ul>
           </nav>    
           <section className="w-full  lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl py-4 px-8 lg:px-0 space-x-3 flex flex-row">
            <span className="border-r pr-4 text-gray-700 ">Men</span>
            <span className="border-r  pr-4 text-gray-700">Loungewear</span>
            <span className=" pr-4 text-gray-500">Sale</span>
          </section>       
       </header>
       <main className="w-full flex flex-col text-gray-900 items-center">
        <section className=" w-full flex flex-col border-b font-normal text-xl bg-white shadow">
            <div className=" lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-8 py-6 lg:px-0 items-center mx-auto w-full">
                <h2 className="font-bold text-4xl pt-10">Up to 60% off</h2>
                <p className="text-gray-600 pt-4">We currently have up to 60% off on most mens bags. If you want a further 25% off, all <br/>
                you have to do is enter FURTHEROFF at checkout. Selected items only.</p>
                <div className="justify-between flex flex-row pt-16 ">
                  <div className="flex flex-row space-x-1 text-gray-600"><span>Sort</span> <svg className="w-6 h-6 ml-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></div>
                  <div className="space-x-6 sm:flex flex-row flex-nowrap hidden">
                    <div className="flex flex-row space-x-1 text-gray-600"><span>Color</span> <svg className="w-6 h-6 ml-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></div>
                    <div className="flex flex-row space-x-1 text-gray-600"><span>Category</span> <svg className="w-6 h-6 ml-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></div>
                    <div className="flex flex-row space-x-1 text-gray-600"><span>Size</span> <svg className="w-6 h-6 ml-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></div>
                  </div>
                </div>
            </div>
        </section>
       <section className="lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-8 py-16 lg:px-0 items-center mx-auto w-full">
          <div className="grid drid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>        
              <div className="space-y-4">
                    {/* <div className=" w-[360px] h-96 bg-white">
                      
                    </div> */}
                    <Image
                        src={bagPic}
                        alt="Picture of the bag"
                        loading="eager"
                      />
                    <h3 className="text-gray-600">Office Pack</h3>
                    <span className="text-gray-700 text-2xl font-medium">$360</span>
              </div>                
          </div>            
       </section>
       </main>
       <footer className=" w-full bg-white shadow-sm py-20 border-t">
            <div className=" lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col w-full items-center mx-auto space-y-16">
                <div className="flex flex-col md:flex-row flex-wrap md:justify-between text-center space-y-8 justify-center md:space-y-0 md:text-left w-full px-8 lg:px-0 text-gray-600 text-normal">
                    <div className="mx-auto md:mx-0 text-center">
                        <img className="w-10 h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
                    </div>
                    <div className="flex flex-col space-y-6 md:space-y-8">
                        <h3 className="font-medium text-2xl text-gray-800">Products</h3>
                        <ul className="flex flex-col whitespace-nowrap space-y-4">
                            <li>Work bags</li>
                            <li>Leisure bags</li>
                            <li>Travel bags</li>
                            <li>Accessories</li>
                            <li>Jackets</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-6 md:space-y-8">
                        <h3 className="font-medium text-2xl text-gray-800">Company</h3>
                        <ul className="flex flex-col whitespace-nowrap space-y-4">
                            <li>Who are we</li>
                            <li>Sustainability</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-6 md:space-y-8">
                        <h3 className="font-medium text-2xl text-gray-800">Customer service</h3>
                        <ul className="flex flex-col whitespace-nowrap space-y-4">
                            <li>Contact</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                            <li>Warranty</li>
                            <li>Secure Payments</li>
                            <li>FAQ</li>
                            <li>Find a Store</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-4">
                        <h3 className="font-medium text-2xl text-gray-800">Sign up to our newsletter</h3>
                        <p className=" text-normal text-gray-600">Be the first to know when we release new products</p>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full max-w-md mx-auto md:mx-0">
                            <input type="text" className="focus:outline-none focus:ring-1 focus:ring-indigo-600 border border-gray-300 shadow-sm px-6 py-3 rounded-lg" name="email" />
                            <button className="focus:outline-none px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 whitespace-nowrap text-white text-lg">Sign up</button>
                        </div>                        
                    </div>
                </div>
                <div className=" text-lg text-gray-600 items-center text-center"><p>© 2021. Clothing Co. Ltd. All rights reserved.</p></div>
            </div>
       </footer>
      </div>
    );
  }
  