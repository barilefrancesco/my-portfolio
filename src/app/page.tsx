import { Earth } from "lucide-react";
import Image from "next/image";
import ContactLink from "~/components/ui/contact-link";
import { FadeText } from "~/components/ui/fade-text";
import { SimpleBadge } from "~/components/ui/simple-badge";
import { WordPullUp } from "~/components/ui/word-pull-up";
import { Social } from "~/lib/types";

export default function HomePage() {
  const name = "Francesco Barile";
  const whereIComeFrom = "Europe/Bari";
  const languages = ["English", "Italiano"];
  const role = "Fullstack Developer";
  const contactLinks = [
    { type: Social.Github, href: "https://github.com/barilefrancesco" },
    {
      type: Social.Linkedin,
      href: "https://www.linkedin.com/in/francesco-barile-a71882158/",
    },
    { type: Social.Email, href: "mailto:f.barile98@gmail.com" },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-20 md:flex-row md:items-start">
      <LeftSection
        name={name}
        whereIComeFrom={whereIComeFrom}
        languages={languages}
      />
      <RightSection name={name} role={role} contactLinks={contactLinks} />
    </section>
  );
}

function LeftSection({
  name,
  whereIComeFrom,
  languages,
}: {
  name: string;
  whereIComeFrom: string;
  languages: string[];
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Image
        src="/profile-pic.webp"
        alt={name}
        width={200}
        height={200}
        className="rounded-full border-[0.5px] border-gray-800 shadow-xl"
      />
      <WhereIComeFrom where={whereIComeFrom} />
      <SpokenLanguages languages={languages} />
    </div>
  );
}

function WhereIComeFrom({ where }: { where: string }) {
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

function SpokenLanguages({ languages }: { languages: string[] }) {
  return (
    <div className="flex max-w-[12rem] flex-wrap gap-2">
      {languages.map((language) => (
        <SimpleBadge key={language}>{language}</SimpleBadge>
      ))}
    </div>
  );
}

function RightSection({
  name,
  role,
  contactLinks,
}: {
  name: string;
  role: string;
  contactLinks: { type: Social; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <Hi name={name} role={role} />
      <ContactLinks contactLinks={contactLinks} />
    </div>
  );
}

function Hi({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col items-center justify-start gap-2 md:items-start">
      <WordPullUp
        className="text-left text-4xl font-bold tracking-[-0.01em] md:text-6xl md:leading-[3rem]"
        words={name}
      />
      <FadeText
        className="text-center text-2xl font-light md:text-3xl"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.4 } },
        }}
        text={role}
      />
    </div>
  );
}

function ContactLinks({
  contactLinks,
}: {
  contactLinks: {
    type: Social;
    href: string;
  }[];
}) {
  return (
    <div className="flex gap-2">
      {contactLinks.map((contactLink) => (
        <ContactLink
          key={contactLink.type}
          type={contactLink.type}
          href={contactLink.href}
        />
      ))}
    </div>
  );
}
