"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="card min-w-80 bg-base-300">
      <div className="card-body">
        <div className="card-actions">
          <div className="btn-group btn-group-vertical p-4 flex flex-row gap-4">
            <button
              className="btn btn-neutral text-black"
              onClick={handleClick}
            >
              Contar
            </button>
            <span className="font-bold text-5xl">{count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
