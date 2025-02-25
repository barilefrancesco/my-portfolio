import { type Study } from "~/lib/types";

export function StudiesList({ studies }: { studies: Study[] }) {
  return (
    <div className="flex flex-col gap-4 pb-20">
      <h2 className="text-left text-3xl font-bold tracking-[-0.01em] md:text-5xl md:leading-[3rem]">
        Education
      </h2>
      {studies.map((study) => (
        <Study key={"study-" + study.what} study={study} />
      ))}
    </div>
  );
}

function Study({ study }: { study: Study }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xl font-semibold tracking-[-0.01em]">
            {study.where}
          </p>
          <p className="text-md text-green-600">{study.what}</p>
        </div>
        <div>
          <p>{study.endDate}</p>
        </div>
      </div>
    </div>
  );
}
