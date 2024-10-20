import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { listPost } from "~/lib/blog";

const WorksPage: NextPage = async () => {
  const posts = await listPost({
    category: "work",
  });

  console.log(posts);

  return (
    <div className="mx-auto grid w-fit grid-cols-1 gap-10 sm:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/work/${post.id}`}
          className="fade-in-bottom mx-auto flex w-[300px] flex-col items-center justify-between gap-2"
        >
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              width={300}
              height={300}
              className="z-10 rounded-lg"
            />
          )}
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.subtitle}</p>
        </Link>
      ))}
    </div>
  );
};

export default WorksPage;
