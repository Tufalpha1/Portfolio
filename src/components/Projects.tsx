"use client";
import React from "react";
import ProjectItem from "./ProjectItem";
import siliconVillage from "../../public/assets/projects/silicon-village.png";
import quickJourney from "../../public/assets/projects/quick-journey.png";
import byteboltImg from "../../public/assets/projects/byteboltsec.png";
import creativeMedia from "../../public/assets/projects/creative-media-partners.png";
import aucssImg from "../../public/assets/projects/aucss.png";
import intelligenImage from "../../public/assets/projects/intelligen.png";
import decentraConnect from "../../public/assets/projects/decentra-connect.png";
import ctf from "../../public/assets/projects/ctf.png";

const Projects = () => {
  return (
    <section id="projects" className="w-full scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="text-xl 2xl:text-2xl uppercase text-[#1190CB] text-center">Projects</p>
        <h2 className="py-8 text-center text-4xl sm:text-5xl 2xl:text-6xl bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
          What I&apos;ve Built
        </h2>

        <div className="grid md:grid-cols-2 gap-8 py-8 sm:py-20">
          <ProjectItem
            title="Silicon Village"
            backgroundImg={siliconVillage}
            projectUrl="/siliconvillage"
            tech="Next JS"
            className="hover:bg-gradient-to-r from-[#42e5d9] to-[#21456e]"
          />
          <ProjectItem
            title="Quick Journey"
            backgroundImg={quickJourney}
            projectUrl="/quickjourney"
            tech="Next JS"
            className="hover:bg-gradient-to-r from-[#ffdd00] to-[#fcb900]"
          />
          <ProjectItem
            title="DecentraConnect"
            backgroundImg={decentraConnect}
            projectUrl="/decentraconnect"
            tech="Next JS / Express / IPFS"
            className="hover:bg-gradient-to-r from-[#742ce9] to-[#B75CFF]"
          />
          <ProjectItem
            title="CTF Scoreboard"
            backgroundImg={ctf}
            projectUrl="/ctf"
            tech="Next JS"
            className="hover:bg-gradient-to-r from-[#fb08ea] to-[#551b97]"
          />
          <ProjectItem
            title="Marketing Agency Website"
            backgroundImg={creativeMedia}
            projectUrl="/creativemedia"
            tech="Next JS"
            className="hover:bg-gradient-to-r from-[#ffec00] to-[#ff7f00]"
          />
          <ProjectItem
            title="IntelliGen Full Stack Website"
            backgroundImg={intelligenImage}
            projectUrl="/intelligen"
            tech="Next JS"
            className="hover:bg-gradient-to-r from-[#38a68d] to-[#c0e46b]"
          />
          <ProjectItem
            title="ByteBoltSec Landing Page"
            backgroundImg={byteboltImg}
            projectUrl="/bytebolt"
            tech="Next JS"
            className="hover:bg-gradient-to-r from-[#ffdc03] to-[#fbb133]"
          />
          <ProjectItem
            title="AUCSS Website"
            backgroundImg={aucssImg}
            projectUrl="/aucss"
            tech="Next JS"
            className="hover:bg-gradient-to-r from-[#58b7d8] to-[#2c669d]"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
