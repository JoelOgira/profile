import Link from "next/link"

export default function NotFound() {
    return (
        <main className="mt-32 grid items-center justify-center">
            <div className="flex flex-col space-y-3">
                <h1 className="dark:text-white">The requested post could not be found!</h1>
                <p className="dark:text-white">Go back to the <Link href={'/'} className="underline">Homepage</Link></p>
            </div>
        </main>
    )
}
