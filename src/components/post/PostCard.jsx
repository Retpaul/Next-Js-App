import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostCard({ post }) {

  return (
    <section className="flex flex-col gap-5 mb-5">
      <div className="flex">
        <div className="w-[90%] h-[400px] relative ">
         {post.img && <Image
            src={post.img}
            fill
            className="object-cover"
          />}
        </div>
        <span className="text-sm rotate-90 m-auto">01.24.24</span>
      </div>
      <div>
        <h1 className="text-base mb-5 w-[90%]">{post.title}</h1>
        <p className="font-light mb-5 w-[90%] text-gray-400 ">{post.desc}</p>
        <Link href={`/blog/${post.slug}`}className="underline">
          Read More
        </Link>
      </div>
    </section>
  );
}
