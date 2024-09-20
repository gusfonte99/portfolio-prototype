import aniki from "../public/screenshots/Aniki.png";
import dateFlow from "../public/screenshots/DateFlow.png";
import webDevSurvivor from "../public/screenshots/WebDevSurvivor.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp - Ironhack",
    location: "Portugal - Remote",
    description:
      "I graduated after 3 months of studying, with over 400h. And now looking for the next step, while learning new technologies and frameworks.",
    date: "Jan 2024 - Present",
    iconPath: "/icons/school_fill-icon.png",
  },
  {
    title: "Salesman - Worten",
    location: "Águeda - Portugal",
    description:
      "Worked as a Salesman, employing strong product knowledge, personalized customer service, and upselling techniques.",
    date: "Feb 2023 - May 2023",
    iconPath: "/icons/work_fill-icon.png",
  },
  {
    title: "Salesman - Staples",
    location: "Aveiro - Portugal",
    description:
      "Worked as a Salesman, later was responsible for new staff training, improving team performance.",
    date: "Sept 2022 - Jan 2023",
    iconPath: "/icons/work_fill-icon.png",
  },
  {
    title: "Customer Service Agent - Fnac",
    location: "Aveiro - Portugal",
    description:
      "Provided friendly and attentive customer service, helping shoppers find products and answering questions to enhance their shopping experience.",
    date: "Feb 2022 - June 2022",
    iconPath: "/icons/work_fill-icon.png",
  },
  {
    title: "Dropped out of university",
    location: "Aveiro University",
    description:
      "Realizing the course I was taking wasn't for me, I dropped out and started applying for jobs in retail while looking for opportunities to study in the Tech field.",
    date: "2019 - 2021",
    iconPath: "/icons/school_fill-icon.png",
  },
  {
    title: "Moved back to Portugal",
    location: "France - Portugal",
    description:
      "After studying in France for 4 years, I decided to come back to Portugal to pursue higher education.",
    date: "2014 - 2018",
    iconPath: "/icons/travel-icon.png",
  },
] as const;

export const projectsData = [
  {
    title: "Aniki",
    description: "Anime forum.",
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "JavaScript",
      "Node.js",
    ],
    image: aniki,
  },
  {
    title: "Date Flow",
    description: "Collaborative date planner App, inspired by Trello.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind",
      "Express.js",
      "Node.js",
      "REST API",
    ],
    image: dateFlow,
  },
  {
    title: "Web Dev Survivor",
    description:
      "Arcade 'bullet hell' game, made with pure Javascript. First project of the Ironhack bootcamp, meant to showcase the core fundamentals of the language.",
    tags: ["HTML5", "CSS", "JavaScript"],
    image: webDevSurvivor,
  },
] as const;

export const skillsData = [
  { name: "HTML5", logo: "html5" },
  { name: "CSS", logo: "css3" },
  { name: "JavaScript", logo: "javascript" },
  { name: "Typescript", logo: "typescript" },
  { name: "React", logo: "react" },
  { name: "Next.js", logoPath: "/logos/next-js.png" },
  { name: "Node.js", logo: "nodejs" },
  { name: "Express.js", logoPath: "/logos/express-js.png" },
  { name: "Git", logo: "git" },
  { name: "Tailwind", logo: "tailwind-css" },
  { name: "MongoDB", logo: "mongodb" },
  { name: "Postman", logoPath: "/logos/postman.png" },
  { name: "Resend", logoPath: "/logos/react-resend.png" },
  { name: "Vercel", logoPath: "/logos/vercel.png" },
  { name: "GitHub", logo: "github" }
] as const;