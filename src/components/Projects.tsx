import React from "react";
import ProjectItem from "./ProjectItem";
import hoobankImg from "../../public/assets/projects/hoobank.png";
import eshopImg from "../../public/assets/projects/eshop.png";
import cysecopsImg from "../../public/assets/projects/cysecops.png";
import aucssImg from "../../public/assets/projects/aucss.png";

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#1190CB] text-center">
          Projects
        </p>
        <h2 className="py-8 text-center">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Bank Database App"
            backgroundImg={hoobankImg}
            projectUrl="/hoobank"
            tech="React/Node JS"
          />
          <ProjectItem
            title="Ecommerce App"
            backgroundImg={eshopImg}
            projectUrl="/eshop"
            tech="Next JS"
          />
          <ProjectItem
            title="Cybersecurity Company Website"
            backgroundImg={cysecopsImg}
            projectUrl="/cysecops"
            tech="Next JS"
          />
          <ProjectItem
            title="Air University Cyber Security Society Website"
            backgroundImg={aucssImg}
            projectUrl="/aucss"
            tech="Next JS"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
