export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Page Not Found
            </h1>
            <p className="text-gray-600 text-center mb-4">
            The page you are looking for does not exist.
            </p>
            <a
            href="/"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-center block"
            >
            Go to Home
            </a>
        </div>
        </div>
    );
}