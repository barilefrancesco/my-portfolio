import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, listPost } from "~/lib/blog";
import { type PageProps } from "~/lib/utils";

// Serve pre-rendered pages from the CDN and refresh them hourly, instead of querying the database on every request
export const revalidate = 3600;

export const generateStaticParams = async () =>
  (await listPost({ category: "projects" })).map((post) => ({
    id: String(post.id),
  }));

const WorkPage = async ({ params }: PageProps) => {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const post = await getPost(parseInt(id));

  return (
    <div
      key={post.id}
      className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-10"
    >
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          // shortcut: covers have no stored dimensions, so 16:10 is assumed to reserve space; store real sizes with the post if ratios diverge
          width={800}
          height={500}
          sizes="(max-width: 672px) 100vw, 672px" // max-w-2xl container
          loading="eager" // above the fold: this is the LCP element
          fetchPriority="high"
          className="z-10 h-auto w-full rounded-lg"
        />
      )}
      <h2 className="text-4xl font-bold">{post.title}</h2>
      <div
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
};

export default WorkPage;
