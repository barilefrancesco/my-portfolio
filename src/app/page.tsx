import Image from "next/image";
import { ExperienceList } from "~/components/portfolio/experience";
import { type Skills, Social, type Study, type Experience } from "~/lib/types";
import { Hi } from "~/components/portfolio/hi";
import { ContactLinks } from "~/components/portfolio/contact-link";
import { SpokenLanguages } from "~/components/portfolio/spoken-languages";
import { WhereIComeFrom } from "~/components/portfolio/where-i-come-from";
import { StudiesList } from "~/components/portfolio/studies";
import { Skills as SkillsComponent } from "~/components/portfolio/skills";
import Link from "next/link";

export const contactLinks = [
  { type: Social.Github, href: "https://github.com/barilefrancesco" },
  {
    type: Social.Linkedin,
    href: "https://www.linkedin.com/in/francesco-barile-a71882158/",
  },
  { type: Social.Email, href: "mailto:francescobarile@proton.me" },
];

export default function HomePage() {
  const name = "Francesco Barile";
  const letIntroduceMe = `
    Graduate in Computer Science and Cyber Security, with a focus on web
    development, accumulating over 4 years of experience in Full-Stack development
    with NextJS, Typescript, NodeJS, Javascript, PHP, HTML, CSS and Wordpress. I have
    led, developed and launched several applications, including an e-commerce and a
    Hotel and Experience booking app, currently used by thousands of customers
    worldwide.
  `;
  const whereIComeFrom = "Europe/Bari";
  const languages = ["English", "Italiano"];
  const role = "Fullstack Developer";

  const professionalExperiences: Experience[] = [
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
                <span>
                  <Link
                    href="https://verzicaffe.it/"
                    target="_blank"
                    className="underline"
                  >
                    Verzì Caffè
                  </Link>
                </span>
                {": "}
                <span>Development of the E-commerce for Verzì Caffè</span>
              </p>
              <ul>
                <li>
                  {`The e-commerce frontend was developed using Next.js, ensuring a modern, responsive,
and highly performant user interface.`}
                </li>
                <li>
                  For the backend, WooCommerce was chosen to manage all the
                  typical e-commerce functionalities.
                </li>
                <li>
                  To optimize the interaction between the frontend and backend,
                  I developed a custom WooCommerce plugin that enables an
                  efficient and reliable integration between the two platforms.
                  This has improved data management and provided users with a
                  seamless shopping experience.
                </li>
                <li>
                  A fundamental aspect of the project was SEO, meticulously
                  handled to ensure excellent indexing on search engines.
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>
                <span>
                  <Link
                    href="https://www.praiadeiborghi.it/"
                    target="_blank"
                    className="underline"
                  >
                    Praia dei Borghi
                  </Link>
                </span>
                {": "}
                <span>
                  Developed a booking engine for accommodations and experiences
                </span>
              </p>
              <ul>
                <li>
                  {`Designed a user-friendly booking interface that facilitated seamless navigation and
reduced user drop-off rates. Designed with React and backend services using NodeJS.`}
                </li>
                <li>
                  Integrated third-party APIs for real-time availability and
                  pricing.
                </li>
                <li>
                  Implemented secure payment gateways and user authentication
                  systems to ensure data protection and seamless transactions.
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>
                <span>
                  <Link
                    href="https://waasy.it/"
                    target="_blank"
                    className="underline"
                  >
                    Waasy
                  </Link>
                </span>
                {": "}
                <span>
                  Developed a SaaS solution for creating showcase websites
                </span>
              </p>
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
                · Developed a SaaS web application for online booking management
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
                  feature updates and scaling
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
                  business requirements.
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
                Hospital Federico II Napoli: Developed a pediatric anamnesis
                booking management software, handling the software analysis,
                database design, and front-end/back-end development mainly using
                Django and PostgreSQL.
              </li>
              <li>
                Created a shift management system for pharmacies in the city of
                Bitonto, including requirement analysis, implementation, and
                deployment. Developed with Python.
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

  const notableExperiences: Experience[] = [
    {
      experiences: [
        {
          description: (
            <>
              <p>AI Security Research Project</p>
              <ul>
                <li>
                  {`Implementation of federated learning systems for the diagnosis
                  of Parkinson's disease. With a focus on security`}
                </li>
                <li>Developed and analyzed various attack strategies</li>
                <li>
                  Created detection mechanisms for potential security breaches
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>Mobile Application Security Assessment</p>
              <ul>
                <li>
                  Conducted comprehensive security analysis using OWASP MASVS
                  and MASTG guidelines
                </li>
                <li>
                  Performed vulnerability assessment and provided remediation
                  recommendations
                </li>
                <li>
                  Created detailed security reports following industry standards
                </li>
                <li>
                  Tools used: AndroidTamer, Genymotion, ADB, ImmuniWeb, MOBFS,
                  Mara Framework
                </li>
              </ul>
            </>
          ),
        },
        {
          description: (
            <>
              <p>Key Management Service (Personal Project)</p>
              <ul>
                <li>
                  Developed secure API key management system using Python and
                  FastAPI
                </li>
                <li>
                  Implemented industry-standard encryption practices using
                  OpenSSL
                </li>
                <li>
                  Built with Docker containerization and secure environment
                  configuration
                </li>
                <li>
                  Created RESTful API endpoints with authentication and
                  authorization
                </li>
              </ul>
            </>
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

  const skills: Skills = {
    "Frontend Development": [
      {
        name: "NextJS",
        level: "Highly specialised",
      },
      {
        name: "React",
        level: "Highly specialised",
      },
      {
        name: "Typescript",
        level: "Highly specialised",
      },
      {
        name: "Javascript",
        level: "Highly specialised",
      },
      {
        name: "HTML",
        level: "Highly specialised",
      },
      {
        name: "CSS",
        level: "Highly specialised",
      },
      {
        name: "Tailwind CSS",
        level: "Highly specialised",
      },
      {
        name: "Chakra UI",
        level: "Highly specialised",
      },
    ],
    "Backend Development": [
      {
        name: "NodeJS",
        level: "Highly specialised",
      },
      {
        name: "PHP",
        level: "Highly specialised",
      },
      { name: "Python", level: "Advenced" },
      { name: "Django", level: "Advenced" },
      { name: "Flask", level: "Advenced" },
    ],
    "Databases & ORM": [
      {
        name: "Prisma",
        level: "Highly specialised",
      },
      {
        name: "PostgreSQL",
        level: "Highly specialised",
      },
      {
        name: "MySQL",
        level: "Highly specialised",
      },
    ],
    "CMS & E-commerce": [
      {
        name: "Wordpress and plug-in development",
        level: "Highly specialised",
      },
    ],
    "App Development": [
      {
        name: "React native",
        level: "Advenced",
      },
      { name: "Dart", level: "Advenced" },
      { name: "Expo Go", level: "Advenced" },
      { name: "Flutter", level: "Advenced" },
    ],
    "DevOps & Infrastructure": [
      {
        name: "Docker",
        level: "Advenced",
      },
      {
        name: "Kubernetes",
        level: "Advenced",
      },
      {
        name: "Linux: Ubuntu Server",
        level: "Advenced",
      },
    ],
    "Security Tools": [
      {
        name: "Postman",
        level: "Highly specialised",
      },
      {
        name: "OWASP MASVS / MASTG",
        level: "Advenced",
      },
      { name: "OpenSSL", level: "Advenced" },
      { name: "ZAP", level: "Intermediate" },
      { name: "AndroidTamer", level: "Intermediate" },
      { name: "Genymotion", level: "Intermediate" },
      { name: "ADB", level: "Intermediate" },
      { name: "ImmuniWeb", level: "Intermediate" },
      { name: "MOBFS", level: "Intermediate" },
      { name: "Mara Framework", level: "Intermediate" },
    ],
  };

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
        professionalExperiences={professionalExperiences}
        notableExperiences={notableExperiences}
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
        className="z-10 rounded-full border-[0.5px] border-gray-800 shadow-xl"
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
  professionalExperiences,
  notableExperiences,
  studies,
  skills,
}: {
  name: string;
  role: string;
  contactLinks: { type: Social; href: string }[];
  letIntroduceMe: string;
  professionalExperiences: Experience[];
  notableExperiences: Experience[];
  studies: Study[];
  skills: Skills;
}) {
  return (
    <div className="flex flex-col gap-8">
      <Hi name={name} role={role} />
      <ContactLinks contactLinks={contactLinks} />
      <p className="text-left text-lg">{letIntroduceMe}</p>
      <div className="flex flex-col py-6">
        <ExperienceList
          title={"Professional Experience"}
          Experiences={professionalExperiences}
        />
        <ExperienceList
          title={"Notable Academic Projects"}
          Experiences={notableExperiences}
        />
        <StudiesList studies={studies} />
        <SkillsComponent skills={skills} />
      </div>
    </div>
  );
}
