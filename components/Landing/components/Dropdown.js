import Image from 'next/image'
export default function Dropdown({ menu }) {
    return (
        <div className={`
                        ${menu
                // ? `animate-dropdown transition-opacity ease-in-out duration-700`
                ? ` transition-all duration-200 ease-out  transform translate-y-0`
                : `transform -translate-y-96 transition-ll ease-in-out duration-500`
            }
                        absolute h-96 w-full bg-white shadow-sm top-24 z-10 flex justify-center p-2
                        `}>
            <div className="w-10/12 px-5 flex flex-row justify-between h-full py-12">
                <div className="flex flex-col space-y-4">
                    <span className="uppercase font-semibold tracking-wider text-gray-700">Clothing</span>
                    <ul className="items-left font-light text-gray-600 space-y-2">
                        <li>Tops</li>
                        <li>T-Shirts</li>
                        <li>Dresses</li>
                        <li>Jeans</li>
                        <li>Pants</li>
                        <li>Jackets</li>
                        <li>Bottoms</li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-4">
                    <span className="uppercase font-semibold tracking-wider text-gray-700">Shoes & Accessories</span>
                    <ul className="items-left font-light text-gray-600 space-y-2">
                        <li>Shoes</li>
                        <li>Face Masks</li>
                        <li>Lace Kits</li>
                        <li>Bags</li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-6 items-center justify-center max-w-lg">
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gray-500/80  mix-blend-multiply z-10 flex justify-center"></div>
                        <div className="absolute inset-0 z-20 text-gray-100 flex justify-center items-center">
                                <span className="text-lg font-semibold uppercase tracking-wider">
                                    New Collection
                                </span>
                        </div>
                        <div className="h-32 overflow-hidden">
                            <Image
                                className="object-cover h-full filter grayscale"
                                src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Picture"
                                width={700}
                                height={240}
                                blurDataURL="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                placeholder="blur"
                                loading="eager"
                                objectPosition="center"
                            />
                        </div>
                    </div>
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gray-500/80  mix-blend-multiply z-10 flex justify-center"></div>
                        <div className="absolute inset-0 z-20 text-gray-100 flex justify-center items-center">
                                <span className="text-lg font-semibold uppercase tracking-wider">
                                    Summer Apparel
                                </span>
                        </div>
                        <div className="h-32 overflow-hidden">
                            <Image
                                className="object-cover h-full"
                                src="https://images.pexels.com/photos/3776561/pexels-photo-3776561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Picture"
                                width={700}
                                height={240}
                                blurDataURL="https://images.pexels.com/photos/3776561/pexels-photo-3776561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                placeholder="blur"
                                loading="eager"
                                objectPosition="center"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
