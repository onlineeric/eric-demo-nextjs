import { headers } from 'next/headers';

// Server-only environment variables
const serverEnvVar = process.env.SECRET_KEY || 'not-set';
const nodeEnv = process.env.NODE_ENV;

// Public environment variables (accessible on client)
const publicApiUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function EnvVarsPage() {
  const headersList = await headers();
  const host = headersList.get('host');

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Environment Variables</h2>
        <p>
          Next.js supports both server-only and client-accessible environment variables.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Server-Only Variables:</h3>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded">
          <div className="space-y-2 text-sm">
            <p><strong>NODE_ENV:</strong> <code className="bg-white px-1 rounded">{nodeEnv}</code></p>
            <p><strong>SECRET_KEY:</strong> <code className="bg-white px-1 rounded">{serverEnvVar}</code></p>
            <p><strong>Host Header:</strong> <code className="bg-white px-1 rounded">{host}</code></p>
          </div>
          <p className="text-xs text-blue-700 mt-3">
            ℹ️ These variables are only available on the server and won't be included in the client bundle.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Public Variables (Client + Server):</h3>
        <div className="bg-green-50 border border-green-200 p-4 rounded">
          <div className="space-y-2 text-sm">
            <p><strong>NEXT_PUBLIC_BASE_URL:</strong> <code className="bg-white px-1 rounded">{publicApiUrl || 'not-set'}</code></p>
          </div>
          <p className="text-xs text-green-700 mt-3">
            ℹ️ Variables prefixed with NEXT_PUBLIC_ are accessible on both server and client.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Client-Side Access Demo:</h3>
        <ClientEnvDemo />
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
        <h3 className="font-medium mb-2">Environment Variable Types:</h3>
        <div className="space-y-2 text-sm">
          <div>
            <p><strong>Server-only:</strong> <code>VARIABLE_NAME</code></p>
            <p className="text-gray-600">Only available in Server Components, API routes, and middleware</p>
          </div>
          <div>
            <p><strong>Public:</strong> <code>NEXT_PUBLIC_VARIABLE_NAME</code></p>
            <p className="text-gray-600">Available everywhere (server and client)</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 p-4 rounded">
        <h3 className="font-medium mb-2">Security Notes:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Never put secrets in NEXT_PUBLIC_ variables (they're visible to users)</li>
          <li>Use server-only variables for API keys, database URLs, etc.</li>
          <li>Public variables are embedded in the client JavaScript bundle</li>
          <li>Environment variables are read at build time, not runtime</li>
        </ul>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-4 rounded">
        <h3 className="font-medium mb-2">Configuration Files:</h3>
        <div className="space-y-1 text-sm">
          <p><strong>.env.local</strong> - Local development (ignored by git)</p>
          <p><strong>.env.development</strong> - Development environment</p>
          <p><strong>.env.production</strong> - Production environment</p>
          <p><strong>.env</strong> - Default fallback for all environments</p>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          Load priority: .env.local → .env.development → .env
        </p>
      </div>
    </section>
  );
}

function ClientEnvDemo() {
  return (
    <div className="border p-4 rounded">
      <ClientEnvComponent />
    </div>
  );
}

// This would be a separate component file in a real app
function ClientEnvComponent() {
  // This component would be marked with 'use client' in a real scenario
  // For now, we'll simulate what the client would see
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Client Component Access:</p>
      <div className="bg-gray-100 p-2 rounded text-xs">
        <p>// In a 'use client' component:</p>
        <p>const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;</p>
        <p>const secret = process.env.SECRET_KEY; // ❌ undefined on client</p>
      </div>
      <p className="text-xs text-gray-600">
        Client components can only access NEXT_PUBLIC_ variables.
      </p>
    </div>
  );
}