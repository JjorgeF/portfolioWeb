export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  iconName: string;
}

export interface Certificate {
  id: string;
  title: string;
  institution: string;
  skills: string[];
  date: string;
  verificationLink: string;
  iconName: string;
}
