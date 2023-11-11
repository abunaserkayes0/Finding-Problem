"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { DiBugsense } from "react-icons/di";
import classnames from "classnames";
const NavBar = () => {
  const currentPath = usePathname();
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Problems", href: "/problems" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/" className="text-5xl">
        <DiBugsense />
      </Link>
      <ul className="flex space-x-6">
        {link.map((link) => (
          <Link
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "text-zinc-500 hover:text-zinc-800 transition-colors": true,
            })}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
