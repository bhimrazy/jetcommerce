import Layout from "./Layout"

export default function Main() {
    return (
        <Layout>
            <main className="">
                <section className="bg-white flex flex-col container mx-auto px-8 lg:px-12 xl:px-20 min-h-screen">
                    <div className="pt-20 font-inter">
                        <h1 className="font-extrabold text-5xl max-w-sm">Summer styles are finally here</h1>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
