import Image from "next/image";
import { type WorkExperience } from "~/lib/types";

export function WorkExperienceList({
  WorkExperiences,
}: {
  WorkExperiences: WorkExperience[];
}) {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
        Work Experience
      </h2>
      {WorkExperiences.map((workExperience) => (
        <WorkExperience
          key={workExperience.company}
          workExperience={workExperience}
        />
      ))}
    </div>
  );
}

function WorkExperience({
  workExperience,
}: {
  workExperience: WorkExperience;
}) {
  return (
    <div className="flex flex-col gap-4 pb-5">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xl font-semibold tracking-[-0.01em]">
            {workExperience.company}
          </p>
          <p className="text-green-600">{workExperience.position}</p>
        </div>
        <div>
          <p>
            {workExperience.startDate} - {workExperience.endDate}
          </p>
        </div>
      </div>
      <div>
        {workExperience.experiences.map((experience, index) => (
          <div
            key={"experience" + index}
            className="flex flex-col gap-2 pl-[1rem]"
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
