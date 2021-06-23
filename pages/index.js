import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500">
      <Head>
        <title>JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav </title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="title"
          content="JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          name="description"
          content="JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jetcommerce.vercel.app/"
        />
        <meta
          property="og:title"
          content="JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="og:description"
          content="JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="og:image"
          content="https://jetcommerce.vercel.app/jet-commerce.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://jetcommerce.vercel.app"
        />
        <meta
          property="twitter:title"
          content="JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="twitter:description"
          content="JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav"
        />
        <meta
          property="twitter:image"
          content="https://jetcommerce.vercel.app/jet-commerce.png"
        />
        <link
          rel="canonical"
          href="https://jetcommerce.vercel.app"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className=" text-9xl font-black">
         JETCOMMERCE
        </h1>

        <p className="mt-3 text-2xl uppercase tracking-widest">
          Commerce with Jet Speed 🚀.
        </p>
        <p className="py-10 text-xl tracking-widest underline">
          !!! Launching Soon !!!
        </p>

        
      </main>
    </div>
  )
}