import Link from "next/link";

const Custom404 = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
                <div className="rounded-lg p-8 text-center flex flex-col">
                    <img src="/not_found.png" className="w-96 hover:cursor-pointer" alt="not found image" />
                    <h1 className="mb-4 text-4xl font-bold">404</h1>
                    <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
                    <Link href={"/"} className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 "> Go back to Home </Link>
                </div>
            </div>
        </div>
    )
}

export default Custom404;