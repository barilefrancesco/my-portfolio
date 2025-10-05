import Image from "next/image";
import { type Experience } from "~/lib/types";

export function ExperienceList({
  title,
  Experiences,
}: {
  title: string;
  Experiences: Experience[];
}) {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-12">
        {title}
      </h2>
      {Experiences.map((experience, index) => (
        <Experience key={experience.company + "-" + index} experience={experience} />
      ))}
    </div>
  );
}

function Experience({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-col gap-4 pb-5">
      <div className="flex items-baseline justify-between">
        {(experience.company ?? experience.position) && (
          <div>
            {experience.company && (
              <p className="text-xl font-semibold tracking-[-0.01em]">
                {experience.company}
              </p>
            )}
            {experience.position && (
              <p className="text-green-600">{experience.position}</p>
            )}
          </div>
        )}
        {experience.startDate && experience.endDate && (
          <div>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
        )}
      </div>
      <div>
        {experience.experiences.map((experience, index) => (
          <div
            key={"experience" + index}
            className="flex flex-col gap-2 pl-4"
          >
            <div className="text-md">{experience.description}</div>
            {experience.image && (
              <Image
                src={experience.image}
                alt={
                  typeof experience.description === "string"
                    ? experience.description
                    : "experience: " + index
                }
                width={200}
                height={200}
                className="rounded-full border-[0.5px] border-gray-800 shadow-xl"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
