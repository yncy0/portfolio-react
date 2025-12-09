import type {
  About,
  Experience,
  Education,
  CreateProjectRequest,
  Badge,
  HeroTitle,
} from "@/types/api";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1";

export const apiClient = {
  // About endpoints
  about: {
    getAll: async () => {
      const res = await fetch(`${API_BASE_URL}/about`);
      if (!res.ok) throw new Error("Failed to fetch about");
      return res.json();
    },
    update: async (id: number, data: Partial<About>) => {
      const res = await fetch(`${API_BASE_URL}/about/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update about");
      return res.json();
    },
  },

  // Experience endpoints
  experiences: {
    getAll: async () => {
      const res = await fetch(`${API_BASE_URL}/experiences`);
      if (!res.ok) throw new Error("Failed to fetch experiences");
      return res.json();
    },
    update: async (id: number, data: Partial<Experience>) => {
      const res = await fetch(`${API_BASE_URL}/experiences/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update experience");
      return res.json();
    },
  },

  // Education endpoints
  education: {
    getAll: async () => {
      const res = await fetch(`${API_BASE_URL}/education`);
      if (!res.ok) throw new Error("Failed to fetch education");
      return res.json();
    },
    update: async (id: number, data: Partial<Education>) => {
      const res = await fetch(`${API_BASE_URL}/education/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update education");
      return res.json();
    },
  },

  // Hero endpoints
  hero: {
    getAll: async () => {
      const res = await fetch(`${API_BASE_URL}/hero`);
      if (!res.ok) throw new Error("Failed to fetch hero");
      return res.json();
    },
    update: async (id: number, data: Partial<HeroTitle>) => {
      const res = await fetch(`${API_BASE_URL}/hero/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update hero");
      return res.json();
    },
  },

  // Badge endpoints
  badges: {
    getAll: async () => {
      const res = await fetch(`${API_BASE_URL}/badges`);
      if (!res.ok) throw new Error("Failed to fetch badges");
      return res.json();
    },
    update: async (id: number, data: Partial<Badge>) => {
      const res = await fetch(`${API_BASE_URL}/badges/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update badge");
      return res.json();
    },
  },

  // Project endpoints
  projects: {
    getAll: async () => {
      const res = await fetch(`${API_BASE_URL}/projects`);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return res.json();
    },
    create: async (data: CreateProjectRequest) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("project_url", data.project_url);
      formData.append("github_url", data.github_url);
      formData.append("image", data.image);

      const res = await fetch(`${API_BASE_URL}/projects`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to create project");
      return res.json();
    },
  },
};
