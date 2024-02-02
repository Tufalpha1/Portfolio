"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import about from "../../public/assets/about.svg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen my-44 sm:my-36 flex items-center scroll-mt-20"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 px-8">
          <p className="uppercase text-xl  text-[#1190CB]">About me</p>
          <h2 className="py-4 text-4xl sm:text-5xl bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
            Who I Am
          </h2>
          <div className="py-2 text-black text-sm sm:text-lg">
            <p>
              I am a Cybersecurity undergraduate with a love for web
              development. I thrive on building dynamic and interactive web
              applications that provide engaging user experiences. With a solid
              foundation in front-end development and a growing expertise in
              backend technologies, including databases, I am continuously
              expanding my skill set to become a well-rounded developer.
            </p>
            <p className="mt-4 font-bold text-sm sm:text-lg">
              I specialize in:
            </p>
            <div className="text-sm sm:text-lg text-gray-700">
              <p>• Front-End Development (React/Next JS)</p>
              <p>• Back-End Development (Node JS)</p>
              <p>• UI/UX Design (Figma/Spline 3D)</p>
            </div>
          </div>
          <Link href="/#projects">
            <div className="py-12">
              <div className="grid gap-8 items-start sm:justify-start justify-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#43cea2] to-[#1190CB] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-7 py-4 bg-[#ecf0f3] rounded-lg leading-none flex divide-x divide-gray-600">
                    <span className="pl-6 text-black group-hover:text-gray-600 transition duration-75 text-sm sm:text-lg">
                      Check out some of my projects &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100">
          <Image
            src={about}
            className="rounded-xl"
            alt="/"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
