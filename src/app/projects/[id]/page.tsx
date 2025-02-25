import { type NextPage } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost } from "~/lib/blog";

const WorkPage: NextPage<{ params: { id: string } }> = async ({ params }) => {
  // console.log(params);
  if (!params.id) {
    notFound();
  }

  const post = await getPost(parseInt(params.id));

  return (
    <div key={post.id} className="mx-auto max-w-2xl flex flex-col items-center justify-center gap-10">
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={0} // imposto a 0 perché viene gestita la larghezza con w-full
          height={600}
          sizes="100vw" // fa in modo che l'immagine occupi l'intera larghezza del contenitore
          className="z-10 w-full rounded-lg"
        />
      )}
      <h2 className="text-4xl font-bold">{post.title}</h2>
      <p className="text-lg">{post.content}</p>
    </div>
  );
};

export default WorkPage;
