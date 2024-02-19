"use client";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export default function Links() {
  const [open, setopen] = useState(false);

  const session = true;
  const isAdmin = true;
  return (
    <section>
      <div className="hidden md:flex items-center gap-[10px]">
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}

            <button className="p-2 font-bold bg-gray-300 text-gray-800">
              Logout
            </button>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
     <Image src='/menu.png' width={30} height={30} onClick={()=>setopen((prev) => !prev)} className="md:hidden"/>
      {open && (
        <div className="md:hidden absolute top-[100px] right-0 w-[50%] h-[calc(100vh-100px)] bg-[#0d0c22] flex flex-col items-center justify-center gap-3">
          {links.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
        </div>
      )}
    </section>
  );
}
