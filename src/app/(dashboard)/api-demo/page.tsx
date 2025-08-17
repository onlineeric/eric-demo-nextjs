export default async function APIDemoPage() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const res = await fetch(`${base}/api/time`, { cache: "no-store" });
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Route Handlers (API)</h2>
      <p>Built-in API inside the app directory.</p>
      <p className="mt-3">API time: <b>{data.now}</b></p>
    </section>
  );
}