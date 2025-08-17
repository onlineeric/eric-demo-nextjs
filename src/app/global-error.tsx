'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md space-y-4 text-center">
            <h2 className="text-2xl font-bold text-red-600">Application Error</h2>
            
            <p className="text-gray-600">
              Something went wrong at the application level.
            </p>

            <div className="text-sm text-gray-500 p-3 bg-gray-100 rounded">
              <p><strong>Error:</strong> {error.message}</p>
              {error.digest && (
                <p><strong>Error ID:</strong> {error.digest}</p>
              )}
            </div>

            <div className="flex gap-2 justify-center">
              <button
                onClick={reset}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Try again
              </button>
              <a
                href="/"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Go to Home
              </a>
            </div>

            <div className="text-xs text-gray-400 mt-4">
              This error was caught by the global error boundary (<code>global-error.tsx</code>).
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}