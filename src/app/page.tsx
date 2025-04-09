'use client';

import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Contar</button>
      <div className="p-4 bg-gray-700 rounded-lg max-w-2xl mx-auto">
        <p>{count}</p>
      </div>
    </>
  );
}
