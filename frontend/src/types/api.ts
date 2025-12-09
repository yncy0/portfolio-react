export interface About {
  id: number;
  description: string;
}

export interface Experience {
  id: number;
  title: string;
  description: string;
  year_start: string;
  year_end: string;
}

export interface Education {
  id: number;
  title: string;
  description: string;
  year: string;
}

export interface HeroTitle {
  id: number;
  name: string;
  description: string;
}

export interface Badge {
  id: number;
  title: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
  github_url: string;
}

export interface CreateProjectRequest {
  title: string;
  description: string;
  project_url: string;
  github_url: string;
  image: File;
}
