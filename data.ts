import type { DemoNotification, ImpactEntry, Partner, PartnershipRequest, Project, UserProfile } from "./types";

export const skillOptions = [
  "UI/UX Design", "Research", "Python", "Web Development", "Teaching", "Communication",
  "Data Analysis", "Project Management", "Content Writing", "Community Outreach", "Digital Marketing",
];

export const seedUser: UserProfile = {
  name: "Maya Sharma",
  email: "maya@skillbridge.demo",
  role: "Student",
  organization: "Northstar University",
  bio: "Design student and community volunteer using research and communication to make learning more inclusive.",
  skills: ["UI/UX Design", "Research", "Communication"],
  interests: ["Education", "Digital inclusion", "Climate action"],
  availability: "6–8 hours per week",
};

export const seedPartners: Partner[] = [
  { id: "ayesha-khan", name: "Ayesha Khan", role: "Student", organization: "National Institute of Design", intro: "Human-centered designer focused on accessible public services and education.", skills: ["UI/UX Design", "Research"], interests: ["Accessibility", "Education"], location: "Ahmedabad, India", initials: "AK" },
  { id: "rahul-verma", name: "Rahul Verma", role: "Volunteer", organization: "Code for Communities", intro: "Developer building practical open-source tools for grassroots organizations.", skills: ["Python", "Web Development"], interests: ["Civic tech", "Open source"], location: "Bengaluru, India", initials: "RV" },
  { id: "sara-ahmed", name: "Sara Ahmed", role: "Mentor", organization: "Learning Without Limits", intro: "Educator and facilitator helping young people learn with confidence.", skills: ["Teaching", "Communication"], interests: ["Youth", "Literacy"], location: "Delhi, India", initials: "SA" },
  { id: "zoya-ali", name: "Zoya Ali", role: "Volunteer", organization: "Impact Metrics Lab", intro: "Analyst who helps mission-driven teams turn field data into useful decisions.", skills: ["Data Analysis", "Project Management"], interests: ["Public health", "Evidence"], location: "Hyderabad, India", initials: "ZA" },
];

