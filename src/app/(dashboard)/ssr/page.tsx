// Force server render on every request (no caching)
export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const res = await fetch(`${base}/api/time`, { cache: "no-store" });
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">SSR (Server-Side Rendering)</h2>
      <p>Rendered on the server for each request (check View Source).</p>
      <p className="mt-3">Server time: <b>{data.now}</b></p>
    </section>
  );
}