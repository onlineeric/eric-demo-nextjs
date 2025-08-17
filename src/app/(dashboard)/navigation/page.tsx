'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavPage() {
  const router = useRouter();
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Client-side Navigation</h2>
      <div className="space-x-3">
        <Link href="/ssr" className="underline">Go to SSR</Link>
        <button className="px-3 py-1 border rounded" onClick={() => router.push("/csr")}>
          Go to CSR
        </button>
      </div>
      <p>Page transitions happen without full reloads.</p>
    </section>
  );
}