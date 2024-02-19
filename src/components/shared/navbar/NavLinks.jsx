"use client"
import { twMerge } from 'tailwind-merge'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavLinks({item}) {
 const pathName = usePathname()

    return (
    <Link href={item.path} className={twMerge(" min-w-24 p-2 rounded-2xl font-medium text-center", pathName === item.path && "bg-white text-slate-800")}>
    {item.title}
  </Link>
  )
}
