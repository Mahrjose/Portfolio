export type SocialLink = {
  name: string;
  url: string;
};

export type HeroData = {
  name: string;
  title: string;
  picture: string;
  description: string;
  location: string;
  experience: string;
  social: SocialLink[];
};

export type Language = {
  name: string;
  level: string;
};

export type Interest = {
  name: string;
  description: string;
};

export type Platform = {
  name: string;
  url: string;
};

export type Project = {
  id: string | number;
  title: string;
  date: string;
  description: string;
  tech: string[];
  collabType: string;
  status: string;
  start?: string;
  end?: string;
  github?: string;
  demo?: string;
  type?: string;
  language?: string;
  feature?: { status: boolean; rank: number };
};
