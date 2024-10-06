import { type Social } from "~/lib/types";
import ContactLink from "../ui/contact-link";

export function ContactLinks({
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
