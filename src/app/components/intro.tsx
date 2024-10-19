"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "../context/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
const Intro = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-m-96"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.2,
            }}
          >
            <Image
              src="/avatar.jpeg"
              alt="Aadith Profile"
              width={35}
              height={35}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.25rem] shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Aadith.</span> I&apos;m a
        <span className="font-bold"> full stack developer</span> pursuing my
        <span className="font-bold"> M.Tech in Computer Science</span> with
        interests in machine learning and deep learning.
      </motion.h1>

      <motion.div
        className="flex items-center flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition active:scale-105 group cursor-pointer border border-black/10 dark:bg-white/10"
          href="/Aadith_T_Resume.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.2rem] border border-black/10 focus:scale-[1.15] hover:scale-[1.15] transition active:scale-105 cursor-pointer border hover:text-gray-950 dark:text-white/60 dark:bg-white/10"
          href="https://www.linkedin.com/in/aadith-s-454895247/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 focus:scale-[1.15] hover:scale-[1.15] transition active:scale-105 cursor-pointer border hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Aadith-tech"
          target="_blank"
        >
          <BsGithub />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 focus:scale-[1.15] hover:scale-[1.15] transition active:scale-105 cursor-pointer border hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          href="https://www.kaggle.com/aadith0"
          target="_blank"
        >
          <Image
            src="/kaggle.png"
            alt="kaggle logo"
            width={25}
            height={25}
            loading="lazy"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
