import React from 'react'
import DesignItem from './DesignItem';
import DesignItem2 from './DesignItem2';
import decentraImg from '../../public/assets/designs/decentra.png';
import dexhubImg from '../../public/assets/designs/dexhub.png';

const Designs = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#1190CB] text-center">
          Designs
        </p>
        <h2 className="py-8 text-center">What I&apos;ve Made</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <DesignItem
            title="Decentralized Social Media UI"
            backgroundImg={decentraImg}
            projectUrl="/decentra"
            tech="Figma"
          />
          <DesignItem2
            title="Decentralized Exchange UI"
            backgroundImg={dexhubImg}
            projectUrl="/dexhub"
            tech="Figma"
          />
        </div>
      </div>
    </section>
  );
}

export default Designs