import PostAuthor from "@/components/post/PostAuthor";
// import { getPost } from "@/lib/data";
import Image from "next/image";
import React, { Suspense } from "react";

async function getPost(slug) {
  console.log(slug)
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
 
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  const post = res.json();
  return post;
}

export default async function SingleBlogPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  // const post = await getPost(slug)


  return (
    <section className=" flex gap-[100px]">
      { <div className=" hidden md:block flex-1 h-[calc(100vh-220px)] relative">
       {post.img &&  <Image
          src={post.img}
          fill
          className="object-cover"
        />}
      </div>}
      <div className="flex-[2] flex flex-col gap-12">
        <h1 className="text-6xl">{post.title}</h1>
        <div className="flex gap-3">
          {post.img && <Image
            src={post.img}
            width={50}
            height={50}
            className="object-cover rounded-[50%]"
          />}
          {/* <Suspense fallback={<div>Loading...</div>}>
            <PostAuthor id={post.id} />
          </Suspense> */}

          <div className="flex flex-col gap-3">
            <span className="font-bold text-gray-500">Published</span>
            <span className="font-medium">01.01.24</span>
          </div>
        </div>
        <div className="text-xl">{post.desc}</div>
      </div>
    </section>
  );
}