export const seedProjects: Project[] = [
  {
    id: "campus-zero-waste", title: "Campus Zero-Waste Toolkit", category: "Environment", organization: "EcoEd Alliance",
    description: "Create a reusable toolkit that helps college communities measure and reduce waste.",
    longDescription: "Student teams and sustainability experts are co-creating practical audit templates, campaign materials, and implementation guides that any campus can adapt. The final toolkit will be published as an open educational resource.",
    skills: ["Research", "UI/UX Design", "Content Writing"], team: ["EcoEd Alliance", "Northstar University", "3 student volunteers"],
    milestones: [{ title: "Complete campus waste audit", done: true }, { title: "Prototype the toolkit", done: true }, { title: "Pilot with two campuses", done: false }, { title: "Publish open resource", done: false }], progress: 54,
  },
  {
    id: "digital-classrooms", title: "Digital Classrooms for All", category: "Digital Inclusion", organization: "Bright Futures NGO",
    description: "Build low-bandwidth learning resources for students with limited internet access.",
    longDescription: "This project brings educators, developers, and content creators together to make curriculum-aligned resources usable on basic devices and unreliable connections. Volunteers will test accessibility and support teacher onboarding.",
    skills: ["Web Development", "Teaching", "Communication"], team: ["Bright Futures NGO", "8 volunteers"],
    milestones: [{ title: "Interview teachers", done: true }, { title: "Build content library", done: true }, { title: "Accessibility review", done: false }, { title: "Teacher pilot", done: false }], progress: 62,
  },
  {
    id: "youth-mental-health", title: "Youth Mental Health Network", category: "Health & Wellbeing", organization: "Mindful Campus",
    description: "Design peer-led resources that connect students with safe, local wellbeing support.",
    longDescription: "The network equips student ambassadors with facilitator guides, referral pathways, and communication resources reviewed by qualified mental health professionals.",
    skills: ["Research", "Communication", "Project Management"], team: ["Mindful Campus", "2 counselors", "12 peer ambassadors"],
    milestones: [{ title: "Advisory review", done: true }, { title: "Create peer guide", done: true }, { title: "Train ambassadors", done: true }, { title: "Launch campus network", done: false }], progress: 78,
  },
  {
    id: "civic-data-lab", title: "Civic Data Lab", category: "Technology", organization: "OpenCity Foundation",
    description: "Turn public datasets into clear community dashboards and explainers.",
    longDescription: "Volunteers collaborate with community groups to identify useful public datasets, clean and document them, and build accessible visualizations around local priorities.",
    skills: ["Python", "Data Analysis", "UI/UX Design"], team: ["OpenCity Foundation", "5 data volunteers"],
    milestones: [{ title: "Select datasets", done: true }, { title: "Clean data", done: false }, { title: "Build dashboards", done: false }], progress: 34,
  },
  {
    id: "skills-on-wheels", title: "Skills on Wheels", category: "Community Development", organization: "Seva Connect",
    description: "Bring practical digital and career workshops to underserved neighborhoods.",
    longDescription: "A mobile learning program offering short, locally relevant workshops led by volunteers and supported by neighborhood partner organizations.",
    skills: ["Teaching", "Community Outreach", "Communication"], team: ["Seva Connect", "6 facilitators"],
    milestones: [{ title: "Map neighborhoods", done: true }, { title: "Train facilitators", done: false }, { title: "Run first workshops", done: false }], progress: 28,
  },
  {
    id: "stem-mentor-circle", title: "STEM Mentor Circle", category: "Education", organization: "FutureReady Foundation",
    description: "Match first-generation learners with mentors for project-based STEM guidance.",
    longDescription: "Mentors support small learner cohorts through monthly sessions, practical challenges, and career conversations designed to build confidence and exposure.",
    skills: ["Teaching", "Python", "Project Management"], team: ["FutureReady Foundation", "10 mentors"],
    milestones: [{ title: "Recruit mentors", done: true }, { title: "Match cohorts", done: false }, { title: "Begin monthly sessions", done: false }], progress: 40,
  },
];

export const seedRequests: PartnershipRequest[] = [
  { id: "r1", direction: "Received", partnerId: "ayesha-khan", name: "Ayesha Khan", detail: "Would you like to collaborate on research for the Campus Zero-Waste Toolkit?", date: "24 May 2025", status: "Pending" },
  { id: "r2", direction: "Received", partnerId: "rahul-verma", name: "Rahul Verma", detail: "I can support the Digital Classrooms prototype and would value your design input.", date: "22 May 2025", status: "Pending" },
  { id: "r3", direction: "Received", partnerId: "zoya-ali", name: "Zoya Ali", detail: "Let’s compare impact measurement approaches for our community projects.", date: "19 May 2025", status: "Pending" },
  { id: "r4", direction: "Received", partnerId: "sara-ahmed", name: "Sara Ahmed", detail: "I’m forming a facilitation team for Skills on Wheels.", date: "15 May 2025", status: "Accepted" },
];

export const seedImpact: ImpactEntry[] = [
  { id: "i1", project: "Campus Zero-Waste Toolkit", description: "Interviewed student sustainability leads.", skill: "Research", hours: 4, date: "2025-05-12" },
  { id: "i2", project: "Digital Classrooms for All", description: "Reviewed the mobile learning flow.", skill: "UI/UX Design", hours: 6, date: "2025-05-18" },
  { id: "i3", project: "Youth Mental Health Network", description: "Facilitated a peer feedback session.", skill: "Communication", hours: 3, date: "2025-05-23" },
];

export const seedNotifications: DemoNotification[] = [
  { id: "n1", title: "New partnership request", detail: "Ayesha Khan invited you to collaborate.", read: false },
  { id: "n2", title: "Project milestone updated", detail: "Digital Classrooms completed its content library.", read: false },
  { id: "n3", title: "Impact entry saved", detail: "Your latest contribution is included in the tracker.", read: true },
];
