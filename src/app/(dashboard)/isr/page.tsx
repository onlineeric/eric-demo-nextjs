// Revalidate in the background every 30 seconds
export const revalidate = 30;

export default async function ISRPage() {
  let data;
  let errorMessage = null;
  
  try {
    const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC", {
      signal: AbortSignal.timeout(5000) // 5 second timeout
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    data = await res.json();
  } catch (error) {
    console.error("Failed to fetch from WorldTimeAPI:", error);
    errorMessage = error instanceof Error ? error.message : "Unknown error";
    // Fallback to current time
    data = { datetime: new Date().toISOString() };
  }
  
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">ISR (Incremental Static Regeneration)</h2>
      <p>Static page that revalidates on a schedule.</p>
      <p className="mt-3">UTC now: <b>{data.datetime}</b></p>
      {errorMessage && (
        <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm">
          <p><strong>Note:</strong> External API unavailable, showing fallback time.</p>
          <p className="text-xs text-gray-600">Error: {errorMessage}</p>
        </div>
      )}
    </section>
  );
}