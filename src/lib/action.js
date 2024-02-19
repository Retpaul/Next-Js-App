"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { signOut } from "./auth";

export const addPost = async (formData) => {
 

  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newPost = await Post.create({
      title,
      desc,
      slug,
      userId,
      img,
    });
    console.log("Saved to Database");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (formData) => {
 

  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete( id );
    console.log("Deleted Database");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export async function handleLogout() {
  "use server"
  await signOut()
}