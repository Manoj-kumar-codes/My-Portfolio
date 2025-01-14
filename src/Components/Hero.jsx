"use client";
import Image from "next/image";
import cursor from "@/assets/icon1.png";
import lightning from "@/assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "@/assets//profilepic.png";
const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5c55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I'm</h1>
          <h1 className="text-[#E48A57]">Manoj Kumar</h1>
        </div>
        <motion.div className="absolute hidden md:block left-[280px] top-[170px]" drag>
          <Image
            src={cursor}
            alt="cursor"
            width={170}
            height={170}
            className=""
            draggable={false}
          />
        </motion.div>
        <motion.div className="hidden md:block absolute right-[220px] top-[170px]" drag>
          <Image
            src={lightning}
            alt="lightning"
            width={120}
            height={120}
            className=""
            draggable={false}
          />
        </motion.div>

        <p className="text-center text-xl mx-auto max-w-[500px] mt-8 px-2 md:p-0 text-white/80">
          I am frontend developer focused on creating website that provides the
          best experience for the user.
        </p>
        <Image
          src={profilepic}
          alt="profilepic"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
