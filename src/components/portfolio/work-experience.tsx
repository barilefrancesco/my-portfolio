import { type WorkExperience } from "~/lib/types";

export function WorkExperienceList({
  WorkExperiences,
}: {
  WorkExperiences: WorkExperience[];
}) {
  return (
    <div className="flex flex-col gap-4 py-10">
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
    <div className="flex flex-col gap-4 py-5">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xl font-semibold tracking-[-0.01em]">
            {workExperience.company}
          </p>
          <p className="text-green-700">{workExperience.position}</p>
        </div>
        <div>
          <p>
            {workExperience.startDate} - {workExperience.endDate}
          </p>
        </div>
      </div>
    </div>
  );
}
