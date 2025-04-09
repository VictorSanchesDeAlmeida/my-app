import "./globals.css";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode
}

export default function RootLayout({children}:LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="flex gap-5">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
