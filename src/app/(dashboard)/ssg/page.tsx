// Fully static at build time
export const dynamic = "force-static";

export default async function SSGPage() {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC", { cache: "force-cache" });
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">SSG (Static Site Generation)</h2>
      <p>Built once at build time. Rebuild to update content.</p>
      <p className="mt-3">UTC at build: <b>{data.datetime}</b></p>
    </section>
  );
}