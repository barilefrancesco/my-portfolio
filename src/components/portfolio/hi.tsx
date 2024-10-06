import { FadeText } from "../ui/fade-text";
import { WordPullUp } from "../ui/word-pull-up";

export function Hi({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <WordPullUp
        className="text-left text-4xl font-bold tracking-[-0.01em] md:text-6xl md:leading-[3rem]"
        words={name}
      />
      <FadeText
        className="text-center text-2xl font-light md:text-3xl"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.4 } },
        }}
        text={role}
      />
    </div>
  );
}
