import Link from "next/link";

interface Props {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function CatchAllPage({ params, searchParams }: Props) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Dynamic Route: [...slug]</h2>
      <p>This page demonstrates catch-all route segments that match multiple path parts.</p>
      
      <div className="bg-gray-100 p-3 rounded">
        <p><strong>Slug Parameters:</strong></p>
        <p>Segments: <code className="bg-white px-1 rounded">{JSON.stringify(params.slug)}</code></p>
        <p>Full path: <code className="bg-white px-1 rounded">/{params.slug.join('/')}</code></p>
      </div>

      {Object.keys(searchParams).length > 0 && (
        <div className="bg-gray-100 p-3 rounded">
          <p><strong>Search Parameters:</strong></p>
          <pre className="text-sm">{JSON.stringify(searchParams, null, 2)}</pre>
        </div>
      )}

      <div className="space-y-2">
        <p>Try different paths:</p>
        <div className="flex flex-col gap-2">
          <Link href="/dynamic/category/electronics" className="text-blue-600 underline">
            /dynamic/category/electronics
          </Link>
          <Link href="/dynamic/blog/2024/01/my-post" className="text-blue-600 underline">
            /dynamic/blog/2024/01/my-post
          </Link>
          <Link href="/dynamic/docs/api/routes/handlers?section=intro" className="text-blue-600 underline">
            /dynamic/docs/api/routes/handlers (with query)
          </Link>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded">
        <p className="text-sm">
          <strong>Note:</strong> Catch-all routes match any number of segments. 
          This is useful for building flexible content management systems, 
          documentation sites, or file browsers.
        </p>
      </div>

      <Link href="/dynamic" className="text-blue-600 underline">
        ← Back to Dynamic Routes
      </Link>
    </section>
  );
}