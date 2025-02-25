import { type Skill, type Skills } from "~/lib/types";
import { SimpleBadge } from "../ui/simple-badge";
import { cn } from "~/lib/utils";

export function Skills({ skills }: { skills: Skills }) {
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
          <span className="mr-2 text-3xl leading-none text-sky-400">•</span>
          <p>Advanced</p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="mr-2 text-3xl leading-none text-teal-400">•</span>
          <p>Intermediate</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {Object.entries(skills).map(([type, skills]) => (
          <div key={type}>
            <h2 className="mb-2 text-sm">{type}</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Skill key={"skill-" + skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skill({ skill }: { skill: Skill }) {
  const colorHighlySpecialised = "text-purple-400";
  const colorAdvanced = "text-sky-400";
  const colorIntermediate = "text-teal-400";

  return (
    <SimpleBadge
      className={cn(
        "w-fit",
        skill.level === "Highly specialised" && colorHighlySpecialised,
        skill.level === "Advenced" && colorAdvanced,
        skill.level === "Intermediate" && colorIntermediate,
      )}
    >
      {skill.name}
    </SimpleBadge>
  );
}
