"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../context/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-48 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After completing my degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. Currently, I am in my final year of{" "}
        <span className="font-medium">M.Tech</span>, where I focus on{" "}
        <span className="font-medium">full-stack web development</span> and
        explore areas like{" "}
        <span className="font-medium">machine learning and deep learning</span>.
        I find great joy in the problem-solving aspect of programming; there’s
        nothing quite like the satisfaction of overcoming challenges with
        innovative solutions. My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        , and I also have experience with TypeScript and Prisma. I am always
        eager to learn new technologies and expand my skill set, and I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        participating in Capture the Flag competitions and honing my
        cybersecurity skills. I'm also passionate about{" "}
        <span className="font-medium">learning new things</span> and often
        explore diverse subjects that pique my interest.
      </p>
    </motion.section>
  );
};

export default About;
