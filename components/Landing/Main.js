import Layout from "./Layout"
import Image from 'next/image'
export default function Main() {
    return (
        <Layout>
            <main className="">
                <section className="bg-white flex flex-col container mx-auto px-8 relative overflow-hidden lg:px-12 xl:px-20 shadow-sm h-[650px] max-h-[650px]">
                    <div className="pt-32 font-inter space-y-8">
                        <div className="space-y-4">
                            <h1 className="font-extrabold text-6xl ">Summer styles <br /> are finally here</h1>
                            <p className="max-w-lg text-xl text-gray-500">This year, our new summer collection wil shelter you from the harsh
                                elements of a world that doesn't care if you live or die.
                            </p>
                        </div>
                        <button className="rounded-md px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-indigo-100 focus:outline-none">Shop Collection</button>
                    </div> 
                    <div className="grid grid-cols-3 absolute right-12 justify-center items-center gap-8  -mt-24">
                        <div className="grid grid-cols-1 gap-8  z-0">
                            <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                                alt="Picture"
                                width={200}
                                height={260}
                                blurDataURL="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                                placeholder="blur"
                                loading="eager"
                                objectFit="cover"
                            />
                            <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                alt="Picture"
                                width={200}
                                height={260}
                                blurDataURL="https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                placeholder="blur"
                                loading="eager"
                                objectFit="cover"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-8 ">
                            <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                alt="Picture"
                                width={200}
                                height={260}
                                blurDataURL="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                placeholder="blur"
                                loading="eager"
                                objectFit="cover"
                            />
                            <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                alt="Picture"
                                width={200}
                                height={260}
                                blurDataURL="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                placeholder="blur"
                                loading="eager"
                                objectFit="cover"
                            />
                            <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1495385794356-15371f348c31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=319&q=80"
                                alt="Picture"
                                width={200}
                                height={260}
                                blurDataURL="https://images.unsplash.com/photo-1495385794356-15371f348c31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=319&q=80"
                                placeholder="blur"
                                loading="eager"
                                objectFit="cover"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-8 ">
                            <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1619608176024-7906d3489cc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                alt="Picture"
                                width={200}
                                height={260}
                                blurDataURL="https://images.unsplash.com/photo-1619608176024-7906d3489cc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                placeholder="blur"
                                loading="eager"
                                objectFit="cover"
                            />
                            <Image
                                className="rounded-lg"
                                src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=100"
                                alt="Picture"
                                width={200}
                                height={260}
                                blurDataURL="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=100"
                                placeholder="blur"
                                loading="eager"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="h-96 bg-gray-100">

                </section>
            </main>
        </Layout>
    )
}
