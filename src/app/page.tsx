import Image from "next/image";
import { WorkExperienceList } from "~/components/portfolio/work-experience";
import { Social, type WorkExperience } from "~/lib/types";
import { Hi } from "~/components/portfolio/hi";
import { ContactLinks } from "~/components/portfolio/contact-link";
import { SpokenLanguages } from "~/components/portfolio/spoken-languages";
import { WhereIComeFrom } from "~/components/portfolio/where-i-come-from";

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
  const workExperiences: WorkExperience[] = [
    {
      company: "AMT Services",
      position: "Fullstack Developer",
      location: "Bari, Apulia, IT",
      startDate: "2021",
      endDate: "Present",
      experiences: [
        {
          description: `
          Developed a booking engine for accommodations and experiences in Praia a Mare (CS)
            o Designed and implemented the booking system's architecture, including user interface design with React and backend services using NodeJS.
            o Integrated third-party APIs for real-time availability and pricing.
            o Implemented secure payment gateways and user authentication systems to ensure data protection and seamless transactions        
          `,
        },
        {
          description: `
          Developed a SaaS solution for creating showcase websites
            o Architected a multi-tenant system to allow different users to create and manage their own websites.
            o Utilized NextJS for server-side rendering and React for a dynamic, responsive user interface.
            o Integrated customizable templates and a drag-and-drop page builder to enhance user experience and flexibility.
          `,
        },
        {
          description: `
          Developed a Flutter app for home automation and smart home management
            o Created a cross-platform mobile app using Flutter, enabling users to control smart home devices such as lights, thermostats, and security systems.
            o Focused on a user-friendly interface with intuitive navigation and control panels.          
          `,
        },
        {
          description: `
          Developed a SaaS web application for online booking management
            o Built a full-stack solution using PHP and WordPress.
            o Implemented features such as reservation management, calendar integration, and automated email and SMS notifications.
          `,
        },
        {
          description: `
          Developed an e-commerce solution using NextJS and MedusaJS
            o Leveraged the headless architecture of MedusaJS for flexible backend management and NextJS for fast, SEO-friendly front-end rendering.
            o Implemented a comprehensive product catalog, inventory management, and dynamic pricing models.
            o Focused on a modular design approach, allowing for easy feature updates and scaling.          
          `,
        },
        {
          description: `
          Developed an e-commerce platform with WordPress and WooCommerce
            o Customized WooCommerce plugins and themes to cater to specific business requirements
            o Implemented payment gateway integrations, including PayPal and Stripe, to provide multiple payment options.
            o Enhanced SEO and site performance to improve user engagement and sales conversions.
          `,
        },
      ],
    },
    {
      company: "Be20 Innovation",
      position: "Web Developer",
      location: "Bari, Apulia, IT",
      startDate: "2016",
      endDate: "2018",
      experiences: [
        {
          description: (
            <p>
              Developed a pediatric anamnesis booking management software,
              handling the software analysis, database design, and
              front-end/back-end development.
            </p>
          ),
        },
        {
          description: (
            <p>
              Created a shift management system for pharmacies in the city of
              Bitonto, including requirement analysis, implementation, and
              deployment.
            </p>
          ),
        },
        {
          description: (
            <p>
              Built and customized several websites using WordPress, focusing on
              both theme and plugin development to enhance functionality and
              user experience.
            </p>
          ),
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-20 md:flex-row md:items-start">
      <LeftSection
        name={name}
        whereIComeFrom={whereIComeFrom}
        languages={languages}
      />
      <RightSection
        name={name}
        role={role}
        contactLinks={contactLinks}
        workExperiences={workExperiences}
      />
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

function RightSection({
  name,
  role,
  contactLinks,
  workExperiences,
}: {
  name: string;
  role: string;
  contactLinks: { type: Social; href: string }[];
  workExperiences: WorkExperience[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <Hi name={name} role={role} />
      <ContactLinks contactLinks={contactLinks} />
      <WorkExperienceList WorkExperiences={workExperiences} />
    </div>
  );
}
