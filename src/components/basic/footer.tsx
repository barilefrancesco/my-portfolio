import { Mail } from "lucide-react";
import GithubIcon from "../ui/icons/github";
import LinkedinIcon from "../ui/icons/linkedin";
import Link from "next/link";
import { JSX } from "react";
import { contactLinks } from "~/app/page";
import { Social } from "~/lib/types";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const icons: Record<Social, JSX.Element> = {
    [Social.Github]: <GithubIcon size={20} />,
    [Social.Linkedin]: <LinkedinIcon size={20} />,
    [Social.Email]: <Mail className="h-5 w-5" />,
  };

  return (
    <div className="flex w-full items-center justify-between p-4 text-white gap-4">
      <p className="text-left text-sm">
        © {currentYear} / Francesco Barile / Build with Next.js
      </p>
      <div className="flex gap-3">
        {contactLinks.map((contact) => {
          return (
            <Link
              key={"footer-social-" + Social[contact.type]}
              href={contact.href}
            >
              {icons[contact.type]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
