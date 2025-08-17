// Revalidate in the background every 30 seconds
export const revalidate = 30;

export default async function ISRPage() {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC");
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">ISR (Incremental Static Regeneration)</h2>
      <p>Static page that revalidates on a schedule.</p>
      <p className="mt-3">UTC now: <b>{data.datetime}</b></p>
    </section>
  );
}