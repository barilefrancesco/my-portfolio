import { SimpleBadge } from "../ui/simple-badge";

export function SpokenLanguages({ languages }: { languages: string[] }) {
  return (
    <div className="flex max-w-[12rem] flex-wrap gap-2">
      {languages.map((language) => (
        <SimpleBadge key={language}>{language}</SimpleBadge>
      ))}
    </div>
  );
}
