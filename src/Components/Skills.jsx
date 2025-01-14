import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJsSquare } from "react-icons/fa";
const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3 size={140} />, label: "Css" },
  { icon: <FaReact size={140} />, label: "React" },
  { icon: <FaJsSquare size={140} />, label: "Javascript" },
];
const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] sm:py-32 py-12">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I do</h2>

        <div className="mt-30 grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((item, index) => (
            <div
              key={index}
              className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col items-center justify-between  p-4 bg-white/10 rounded-xl "
            >
              {item.icon}
              <p className="mt-2 text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
