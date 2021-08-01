
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
            <div className="w-11/12 h-full py-10">
                <h1 className="text-gray-600 font-bold">{menu ? "Menu Active" : "Menu Inactive"}</h1>
            </div>
        </div>
    )
}
