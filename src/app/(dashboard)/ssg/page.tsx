// Fully static at build time
export const dynamic = "force-static";

export default async function SSGPage() {
  let data;
  let errorMessage = null;
  
  try {
    const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC", { 
      cache: "force-cache",
      signal: AbortSignal.timeout(5000) // 5 second timeout
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    data = await res.json();
  } catch (error) {
    console.error("Failed to fetch from WorldTimeAPI:", error);
    errorMessage = error instanceof Error ? error.message : "Unknown error";
    // Fallback to build time
    data = { datetime: new Date().toISOString() };
  }
  
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">SSG (Static Site Generation)</h2>
      <p>Built once at build time. Rebuild to update content.</p>
      <p className="mt-3">UTC at build: <b>{data.datetime}</b></p>
      {errorMessage && (
        <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm">
          <p><strong>Note:</strong> External API unavailable, showing fallback time.</p>
          <p className="text-xs text-gray-600">Error: {errorMessage}</p>
        </div>
      )}
    </section>
  );
}