'use client';

import { useState, useTransition } from "react";
import { toUpper } from "../actions";

export default function ActionForm() {
  const [result, setResult] = useState<string>("");
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        startTransition(async () => {
          const res = await toUpper(formData);
          setResult(res);
        });
      }}
      className="space-x-2"
    >
      <input name="text" placeholder="type here" className="px-2 py-1 border rounded" />
      <button className="px-3 py-1 border rounded" disabled={pending}>
        {pending ? "..." : "Uppercase"}
      </button>
      {result && <span className="ml-3">Result: <b>{result}</b></span>}
    </form>
  );
}