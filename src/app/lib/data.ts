import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogImg from "../../../public/blog.png";
import productStore from "../../../public/ProductStore.png";
import distributed_fog from "../../../public/distributed_fog.png";
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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate Tutor",
    location: "Krishnankoil, Tamil Nadu",
    description:
      "Tutored undergraduate students in cyber security, digital skills, and data structures and algorithms. Developed personalized lesson plans and collaborated with faculty to support students.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2023 - Aug 2024",
  },
  {
    title: "Smart India Hackathon Finalist",
    location: "Virudhunagar, Tamil Nadu",
    description:
      "Developed an accessible web application using React JS, speech recognition, and eye-tracking technology to assist users with physical disabilities. Created an inclusive quiz application for users with cognitive disabilities.",
    icon: React.createElement(FaReact),
    date: "July 2022",
  },
  {
    title: "Bachelor of Computer Science and Engineering",
    location: "Virudhunagar, Tamil Nadu",
    description:
      "Completed Bachelor's degree in Computer Science and Engineering at Mepco Schlenk Engineering College.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 - May 2023",
  },
] as const;
export const projectsData = [
  {
    title: "Blog App",
    description:
      "Built a blogging platform with Kinde Auth and PostgreSQL for secure article publishing and management",
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "PostgresSQL",
      "Tailwind",
      "Prisma",
    ],
    imageUrl: blogImg,
  },
  {
    title: "Distributed Deep Learning Service ",
    description:
      "Developed fog computing framework enhancing deep learning and reducing latency.",
    tags: [
      "Python",
      "Tensorflow",
      "Keras",
      "OpenCV",
      "PHP",
      "HTML",
      "CSS",
      "javascript",
    ],
    imageUrl: distributed_fog,
  },
  {
    title: "Product Store",
    description:
      "Developed a e-commerce platform with product management and inventory control. Implemented RESTful APIs and cloud-based database for optimal performance.",
    tags: ["React", "Node js", "MongoDB", "Chakra UI", "Express js"],
    imageUrl: productStore,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Rust",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "React Query",
  "Zustand",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Express js",
  "Pandas",
  "Numpy",
  "TensorFlow & Keras",
  "Scikit-learn",
  "OpenCV",
] as const;
