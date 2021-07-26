import Head from 'next/head'
import Main from '../components/Landing/Main'

export default function landing() {
    return (
        <div className="flex flex-col font-sans antialiased bg-white min-h-screen">
            <Head>
                <title>JET COMMERCE | Commerce with Jet Speed | Bhimraj Yadav </title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Main/>
        </div>
    )
}
