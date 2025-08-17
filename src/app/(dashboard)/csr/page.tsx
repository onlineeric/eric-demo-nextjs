'use client';
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [time, setTime] = useState<string>("loading...");
  useEffect(() => {
    fetch("/api/time").then(r => r.json()).then(d => setTime(d.now));
  }, []);
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">CSR (Client-Side Rendering)</h2>
      <p>Data is fetched in the browser after hydration—classic SPA behavior.</p>
      <p className="mt-3">Time from API: <b>{time}</b></p>
    </section>
  );
}