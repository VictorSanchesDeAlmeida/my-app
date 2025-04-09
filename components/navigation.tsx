"use client";

import Link, { LinkProps } from "next/link";

type NavigationProps = {
  routes?: (LinkProps & { id: string; label: string })[];
};

function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="navbar ">
      <div className="navbar-start">Next.js</div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li className="menu-title">😜</li>
          {children}
        </ul>
      </div>
    </nav>
  );
}

export default function Navigation({
  routes = DEFAULT_LINKS,
}: NavigationProps) {
  if (!routes?.length) <Navbar />;

  return (
    <Navbar>
      <>
        {routes?.map((route) => (
          <li key={route.id} className="list-item">
            <Link {...route}>{route.label}</Link>
          </li>
        ))}
      </>
    </Navbar>
  );
}

const DEFAULT_LINKS: NavigationProps["routes"] = [
  {
    href: "/",
    id: "home",
    label: "Home Page",
  },
  {
    href: "/login",
    id: "login",
    label: "Login",
  },
  {
    href: "/about",
    id: "about",
    label: "About",
  },
];
