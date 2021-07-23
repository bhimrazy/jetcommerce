
export default function login() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex flex-col">
                <section>
                    <h1>Login</h1>
                    <div>
                        <input placeholder="Enter your mail"/>
                    </div>
                    <div>
                        <input placeholder="Enter your password"/>
                    </div>
                </section>
            </main>
        </div>
    )
}
