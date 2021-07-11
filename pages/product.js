import Head from 'next/head'
export default function Product() {
    return (
      <div className="flex flex-col font-sans antialiased bg-gray-50 items-center min-h-screen">
          <Head>
             <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
            <title>Product | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav </title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="title"
          content="Product | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          name="description"
          content="Product | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jetcommerce.vercel.app/product"
        />
        <meta
          property="og:title"
          content="Product | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="og:description"
          content="Product | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="og:image"
          content="https://jetcommerce.vercel.app/Product.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://jetcommerce.vercel.app/product"
        />
        <meta
          property="twitter:title"
          content="Product | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="twitter:description"
          content="Product | JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="twitter:image"
          content="https://jetcommerce.vercel.app/Product.png"
        />
          </Head>
       <header className="w-full flex flex-col items-center shadow">
           <div className="bg-gray-800 py-2 w-full">
                <div className="container mx-auto px-8 justify-center md:px-20 flex flex-row text-sm text-gray-400 font-normal sm:justify-between items-center">
                    <div className="hidden sm:block"><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg></div>
                    <div> <span>Get free delivery on orders over $100</span></div>
                    <div className="hidden sm:flex flex-row divide-x divide-gray-500">
                        <span className="pr-6">Create an account</span>
                        <span className="pl-6">Sign in</span>
                    </div>
                </div>
            </div>
           <div className="bg-white py-4 w-full">
                <nav className="container mx-auto px-8 md:px-20 flex flex-row text-gray-900 font-normal justify-between items-center">
                    <div className="flex flex-row items-center">
                        <svg className="w-8 h-8 mr-4 text-gray-400 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        <img className="w-10 h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo" />
                        <ul className="lg:flex lg:flex-row whitespace-nowrap space-x-8 hidden px-8 font-medium text-gray-700">
                            <li>Unisex</li>
                            <li>Mens</li>
                            <li>Women</li>
                            <li>Best sellers</li>
                            <li>Sale</li>
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
       <main className="w-full flex flex-col text-gray-900 items-center min-h-screen">
       
       </main>
       <footer className=" w-full bg-white shadow-sm py-10 ">
            <div className="container mx-auto px-8 md:px-20 flex flex-col w-full items-center divide-y pt-4 divide-gray-100 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between w-full">
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
                <div className="flex flex-row w-full text-gray-500 items-center justify-between pt-6"><p className="hidden sm:block"><span className="pr-4">Shipping to Nepal ($NRS)</span><span className="border-l px-4">English</span></p><p>© 2021 Clothing Company, Ltd.</p></div>
            </div>
       </footer>
      </div>
    );
  }
  