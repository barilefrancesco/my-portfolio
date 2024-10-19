import { type NextPage } from "next";
import { listPost } from "~/lib/blog";

const WorksPage: NextPage = async () => {
  const posts = await listPost({
    category: "work",
  });

  console.log(posts);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.categories.map((c) => c.category.name).join(", ")}</p>
        </div>
      ))}
    </>
  );
};

export default WorksPage;
