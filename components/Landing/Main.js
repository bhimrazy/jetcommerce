import Layout from "./Layout"

export default function Main() {
    return (
        <Layout>
            <main className="">
                <section className="bg-white flex flex-col container mx-auto px-8 lg:px-12 xl:px-20 shadow-sm min-h-[640px]">
                    <div className="pt-32 font-inter space-y-8">
                        <div className="space-y-4">
                            <h1 className="font-extrabold text-6xl ">Summer styles <br /> are finally here</h1>
                            <p className="max-w-lg text-xl text-gray-500">This year, our new summer collection wil shelter you from the harsh
                                elements of a world that doesn't care if you live or die.
                            </p>
                        </div>
                        <button className="rounded-md px-8 py-3 bg-indigo-600 hover:bg-indigo-600/20 text-indigo-100">Shop Collection</button>
                    </div>
                </section>
                <section className="h-96 bg-gray-100">

                </section>
            </main>
        </Layout>
    )
}
