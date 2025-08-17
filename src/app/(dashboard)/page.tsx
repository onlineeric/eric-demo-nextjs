export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Welcome</h1>
      <p>This app teaches Next.js rendering models and platform features page by page:</p>
      <ul className="list-disc pl-5">
        <li>CSR / SSR / SSG / ISR</li>
        <li>Client-side navigation</li>
        <li>RSC (Server vs Client Components)</li>
        <li>Route Handlers (API)</li>
        <li>Server Actions</li>
        <li>Dynamic Routes</li>
        <li>Error Handling</li>
        <li>Middleware</li>
        <li>Image Optimization</li>
        <li>Environment Variables</li>
      </ul>
      <p>Use the sidebar to explore each topic. Inspect Network/HTML to observe differences.</p>
    </div>
  );
}