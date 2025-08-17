import { headers } from 'next/headers';
import Link from 'next/link';

export default function MiddlewareDemoPage() {
  const headersList = headers();
  const customHeader = headersList.get('X-Custom-Header');
  const pathname = headersList.get('X-Pathname');
  const timestamp = headersList.get('X-Timestamp');
  const userAgent = headersList.get('user-agent');

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Middleware</h2>
      
      <p>
        Middleware runs before every request and allows you to modify the request/response, 
        redirect users, add headers, and implement authentication.
      </p>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-medium mb-2">Headers Added by Middleware:</h3>
        <div className="space-y-1 text-sm font-mono">
          <p>X-Custom-Header: <span className="text-green-600">{customHeader || 'Not set'}</span></p>
          <p>X-Pathname: <span className="text-blue-600">{pathname || 'Not set'}</span></p>
          <p>X-Timestamp: <span className="text-purple-600">{timestamp || 'Not set'}</span></p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded">
        <h3 className="font-medium mb-2">User Agent:</h3>
        <p className="text-sm font-mono break-all">{userAgent}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Try These Examples:</h3>
        <div className="flex flex-col gap-2">
          <Link href="/old-path" className="text-blue-600 underline">
            /old-path (will redirect to this page)
          </Link>
          <Link href="/protected/secret" className="text-blue-600 underline">
            /protected/secret (requires auth cookie)
          </Link>
          <a 
            href="/middleware-demo" 
            className="text-blue-600 underline"
            onClick={() => {
              // Refresh the page to see new timestamp
              window.location.reload();
            }}
          >
            Refresh to see new timestamp
          </a>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
        <h3 className="font-medium mb-2">Middleware Features:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Runs on the Edge Runtime for low latency</li>
          <li>Can modify requests and responses</li>
          <li>Perfect for authentication, redirects, and A/B testing</li>
          <li>Has access to cookies, headers, and URL parameters</li>
          <li>Cannot access Node.js APIs or file system</li>
        </ul>
      </div>

      <div className="text-sm text-gray-600">
        Check the browser's Network tab to see the custom headers in the response.
        The middleware code is in <code>src/middleware.ts</code>.
      </div>
    </section>
  );
}