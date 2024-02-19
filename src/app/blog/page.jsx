import PostCard from "@/components/post/PostCard";
// import { getPosts } from "@/lib/data";
import React from "react";

// USING API
async function getPosts() {
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:2000}});
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  const posts = res.json();
  return posts;
}
export default async function BlogPage() {

  const posts = await getPosts();
  // const posts =await getPosts()
 

  return (
    <div className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <div key={post.id} className="w-full md:w-[48%] lg:w-[30%] ">
          <PostCard post={post}/>
          
        </div>
      ))}
    </div>
  );
}
