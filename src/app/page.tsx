import Link from "next/link";
import Menu from "~/components/header/Menu";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white text-sm">
      <Menu />
    </main>
  );
}
