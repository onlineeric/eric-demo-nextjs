import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="space-y-4 p-6 border border-yellow-200 bg-yellow-50 rounded">
      <h2 className="text-lg font-semibold text-yellow-800">Page Not Found</h2>
      
      <p className="text-yellow-700">
        The page you're looking for doesn't exist in the error-demo section.
      </p>

      <div className="flex gap-2">
        <Link
          href="/error-demo"
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Back to Error Demo
        </Link>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Home
        </Link>
      </div>

      <div className="text-xs text-gray-600 mt-4">
        This 404 page was rendered by the <code>not-found.tsx</code> file in the error-demo route segment.
      </div>
    </div>
  );
}