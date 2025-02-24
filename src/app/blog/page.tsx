import { type NextPage } from "next";
import Link from "next/link";
import { listPost } from "~/lib/blog";

const BlogPage: NextPage = async () => {
  const posts = await listPost({
    category: "blog",
  });

  console.log(posts);

  return (
    <div className="mx-auto grid w-fit grid-cols-1">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.id}`}
          className="fade-in-bottom mx-auto flex w-full flex-col items-center justify-between md:w-[600px]"
        >
          <p className="ml-auto">
            {post.updatedAt.toLocaleDateString("it-IT")}
          </p>
          <h2 className="mr-auto text-lg font-semibold">{post.title}</h2>
          {post.subtitle && (
            <h5 className="mr-auto text-sm font-normal">{post.subtitle}</h5>
          )}
          <hr className="my-3 h-[2px] w-full border-none bg-white/60" />
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
