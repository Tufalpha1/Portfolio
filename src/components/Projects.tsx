import React from "react";
import ProjectItem from "./ProjectItem";
import eshopImg from "../../public/assets/projects/eshop.png";
import cysecopsImg from "../../public/assets/projects/cysecops.png";
import aucssImg from "../../public/assets/projects/aucss.png";
import intelligenImage from "../../public/assets/projects/intelligen.png";
import decentraConnect from "../../public/assets/projects/decentra-connect.png";
import ctf from "../../public/assets/projects/ctf-scoreboard2.png";
import DesignItem from "./DesignItem";
import ProjectItem2 from "./ProjectItem2";

const Projects = () => {
  return (
    <section id="projects" className="w-full scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="text-xl tracking-tighter uppercase text-[#1190CB] text-center">
          Projects
        </p>
        <h2 className="py-8 text-center bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
          What I&apos;ve Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8 py-10">
          <DesignItem
            title="DecentraConnect"
            backgroundImg={decentraConnect}
            projectUrl="/decentraconnect"
            tech="Next JS / Express / IPFS"
          />
          <ProjectItem2
            title="CTF Scoreboard"
            backgroundImg={ctf}
            projectUrl="/ctf"
            tech="Next JS"
          />
          <ProjectItem
            title="CySecOps Website"
            backgroundImg={cysecopsImg}
            projectUrl="/cysecops"
            tech="Next JS"
          />
          <ProjectItem
            title="IntelliGen Full Stack Website"
            backgroundImg={intelligenImage}
            projectUrl="/intelligen"
            tech="Next JS"
          />
          <ProjectItem
            title="Ecommerce App"
            backgroundImg={eshopImg}
            projectUrl="/eshop"
            tech="Next JS"
          />
          <ProjectItem
            title="AUCSS Website"
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
