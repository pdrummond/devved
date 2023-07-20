//TODO: What aren't console logs going to Chrome?
import { Post } from "@prisma/client";
import { prisma } from "./db";

export default async function Home() {
  const posts: Post[] = await prisma.post.findMany();

  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </main>
  );
}
