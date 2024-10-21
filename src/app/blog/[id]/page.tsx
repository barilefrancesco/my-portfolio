import { type NextPage } from "next";
import { notFound } from "next/navigation";
import { getPost } from "~/lib/blog";

const PostPage: NextPage<{ params: { id: string } }> = async ({ params }) => {
  if (!params.id) {
    notFound();
  }

  const post = await getPost(parseInt(params.id));

  return (
    <div
      key={post.id}
      className="mx-auto flex max-w-3xl flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold">{post.title}</h2>
      <p className="ml-auto text-sm py-2">{post.updatedAt.toLocaleDateString()}</p>
      <p className="py-10 text-lg">{post.content}</p>
    </div>
  );
};

export default PostPage;
