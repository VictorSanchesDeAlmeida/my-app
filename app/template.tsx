import Navigation from "@/components/navigation";
import React from "react";

export default function RootTemplate({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="grid grid-cols-12 rows-span-12 gap-4">
        <header className="col-span-12 bg-base-100 p-4">
          <Navigation />
        </header>
        <div className="col-span-12 p-4">{children}</div>
      </div>
    </div>
  );
}
