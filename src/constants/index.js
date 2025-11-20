import { j } from "maath/dist/misc-19a3ec46.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  java,
  spring,
  mysql,
  postgresql,
  bootstrap,
  github,
  news2,
  PlanetHabits,
  Bakery,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: java,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  { name: "Java", icon: java },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  { name: "Github", icon: github },

  { name: "Spring", icon: spring },

  { name: "MySQL", icon: mysql },

  { name: "PostgreSQL", icon: postgresql },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Developer in Training",
    company_name: "Zip Code Wilmington / Wilmington, DE",
    icon: web,
    iconBg: "#383E56",
    date: "Feb 2024 - May 2024",
    points: [
      "	Completed 1,000+ hours of full-stack training (Java, Spring Boot, React, JS, TDD).",
      "	Built and deployed end-to-end applications in Agile teams.",
      "	Strengthened collaboration, problem-solving, and version control skills through team-based sprints and code reviews.",
    ],
  },
  {
    title: "Software Developer intern",
    company_name: "Zip Code Wilmington / Wilmington, DE",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "	Enhanced and maintained website content and front-end components using HTML, CSS, and JavaScript to improve responsiveness and user experience.",
      "	Collaborated in Agile sprints with cross-functional teams to deliver accessible, mobile-friendly web interfaces aligned with modern UI/UX standards.",
      "	Implemented updates through a CMS, ensuring consistency with client branding and communication guidelines.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "My Bakery website",
    description:
      "A bakery website that allows users to browse and order baked goods online. The website features a user-friendly interface, a variety of products, and a submission form. Built using HTML, CSS, Bootstrap and JavaScript for the frontend and Java, Spring Boot for the backend. PostgreSQL is used for the database to store product and order information.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      { name: "spring boot", color: "green-text-gradient" },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: Bakery,
    source_code_link: "https://github.com/Mariyana-Katz",
  },

  {
    name: "Planet Habits",
    description:
      "A habit-tracking web application that helps users build and maintain positive habits. Users can  track progress, and receive reminders. Built with React for the frontend and local storage for the backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: PlanetHabits,
    source_code_link: "https://github.com/Mariyana-Katz",
  },

  {
    name: "News App",
    description:
      "A news application that provides users with the latest news articles from various sources. Users can search for articles, filter by category, and read full articles. Built using React for the frontend and Java, Spring Boot for the backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: news2,
    source_code_link: "https://github.com/Mariyana-Katz",
  },
];

export { services, technologies, experiences, testimonials, projects };
