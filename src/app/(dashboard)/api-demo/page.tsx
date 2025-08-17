import { headers } from 'next/headers';

export default async function APIDemoPage() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? `${protocol}://${host}`;
  
  const res = await fetch(`${baseUrl}/api/time`, { cache: "no-store" });
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Route Handlers (API)</h2>
      <p>Built-in API inside the app directory.</p>
      <p className="mt-3">API time: <b>{data.now}</b></p>
    </section>
  );
}