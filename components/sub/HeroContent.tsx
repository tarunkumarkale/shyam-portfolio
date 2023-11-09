"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-3 sm:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-full flex flex-col gap-6 mt-6 sm:text-6xl font-bold text-white sm:max-w-[600px]  h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Web-Developer. Proficient in HTML, CSS,
          JavaScript, and frontend frameworks.
        </motion.p>
        <Link href={"/Shyam-Raghuwanshi.pdf"} target="_blank">
          <motion.div
            variants={slideInFromLeft(1)}
            className="font-extrabold known-more-btn text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"
          ></motion.div>
        </Link>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden w-full h-full sm:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
