
export default function login() {
    return (
        <div className="flex flex-col">
            <main className="flex flex-col font-sans min-h-screen justify-center">
                <section className="flex flex-col max-w-lg mx-auto items-center space-y-3 justify-center">
                    <h1 className="text-xl font-bold text-gray-800 py-2">Jet Commerce</h1>
                    <input className="px-3 py-2 border border-gray-300 shadow-sm rounded-lg focus:outline-none text-sm " placeholder="Email address"/>
                    <input className="px-3 py-2 border border-gray-300 shadow-sm rounded-lg focus:outline-none text-sm " placeholder="Password"/>
                    <button className="bg-gray-700 w-full text-gray-50 py-2 rounded-lg"> Sign in to account</button>
                    <p>Hello World</p>
                </section>
            </main>
        </div>
    )
}
