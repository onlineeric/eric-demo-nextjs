'use client';

export default function RefreshButton() {
  return (
    <a 
      href="/middleware-demo" 
      className="text-blue-600 underline"
      onClick={(e) => {
        e.preventDefault();
        // Refresh the page to see new timestamp
        window.location.reload();
      }}
    >
      Refresh to see new timestamp
    </a>
  );
}