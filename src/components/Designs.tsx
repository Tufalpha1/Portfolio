"use client";
import React from "react";
import ProjectItem from "./ProjectItem";
import decentraImg from "../../public/assets/designs/decentra.png";
import dexhubImg from "../../public/assets/designs/dexhub.png";

const Designs = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl 2xl:text-2xl uppercase text-[#1190CB] text-center">Designs</p>
        <h2 className="py-8 text-4xl sm:text-5xl 2xl:text-6xl text-center bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
          What I&apos;ve Made
        </h2>
        <div className="grid md:grid-cols-2 gap-8 py-20">
          <ProjectItem
            title="Decentralized Social Media UI"
            backgroundImg={decentraImg}
            projectUrl="/decentra"
            tech="Figma"
            className="hover:bg-gradient-to-r from-[#742ce9] to-[#B75CFF]"
          />
          <ProjectItem
            title="Decentralized Exchange UI"
            backgroundImg={dexhubImg}
            projectUrl="/dexhub"
            tech="Figma"
            className="hover:bg-gradient-to-r from-[#42E0BB] to-[#1D84E2]"
          />
        </div>
      </div>
    </section>
  );
};

export default Designs;
