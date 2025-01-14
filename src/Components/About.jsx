"use client";
import React from "react";
import Image from "next/image";
import book from "@/assets/book.png";
import pc from "@/assets/pc.png";
import card from "@/assets/card.png";
import finance from "@/assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400">Me</span>
      </h1>
      <div className="px-6 md:p-0 grid  md:grid-cols-8 gap-6 place-items-center ">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700  to-orange-700 opacity-30 animate-gradient-xy">
            {" "}
          </div>
          <div className="flex  flex-col sm:flex-row p-6">
            <Image src={book} alt="book" className=" w-[130px] h-auto sm:w-auto sm:h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Education</h2>
              <p className="text-lg text-white/70 mt-2">
                I hold a degree in Computer Science and I am focusing on
                technologies like React, React native, Next.js and TailWind CSS
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700  to-orange-700 opacity-30 animate-gradient-xy">
            {" "}
          </div>
          <div className="flex flex-col sm:flex-row p-6">
            <Image src={finance} alt="finance" className=" w-[130px] h-auto sm:w-auto sm:h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Problem Solving
              </h2>
              <p className="text-lg text-white/70 mt-2">
                I approach challenges with logical and systematic mindset.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700  to-orange-700 opacity-30 animate-gradient-xy">
            {" "}
          </div>
          <div className="flex  flex-col sm:flex-row p-6">
            <Image src={card} alt="card" className=" w-[130px] h-auto sm:w-auto sm:h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Experiance</h2>
              <p className="text-lg text-white/70 mt-2">
                I have a diverse portfolio of projects
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700  to-orange-700 opacity-30 animate-gradient-xy">
            {" "}
          </div>
          <div className="flex flex-col sm:flex-row p-6">
            <Image src={pc} alt="pc" className=" w-[130px] h-auto sm:w-auto sm:h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Technical Skill
              </h2>
              <p className="text-lg text-white/70 mt-2">
                As a frontend developer, I specialize in React, HTML, CSS,
                Javascript ,React JS, React Native, Next.js and Tailwind CSS. My
                expertise extends to creating responsive and user-friendly
                interfaces, optimizing performance, and ensuring accessibility
                for a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
