import { addPost, deletePost } from "@/lib/action";
import React from "react";

export default function ServerAction() {
  return (
    <div>
      <form
        action={addPost}
        className="flex flex-col gap-10 "
      >
        <input
          type="text"
          placeholder="title"
          name="title"
          className=" placeholder:text-gray-200 text-stone-950 capitalize p-5 rounded-sm w-[70%] m-auto bg-gray-500 placeholder:text-sm text-lg"
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          className=" placeholder:text-gray-200 text-stone-950 capitalize p-5 rounded-sm w-[70%] m-auto bg-gray-500 placeholder:text-sm text-lg"
        />
        <input
          type="text"
          placeholder="slug"
          name="slug"
          className=" placeholder:text-gray-200 text-stone-950 capitalize p-5 rounded-sm w-[70%] m-auto bg-gray-500 placeholder:text-sm text-lg"
        />
        <input
          type="text"
          placeholder="userId"
          name="userId"
          className=" placeholder:text-gray-200 text-stone-950 capitalize p-5 rounded-sm w-[70%] m-auto bg-gray-500 placeholder:text-sm text-lg"
        />
        <input
          type="text"
          placeholder="img"
          name="img"
          className=" placeholder:text-gray-200 text-stone-950 capitalize p-5 rounded-sm w-[70%] m-auto bg-gray-500 placeholder:text-sm text-lg"
        />
        <button>Create</button>
      </form>

      <form
        action={deletePost}
        className="flex flex-col gap-10 "
      >
        <input
          type="text"
          placeholder="postId"
          name="id"
          className="hidden"
        />
      
        <button>Delete</button>
      </form>
    </div>
  );
}
