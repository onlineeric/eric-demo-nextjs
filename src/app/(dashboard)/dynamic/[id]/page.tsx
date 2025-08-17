import Link from "next/link";

interface Props {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function DynamicIdPage({ params, searchParams }: Props) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Dynamic Route: [id]</h2>
      <p>This page demonstrates a single dynamic route parameter.</p>
      
      <div className="bg-gray-100 p-3 rounded">
        <p><strong>Route Parameter:</strong></p>
        <p>ID: <code className="bg-white px-1 rounded">{params.id}</code></p>
      </div>

      {Object.keys(searchParams).length > 0 && (
        <div className="bg-gray-100 p-3 rounded">
          <p><strong>Search Parameters:</strong></p>
          <pre className="text-sm">{JSON.stringify(searchParams, null, 2)}</pre>
        </div>
      )}

      <div className="space-y-2">
        <p>Try different IDs:</p>
        <div className="flex gap-2">
          <Link href="/dynamic/user-1" className="px-2 py-1 bg-blue-100 rounded hover:bg-blue-200">
            user-1
          </Link>
          <Link href="/dynamic/product-42" className="px-2 py-1 bg-blue-100 rounded hover:bg-blue-200">
            product-42
          </Link>
          <Link href="/dynamic/abc?filter=active&sort=name" className="px-2 py-1 bg-blue-100 rounded hover:bg-blue-200">
            abc (with query params)
          </Link>
        </div>
      </div>

      <Link href="/dynamic" className="text-blue-600 underline">
        ← Back to Dynamic Routes
      </Link>
    </section>
  );
}