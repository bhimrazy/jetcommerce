import Head from 'next/head'
import Image from 'next/image'
export default function Product() {
    return (
      <div className="flex flex-col font-sans antialiased bg-gray-50 items-center min-h-screen">
          <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
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
                <div className="container mx-auto px-8 justify-center lg:px-12 xl:px-20 flex flex-row text-sm text-gray-400 font-normal sm:justify-between items-center">
                    <div className="hidden sm:block"><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg></div>
                    <div> <span>Get free delivery on orders over $100</span></div>
                    <div className="hidden sm:flex flex-row divide-x divide-gray-500">
                        <span className="pr-6">Create an account</span>
                        <span className="pl-6">Sign in</span>
                    </div>
                </div>
            </div>
           <div className="bg-white py-4 w-full">
                <nav className="container mx-auto px-8 lg:px-12 xl:px-20 flex flex-row text-gray-900 font-normal justify-between items-center">
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
       <main className="w-full container mx-auto px-8 lg:px-12 xl:px-20 flex flex-col space-y-4 py-6 lg:py-10 divide-y text-gray-900 items-center">
            <section className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 w-full">
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex flex-col py-6 lg:hidden">
                          <div className="flex flex-row justify-between text-lg font-semibold">
                            <span>Basic Tee</span>
                            <span>$35</span>
                          </div>
                          <div className="flex flex-row pt-1 items-center space-x-2 text-sm divide-x divide-gray-400">
                          <div className="flex flex-row items-center">
                            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <span className="text-gray-600 pl-2">3.9</span>
                          </div>
                            <span className="text-blue-600 px-2">See all 512 reviews</span>
                          </div>
                        </div>
                    <div>
                        <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
                                alt="Picture"
                                width={800}
                                height={1100} 
                                blurDataURL="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" 
                                placeholder="blur"
                                loading="eager"
                                objectFit="cover"
                        />         
                    </div>
                    <div className="hidden md:flex flex-row gap-8 py-4">
                        <Image  
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
                                alt="Picture"
                                width={500}
                                height={750} 
                                blurDataURL="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" 
                                placeholder="blur"
                                loading="lazy"
                                objectFit="cover"
                        />  
                        <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1554568218-0f1715e72254"
                                alt="Picture"
                                width={500}
                                height={750} 
                                blurDataURL="https://images.unsplash.com/photo-1554568218-0f1715e72254" 
                                placeholder="blur"
                                loading="lazy"
                                objectFit="cover"
                        />        
                    </div>                                   
                </div>
                <div className="lg:col-span-5 flex flex-col divide-y-2 font-inter space-y-8">
                    <div className="space-y-6 flex flex-col">
                      <div className="lg:flex flex-col hidden">
                        <div className="flex flex-row justify-between text-lg font-semibold">
                          <span>Basic Tee</span>
                          <span>$35</span>
                        </div>
                        <div className="flex flex-row pt-4 items-center space-x-2 text-sm divide-x divide-gray-400">
                         <div className="flex flex-row items-center">
                          <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <span className="text-gray-600 pl-2">3.9</span>
                         </div>
                          <span className="text-blue-600 px-2">See all 512 reviews</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-medium">Color</h3>
                        <ul className="flex flex-row gap-4 pt-4">
                          <li className="bg-gray-800 rounded-full h-8 w-8 ring-1 ring-indigo-600 ring-offset-2"></li>
                          <li className="bg-gray-300 rounded-full h-8 w-8"></li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                          <h3 className="font-medium">Size</h3><small className="text-blue-600">Size guide</small>
                        </div>
                        <ul className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center text-sm pt-4">
                          <li className="border border-gray-200 rounded px-3 py-2">XXS</li>
                          <li className="border border-gray-200 rounded px-3 py-2">XS</li>
                          <li className="bg-blue-600 ring-1 ring-indigo-600 ring-offset-2 rounded text-gray-50 px-3 py-2">S</li>
                          <li className="border border-gray-200 rounded px-3 py-2">M</li>
                          <li className="border border-gray-200 rounded px-3 py-2">L</li>
                          <li className="border border-gray-200 rounded px-3 py-2">XL</li>
                        </ul>
                      </div>
                      <button className="bg-blue-600 py-2 focus:outline-none text-gray-50 text-center rounded w-full">Add to bag</button>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="py-8 font-medium">Description</h4>
                        <p className="text-gray-600">
                          The Basic tee is an honest new take on a classic.The tee uses super soft,
                          pre-shrunk cotton for true comfort and a dependable fit.They are hand
                          cut and sewn locally,with a special dye technique that gives each tee it's
                          own look.<br/><br/>

                          Looking to stock your closet? The basic tee also comes in a 3-pack or
                          5-pack at a bundle discount.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="py-8 font-medium">Fabric & Care</h4>
                        <ul className="flex flex-col list-disc text-gray-600 space-y-1 px-4">
                          <li>Only the best materials</li>
                          <li>Ethically and locally made</li>
                          <li>Pre-washed and pre-shrunk</li>
                          <li>Machine wash cold with similar colors</li>
                        </ul>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center py-6 xl:py-12">
                            <div className="flex flex-col bg-gray-100 rounded shadow-sm py-8 space-y-1 items-center">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                                <span className="font-medium">Free delivery</span>
                                <p className="text-gray-600 text-sm">For order over $145</p>
                            </div>
                            <div className="flex flex-col bg-gray-100 rounded shadow-sm py-8 space-y-1 items-center">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                <span className="font-medium">Easy returns</span>
                                <p className="text-gray-600 text-sm">With in 45 days of<br/> purchase</p>
                            </div>
                      </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-full font-inter">
              <h3 className="font-semibold text-lg pt-4">Recent reviews</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6 w-full text-sm ">
                <div className="flex flex-row justify-between order-last lg:order-none">
                    <div className="flex flex-row space-x-16 lg:space-x-0 lg:flex-col">
                      <span className="font-medium">Risako M</span>
                      <p className="text-gray-600">May 16,2021</p>
                    </div>
                   <div className="lg:mr-40">
                    <div className="hidden lg:flex flex-row items-center">
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <span className="text-gray-600 pl-2">4</span>
                    </div>
                   </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-row items-center pb-2 lg:hidden">
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <span className="text-gray-600 pl-2">4</span>
                    </div>
                      <h4 className="font-medium">I love Black  Tee</h4>
                        <p className="text-gray-600">
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book<br/><br/>

                         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                </div>
              </div>
            </section>  
            <section className="flex flex-col w-full font-inter">
              <h3 className="font-semibold text-lg pt-4">Customers also purchased</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6 w-full">
                <div className="flex flex-col">
                <Image  
                                className="rounded"
                                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
                                alt="Picture"
                                width={400}
                                height={500} 
                                blurDataURL="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" 
                                placeholder="blur"
                                loading="lazy"
                                objectFit="cover"
                        />  
                        <div className="flex flex-row justify-between pt-4">
                          <div className="flex flex-col text-gray-700 space-y-1">
                            <span>Basic Tee</span>
                            <span className="text-gray-500">Black</span>
                          </div>
                          <span className="font-medium">$30</span>

                        </div>
                </div>
                <div className="flex flex-col">
                <Image  
                                className="rounded"
                                src="https://images.unsplash.com/photo-1519345997025-14aba50d7e9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdoaXRlJTIwdHNoaXJ0JTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Picture"
                                width={400}
                                height={500} 
                                blurDataURL="https://images.unsplash.com/photo-1519345997025-14aba50d7e9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdoaXRlJTIwdHNoaXJ0JTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                placeholder="blur"
                                loading="lazy"
                                objectFit="cover"
                        />  
                        <div className="flex flex-row justify-between pt-4">
                          <div className="flex flex-col text-gray-700 space-y-1">
                            <span>Basic Tee</span>
                            <span className="text-gray-500">Aspen White</span>
                          </div>
                          <span className="font-medium">$30</span>

                        </div>
                </div>
                <div className="flex flex-col">
                <Image  
                                className="rounded"
                                src="https://images.unsplash.com/photo-1620279765075-91d8a7a1d007?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJsYWNrJTIwdHNoaXJ0JTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Picture"
                                width={400}
                                height={500} 
                                blurDataURL="https://images.unsplash.com/photo-1620279765075-91d8a7a1d007?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJsYWNrJTIwdHNoaXJ0JTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                placeholder="blur"
                                loading="lazy"
                                objectFit="cover"
                        />  
                        <div className="flex flex-row justify-between pt-4">
                          <div className="flex flex-col text-gray-700 space-y-1">
                            <span>Basic Tee</span>
                            <span className="text-gray-500">Charcoal</span>
                          </div>
                          <span className="font-medium">$30</span>

                        </div>
                </div>
                <div className="flex flex-col">
                <Image  
                                className="rounded"
                                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
                                alt="Picture"
                                width={400}
                                height={500} 
                                blurDataURL="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" 
                                placeholder="blur"
                                loading="lazy"
                                objectFit="cover"
                        />  
                        <div className="flex flex-row justify-between pt-4">
                          <div className="flex flex-col text-gray-700 space-y-1">
                            <span>Basic Tee</span>
                            <span className="text-gray-500">Iso Dots</span>
                          </div>
                          <span className="font-medium">$30</span>
                        </div>
                </div>
              </div>
            </section>
       </main>
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
                <div className="flex flex-row w-full text-gray-500 items-center justify-between pt-6"><p className="hidden sm:block"><span className="pr-4">Shipping to Nepal ($NRS)</span><span className="border-l px-4">English</span></p><p>© 2021 Clothing Company, Ltd.</p></div>
            </div>
       </footer>
      </div>
    );
  }
  