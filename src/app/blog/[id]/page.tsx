import { notFound } from "next/navigation";
import { getPost } from "~/lib/blog";
import { type PageProps } from "~/lib/utils";

const PostPage = async ({ params }: PageProps) => {
  const { id } = await params;
  
  if (!id) {
    notFound();
  }

  const post = await getPost(parseInt(id));

  return (
    <div
      key={post.id}
      className="mx-auto flex max-w-3xl flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold">{post.title}</h2>
      <p className="ml-auto py-2 text-sm">
        {post.updatedAt.toLocaleDateString("it-IT")}
      </p>
      <div
        className="py-10 text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
};

export default PostPage;