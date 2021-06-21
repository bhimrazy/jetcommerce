import Head from 'next/head'
export default function Checkout() {
    return (
      <div className="flex flex-col font-sans antialiased bg-gray-50 items-center min-h-screen">
          <Head>
             <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
          </Head>
       <header className="w-full flex flex-col py-6 bg-white items-center shadow-sm">
           <nav className="w-full max-w-screen-2xl flex flex-row text-gray-900 font-normal  justify-between items-center text-xl ">
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
      </div>
    );
  }
  