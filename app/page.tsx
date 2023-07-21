import { Post } from "@prisma/client";
import { prisma } from "./db";
import Link from "next/link";

export default async function Home() {
  const posts: Post[] = await prisma.post.findMany();

  return (
    <main className="page">
      <Link href="/create">Create</Link>
      <div className="feed">
        {posts.map((post) => (
          <div key={post.id} className="frame">
            <iframe srcDoc={post.content || ""} />
          </div>
        ))}
      </div>
    </main>
  );
}
