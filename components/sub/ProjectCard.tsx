import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer hover:scale-[1.1] transition duration-300 project-div">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain opacity-60"
      />

      <div className="relative p-4 bg-slate-700 bg-opacity-20 h-48 overflow-y-scroll">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;