export default function SecretPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-green-600">🎉 Secret Page!</h1>
        
        <p className="text-gray-600">
          You've reached a protected page! This means the middleware 
          found a valid auth token in your cookies.
        </p>

        <div className="bg-green-50 border border-green-200 p-4 rounded">
          <p className="text-sm text-green-700">
            In a real app, the middleware would validate a JWT token 
            or session cookie here.
          </p>
        </div>

        <a
          href="/middleware-demo"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Middleware Demo
        </a>
      </div>
    </div>
  );
}