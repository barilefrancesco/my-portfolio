import { type Skill } from "~/lib/types";
import { SimpleBadge } from "../ui/simple-badge";

export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-col gap-4 pb-5">
      <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
        Technical skills
      </h2>
      <div className="flex gap-2 text-sm">
        <div className="flex items-center gap-1 text-sm">
          <span className="mr-2 text-3xl leading-none text-purple-400">•</span>
          <p>Highly specialised</p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="mr-2 text-3xl leading-none text-teal-400">•</span>
          <p>Advenced</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Skill key={"skill-" + skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }: { skill: Skill }) {
  const colorHighlySpecialised = "text-purple-400 border-purple-400";
  const colorAdvanced = "text-teal-400 border-teal-400";

  return (
    <SimpleBadge
      className={`w-fit ${skill.level === "Highly specialised" ? colorHighlySpecialised : colorAdvanced}`}
    >
      {skill.name}
    </SimpleBadge>
  );
}
