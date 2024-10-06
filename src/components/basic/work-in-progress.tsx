import { ArrowDown, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function WorkInProgress() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-center text-4xl font-bold tracking-[-0.01em] md:text-6xl md:leading-[3rem]">
          {"This page is not ready yet!"}
        </h1>
        <p className="text-center text-2xl font-light md:text-3xl">
          {"If you want to collaborate, check out the project on GitHub!"}
        </p>
        <ArrowDown className="animate-bounce-y h-5 w-5" />
        <Link href={"https://github.com/barilefrancesco/my-portfolio"}>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center rounded-xl border border-white/20 bg-[#0000004d] p-2 shadow-sm backdrop-blur-md hover:border-white/40 hover:bg-[#00000002] hover:text-white"
          >
            <Github className="h-5 w-5" />
            <span className="ml-2">GitHub - My Portfolio</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
