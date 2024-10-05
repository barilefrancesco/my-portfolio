import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./button";
import { Social } from "~/lib/types";

type ContactLinkProps = {
  type: Social;
  href: string;
};

export default function ContactLink({ type, href }: ContactLinkProps) {
  const icons = [];
  icons[Social.Github] = <Github className="h-5 w-5" />;
  icons[Social.Linkedin] = <Linkedin className="h-5 w-5" />;
  icons[Social.Email] = <Mail className="h-5 w-5" />;

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center rounded-xl border border-white/20 bg-[#0000004d] p-2 shadow-sm backdrop-blur-md hover:border-white/40 hover:bg-[#00000002] hover:text-white"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icons[type]}
        <span className="ml-2">{Social[type]}</span>
      </a>
    </Button>
  );
}
