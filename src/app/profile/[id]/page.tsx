export default async function UserProfile({ params }: { params: { id: string } }) {  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Profile
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Profile page for user with ID:
          <span className="font-semibold">{params.id}</span>
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
