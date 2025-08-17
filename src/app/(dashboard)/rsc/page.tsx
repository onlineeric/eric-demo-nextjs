import { Suspense } from "react";
import Counter from "./ui/Counter";

// Sequential data fetching (waterfall - avoid this pattern)
async function getSequentialData() {
  console.log('🔄 Fetching user...');
  const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1", { cache: "no-store" });
  const user = await userRes.json();
  
  console.log('🔄 Fetching user posts...');
  const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, { cache: "no-store" });
  const posts = await postsRes.json();
  
  return { user, posts: posts.slice(0, 3) };
}

// Parallel data fetching (recommended)
async function getParallelData() {
  console.log('🚀 Fetching data in parallel...');
  const [userRes, todosRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1", { cache: "no-store" }),
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1", { cache: "no-store" })
  ]);
  
  const [user, todos] = await Promise.all([
    userRes.json(),
    todosRes.json()
  ]);
  
  return { user, todos: todos.slice(0, 3) };
}

function SequentialDataDemo() {
  return (
    <Suspense fallback={<div className="p-3 bg-red-50 rounded">Loading sequential data...</div>}>
      <SequentialContent />
    </Suspense>
  );
}

function ParallelDataDemo() {
  return (
    <Suspense fallback={<div className="p-3 bg-green-50 rounded">Loading parallel data...</div>}>
      <ParallelContent />
    </Suspense>
  );
}

async function SequentialContent() {
  const startTime = Date.now();
  const data = await getSequentialData();
  const endTime = Date.now();
  
  return (
    <div className="border border-red-200 p-3 rounded">
      <h4 className="font-medium text-red-700 mb-2">Sequential (Waterfall) - Slower ❌</h4>
      <p className="text-sm text-red-600 mb-2">Time: ~{endTime - startTime}ms</p>
      <div className="text-sm">
        <p><strong>User:</strong> {data.user.name}</p>
        <p><strong>Posts:</strong> {data.posts.length} items</p>
      </div>
    </div>
  );
}

async function ParallelContent() {
  const startTime = Date.now();
  const data = await getParallelData();
  const endTime = Date.now();
  
  return (
    <div className="border border-green-200 p-3 rounded">
      <h4 className="font-medium text-green-700 mb-2">Parallel - Faster ✅</h4>
      <p className="text-sm text-green-600 mb-2">Time: ~{endTime - startTime}ms</p>
      <div className="text-sm">
        <p><strong>User:</strong> {data.user.name}</p>
        <p><strong>Todos:</strong> {data.todos.length} items</p>
      </div>
    </div>
  );
}

export default async function RSCPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">RSC (Server vs Client Components)</h2>
        <p>Server Components run on the server and can fetch data directly. Client Components add interactivity.</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Data Fetching Patterns:</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <SequentialDataDemo />
          <ParallelDataDemo />
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-3 rounded text-sm">
          <p><strong>Key Difference:</strong></p>
          <p>Sequential fetching creates a waterfall (each request waits for the previous). 
          Parallel fetching with Promise.all() starts all requests simultaneously.</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Client Component Demo:</h3>
        <div className="border p-3 rounded">
          <Counter />
          <p className="text-sm text-gray-600 mt-2">
            This counter runs on the client and maintains state across re-renders.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
        <h3 className="font-medium mb-2">Best Practices:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Use Server Components for data fetching and static content</li>
          <li>Use Client Components for interactivity and browser APIs</li>
          <li>Fetch data in parallel when possible with Promise.all()</li>
          <li>Use Suspense to show loading states for async operations</li>
        </ul>
      </div>
    </section>
  );
}