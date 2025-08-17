'use client';
import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div className="flex items-center gap-2">
      <button className="px-2 border rounded" onClick={() => setN(n - 1)}>-</button>
      <span>{n}</span>
      <button className="px-2 border rounded" onClick={() => setN(n + 1)}>+</button>
    </div>
  );
}