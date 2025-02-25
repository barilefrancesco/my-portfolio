import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { listPost } from "~/lib/blog";

const WorksPage: NextPage = async () => {
  const posts = await listPost({
    category: "projects",
  });

  // console.log(posts);

  return (
    <div className="mx-auto grid w-fit grid-cols-1 gap-8 sm:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/projects/${post.id}`}
          className="fade-in-bottom mx-auto flex flex-col items-start justify-between gap-1 md:w-[340px]"
        >
          <div className="relative h-[220px] w-full overflow-hidden rounded-lg md:w-[340px]">
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className="z-10 rounded-lg"
              />
            )}
          </div>
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.subtitle}</p>
        </Link>
      ))}
    </div>
  );
};

export default WorksPage;
