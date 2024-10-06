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