import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ProjectCardInfo } from "@/constants";
import Link from "next/link";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-[49]">
        {ProjectCardInfo?.map((project) => (
          <Link href={project.href} target="_blank">
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
