import React from "react";
import Image from "next/image";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div
      className="max-w-[1100px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center  w-full">
        <div className="w-full">
          <ul className="space-y-4">
            <li className="flex items-center">
              <Image src={phone} alt="phone" className="h-[80px] w-auto mr-6" />
              <p className="text-xl">+91 9876543210</p>
            </li>
            <li className="flex items-center">
              <Image src={mail} alt="mail" className="h-[80px] w-auto mr-6" />
              <p className="text-xl">x2HdA@example.com</p>
            </li>
          </ul>
        </div>
        <div className="bg-white/10 p-6 rounded-xl w-full">
          <h2 className="text-3xl text-center font-bold text-orange-400 mb-4">
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center items-center gap-3">
            <a
              href="https://www.linkedin.com/in/manojkumar-ak/"
              className="button"
            >
              <IoNewspaperOutline size={30} />
              <p className="text-lg font-semibold">Download CV</p>
            </a>
            <div className="mx-3">/</div>
            <a
              href="https://www.linkedin.com/in/manojkumar-ak/"
              className="button"
            >
              <FaGithub size={30} />
              <p className="text-lg font-semibold">Github Profile</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
