"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project1 from "@/assets/proj1.jpg";
import project2 from "@/assets/proj2.jpg";
import project3 from "@/assets/proj3.png";
import { title } from "process";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi neque eveniet a atque possimus minima vel voluptatum expedita aperiam voluptatibus nulla est, molestias et in natus quisquam facilis iure minus.",
    devStack: "React, Next.js, Tailwind CSS",
    link: "#",
    git: "#",
    src: project1,
  },
  {
    title: "Project 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi neque eveniet a atque possimus minima vel voluptatum expedita aperiam voluptatibus nulla est, molestias et in natus quisquam facilis iure minus.",
    devStack: "React, Next.js, Tailwind CSS",
    link: "#",
    git: "#",
    src: project2,
  },
  {
    title: "Project 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi neque eveniet a atque possimus minima vel voluptatum expedita aperiam voluptatibus nulla est, molestias et in natus quisquam facilis iure minus.",
    devStack: "React, Next.js, Tailwind CSS",
    link: "#",
    git: "#",
    src: project3,
  },
];
const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40"
      id="projects"
    >
      <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4">
        <span className="text-orange-400">Projects</span>
      </h1>
      <div className="max-w-[1000px] px-6 md:p-0 mx-auto  space-y-24">
        {projects.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={` mt-12 flex flex-col ${
                index % 2 === 1
                  ? " md:flex-row-reverse gap-12"
                  : " md:flex-row gap-12"
              }`}
            >
              <div className="space-y-2 max-w-[550px]">
                <h2 className="text-7xl my-4 text-white/70">{`0${
                  index + 1
                }`}</h2>
                <h2 className="text-4xl">{item.title}</h2>
                <p className="text-lg">{item.description}</p>
                <p className="text-xl text-orange-400 font-semibold">
                  {item.devStack}
                </p>
                <div className="w-64 h-[1px] bg-gray-400 my-4 inline-block"></div>
                <div className="flex items-center gap-3 my-4">
                  <a href={item.link}>link</a>
                  <a href={item.git}>Git</a>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="w-[500px] h-[350px] object-cover border rounded border-gray-700"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
