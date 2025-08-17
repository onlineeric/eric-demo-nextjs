import Link from "next/link";

export default function DynamicPage() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Dynamic Routes</h2>
      <p>Next.js supports dynamic route segments using square brackets in folder names.</p>
      
      <div className="space-y-2">
        <h3 className="font-medium">Examples:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>[id]</code> - Single dynamic segment</li>
          <li><code>[...slug]</code> - Catch-all segments</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Try these links:</h3>
        <div className="flex flex-col gap-2">
          <Link href="/dynamic/123" className="text-blue-600 underline">
            /dynamic/123 (single param)
          </Link>
          <Link href="/dynamic/products/electronics/phones" className="text-blue-600 underline">
            /dynamic/products/electronics/phones (catch-all)
          </Link>
        </div>
      </div>

      <p className="text-sm opacity-70">
        Check the file structure: <code>/dynamic/[id]/page.tsx</code> and <code>/dynamic/[...slug]/page.tsx</code>
      </p>
    </section>
  );
}