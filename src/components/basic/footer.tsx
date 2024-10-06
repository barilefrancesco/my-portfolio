import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { contactLinks } from "~/app/page";
import { Social } from "~/lib/types";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const icons: Record<Social, JSX.Element> = {
    [Social.Github]: <Github className="h-5 w-5" />,
    [Social.Linkedin]: <Linkedin className="h-5 w-5" />,
    [Social.Email]: <Mail className="h-5 w-5" />,
  };

  return (
    <div className="flex w-full items-center justify-between p-4 text-white">
      <p className="text-center text-sm">
        © {currentYear} / Francesco Barile / Build with NextJS
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
