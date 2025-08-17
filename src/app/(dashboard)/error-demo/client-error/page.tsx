'use client';

import { useEffect } from "react";

export default function ClientErrorPage() {
  useEffect(() => {
    // Intentionally throw an error to demonstrate client-side error handling
    setTimeout(() => {
      throw new Error("This is a simulated client-side error for demonstration purposes");
    }, 1000);
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Client Error Page</h2>
      <p>This page will throw a client-side error in 1 second...</p>
    </div>
  );
}