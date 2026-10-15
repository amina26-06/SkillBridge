export type Role = "Student" | "Volunteer" | "NGO" | "Educational Institution" | "Organization" | "Mentor";

export type UserProfile = {
  name: string;
  email: string;
  role: Role;
  organization: string;
  bio: string;
  skills: string[];
  interests: string[];
  availability: string;
};

export type Partner = {
  id: string;
  name: string;
  role: Role;
  organization: string;
  intro: string;
  skills: string[];
  interests: string[];
  location: string;
  initials: string;
};

export type Milestone = { title: string; done: boolean };

export type Project = {
  id: string;
  title: string;
  category: string;
  organization: string;
  description: string;
  longDescription: string;
  skills: string[];
  team: string[];
  milestones: Milestone[];
  progress: number;
};

export type PartnershipRequest = {
  id: string;
  direction: "Received" | "Sent";
  partnerId?: string;
  projectId?: string;
  name: string;
  detail: string;
  date: string;
  status: "Pending" | "Accepted" | "Declined";
};

export type ImpactEntry = {
  id: string;
  project: string;
  description: string;
  skill: string;
  hours: number;
  date: string;
};

export type DemoNotification = {
  id: string;
  title: string;
  detail: string;
  read: boolean;
};
