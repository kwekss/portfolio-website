import Image from "next/image";
import Link from "next/link";
import React from "react";
import beemaImg from "../public/assets/projects/beema.png";
import huddleImg from "../public/assets/projects/huddle.png";
import nextImg from "../public/assets/projects/next.png";
import ninjaImg from "../public/assets/projects/ninja.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Beema UI"
            backgroundImg={beemaImg}
            projectUrl="/beema"
          />
          <ProjectItem
            title="Next Website"
            backgroundImg={nextImg}
            projectUrl="/next"
          />
          <ProjectItem
            title="Huddle UI"
            backgroundImg={huddleImg}
            projectUrl="/huddle"
          />
          <ProjectItem
            title="Ninja List"
            backgroundImg={ninjaImg}
            projectUrl="/ninja"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
