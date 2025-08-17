import Link from "next/link";

export default function ErrorDemoPage() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Error Handling</h2>
      <p>Next.js provides built-in error handling with error boundaries and custom error pages.</p>
      
      <div className="space-y-2">
        <h3 className="font-medium">Error Boundary Files:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>error.tsx</code> - Catches runtime errors in route segments</li>
          <li><code>not-found.tsx</code> - Custom 404 pages</li>
          <li><code>global-error.tsx</code> - Root-level error handling</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Test Error Scenarios:</h3>
        <div className="flex flex-col gap-2">
          <Link href="/error-demo/server-error" className="text-red-600 underline">
            Trigger Server Error (500)
          </Link>
          <Link href="/error-demo/client-error" className="text-red-600 underline">
            Trigger Client Error
          </Link>
          <Link href="/error-demo/nonexistent-page" className="text-red-600 underline">
            Visit Non-existent Page (404)
          </Link>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-sm">
          <strong>Production Note:</strong> In development, you'll see the error overlay. 
          In production, users will see the custom error pages.
        </p>
      </div>
    </section>
  );
}