import { type NextPage } from "next";
import { WorkInProgress } from "~/components/basic/work-in-progress";
import { listPost } from "~/lib/blog";

const WorkPage: NextPage<{ params: { slug: string } }> = async ({ params }) => {
    const posts = await listPost({});

  console.log(posts);

  return (
    <>
      <WorkInProgress />
      okok
    </>
  );
};

export default WorkPage;
