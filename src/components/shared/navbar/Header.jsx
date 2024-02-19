import React from "react";
import Links from "./links";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex h-24 items-center justify-between">
      <Link href='/'>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
