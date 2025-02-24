export enum Social {
  Github,
  Linkedin,
  Email,
}

export type WorkExperience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  experiences: {
    description: string |JSX.Element;
    image?: string;
  }[];
};

export type Study = {
  where: string;
  what: string;
  endDate: string;
};

export type Skill = {
  name: string;  
  source?: string;
  level: string;
};

export type Skills = Record<string, Skill[]>;