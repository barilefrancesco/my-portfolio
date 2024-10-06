import { Earth } from "lucide-react";

export function WhereIComeFrom({ where }: { where: string }) {
  return (
    <div className="flex items-center gap-2">
      <Earth
        className="text-2xl text-green-700"
        fill="rgba(21, 128, 61, 0.4)"
      />
      <p>{where}</p>
    </div>
  );
}
