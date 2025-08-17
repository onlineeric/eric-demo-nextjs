'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error);
  }, [error]);

  return (
    <div className="space-y-4 p-6 border border-red-200 bg-red-50 rounded">
      <h2 className="text-lg font-semibold text-red-800">Something went wrong!</h2>
      
      <div className="text-sm text-red-700">
        <p><strong>Error:</strong> {error.message}</p>
        {error.digest && (
          <p><strong>Error ID:</strong> {error.digest}</p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try again
        </button>
        <a
          href="/error-demo"
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Back to Error Demo
        </a>
      </div>

      <div className="text-xs text-gray-600 mt-4">
        This error was caught by the <code>error.tsx</code> file in the error-demo route segment.
      </div>
    </div>
  );
}