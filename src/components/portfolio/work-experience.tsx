import { type WorkExperience } from "~/lib/types";

export function WorkExperienceList({
  WorkExperiences,
}: {
  WorkExperiences: WorkExperience[];
}) {
  return <div className="flex flex-col gap-4"></div>;
}

function WorkExperience(workExperience: WorkExperience) {
  return <div className="flex flex-col gap-4"></div>;
}
