import Image from "next/image";
import { WorkExperienceList } from "~/components/portfolio/work-experience";
import {
  type Skill,
  Social,
  type Study,
  type WorkExperience,
} from "~/lib/types";
import { Hi } from "~/components/portfolio/hi";
import { ContactLinks } from "~/components/portfolio/contact-link";
import { SpokenLanguages } from "~/components/portfolio/spoken-languages";
import { WhereIComeFrom } from "~/components/portfolio/where-i-come-from";
import { StudiesList } from "~/components/portfolio/studies";
import { Skills } from "~/components/portfolio/skills";

export default function HomePage() {
  const name = "Francesco Barile";
  const letIntroduceMe = `
    Graduated in Computer Science and Cyber Security, with a focus on web development, accumulating
    over 4 years of experience in Full-Stack development with PHP, Wordpress, HTML, CSS, Javascript,
    NodeJS, Typescript and NextJS. I have led, developed and launched several applications, including an
    e-commerce and a Hotel and Experience booking app, currently used by thousands of customers worldwide.  
  `;
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
          description: (
            <>
              <p>
                Developed a booking engine for accommodations and experiences in
                Praia a Mare (CS)
              </p>
              <ul>
                <li>
                  {`Designed and implemented the booking system's architecture,
                  including user interface design with React and backend
                  services using NodeJS.`}
                </li>
                <li>
                  Integrated third-party APIs for real-time availability and
                  pricing.
                </li>
                <li>
                  Implemented secure payment gateways and user authentication
                  systems to ensure data protection and seamless transactions
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>Developed a SaaS solution for creating showcase websites</p>
              <ul>
                <li>
                  Architected a multi-tenant system to allow different users to
                  create and manage their own websites.
                </li>
                <li>
                  Utilized NextJS for server-side rendering and React for a
                  dynamic, responsive user interface.
                </li>
                <li>
                  Integrated customizable templates and a drag-and-drop page
                  builder to enhance user experience and flexibility.
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>
                Developed a Flutter app for home automation and smart home
                management
              </p>
              <ul>
                <li>
                  Created a cross-platform mobile app using Flutter, enabling
                  users to control smart home devices such as lights,
                  thermostats, and security systems.
                </li>
                <li>
                  Focused on a user-friendly interface with intuitive navigation
                  and control panels.
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>
                Developed a SaaS web application for online booking management
              </p>
              <ul>
                <li>Built a full-stack solution using PHP and WordPress.</li>
                <li>
                  Implemented features such as reservation management, calendar
                  integration, and automated email and SMS notifications.
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>Developed an e-commerce solution using NextJS and MedusaJS</p>
              <ul>
                <li>
                  Leveraged the headless architecture of MedusaJS for flexible
                  backend management and NextJS for fast, SEO-friendly front-end
                  rendering.
                </li>
                <li>
                  Implemented a comprehensive product catalog, inventory
                  management, and dynamic pricing models.
                </li>
                <li>
                  Focused on a modular design approach, allowing for easy
                  feature updates and scaling.
                </li>
                <li>
                  Developed a modular design approach, allowing for easy feature
                  updates and scaling.
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>
                Developed an e-commerce platform with WordPress and WooCommerce
              </p>
              <ul>
                <li>
                  Customized WooCommerce plugins and themes to cater to specific
                  business requirements
                </li>
                <li>
                  Implemented payment gateway integrations, including PayPal and
                  Stripe, to provide multiple payment options.
                </li>
                <li>
                  Enhanced SEO and site performance to improve user engagement
                  and sales conversions.
                </li>
              </ul>
            </>
          ),
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
            <ul>
              <li>
                Developed a pediatric anamnesis booking management software,
                handling the software analysis, database design, and
                front-end/back-end development.
              </li>
              <li>
                Created a shift management system for pharmacies in the city of
                Bitonto, including requirement analysis, implementation, and
                deployment.
              </li>
              <li>
                Built and customized several websites using WordPress, focusing
                on both theme and plugin development to enhance functionality
                and user experience.
              </li>
            </ul>
          ),
        },
      ],
    },
  ];
  const studies: Study[] = [
    {
      where: "University of Bari Aldo Moro",
      what: "Master’s Degree in Cybersecurity",
      endDate: "2024",
    },
    {
      where: "University of Bari Aldo Moro",
      what: "Bachelor’s degree in Computer Science",
      endDate: "2021",
    },
    {
      where: "ITIS Alessando Volta, Bitonto",
      what: "Secondary school diploma",
      endDate: "2017",
    },
  ];

  const skills: Skill[] = [
    { name: "NodeJS", level: "Highly specialised" },
    { name: "React", level: "Highly specialised" },
    { name: "NextJS", level: "Highly specialised" },
    { name: "Typescript", level: "Highly specialised" },
    { name: "Javascript", level: "Highly specialised" },
    { name: "CSS", level: "Highly specialised" },
    { name: "HTML", level: "Highly specialised" },
    { name: "PHP", level: "Highly specialised" },
    { name: "ORM: Prisma", level: "Highly specialised" },
    { name: "DB: PostgreSQL", level: "Highly specialised" },
    { name: "MySQL", level: "Highly specialised" },
    { name: "Wordpress and plug-in development", level: "Highly specialised" },

    { name: "Django", level: "Advenced" },
    { name: "Flask", level: "Advenced" },
    { name: "Python", level: "Advenced" },
    { name: "Kubernetes", level: "Advenced" },
    { name: "Docker", level: "Advenced" },
    { name: "Mobile: Flutter", level: "Advenced" },
    { name: "Dart", level: "Advenced" },
    { name: "React-native", level: "Advenced" },
    { name: "Expo Go", level: "Advenced" },
    { name: "Linux: Ubuntu Server", level: "Advenced" },
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
        letIntroduceMe={letIntroduceMe}
        workExperiences={workExperiences}
        studies={studies}
        skills={skills}
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
        width={250}
        height={250}
        className="rounded-full border-[0.5px] border-gray-800 shadow-xl z-10"
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
  letIntroduceMe,
  workExperiences,
  studies,
  skills,
}: {
  name: string;
  role: string;
  contactLinks: { type: Social; href: string }[];
  letIntroduceMe: string;
  workExperiences: WorkExperience[];
  studies: Study[];
  skills: Skill[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <Hi name={name} role={role} />
      <ContactLinks contactLinks={contactLinks} />
      <p className="text-left text-lg">{letIntroduceMe}</p>
      <div className="flex flex-col py-6">
        <WorkExperienceList WorkExperiences={workExperiences} />
        <StudiesList studies={studies} />
        <Skills skills={skills} />
      </div>
    </div>
  );
}
