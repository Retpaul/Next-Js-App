import { getUser } from "@/lib/data";
import React from "react";
// USING API
// async function getUser(id) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     if (!res.ok) {
//       throw new Error("Something went Wrong");
//     }
//     const user = res.json();
//     return user;
//   }
export default async function PostAuthor({id}) {
// const user = await getUser(id)
const user = await getUser(id)
  return (
    <div className="flex flex-col gap-3">
      <span className="font-bold text-gray-500">Author</span>
      <span className="font-medium">{user.username}</span>
    </div>
  );
}
