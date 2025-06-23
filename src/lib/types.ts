import { ReactElement } from "react";

export enum Social {
  Github,
  Linkedin,
  Email,
}

export type Experience = {
  company?: string;
  position?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  experiences: {
    description: string |ReactElement<any>;
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