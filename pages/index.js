import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/main/Hero";

export default function Home() {
  return (
    <div className="flex flex-col font-sans antialiased bg-white items-center justify-center min-h-screen">
      <Head>
        <title>Jet Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col w-full items-center flex-1">
        <Hero />
      </main>
    </div>
  );
}
