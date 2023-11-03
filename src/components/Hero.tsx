"use client";
import { useId, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Designer"],
    loop: true,
    deleteSpeed: 90,
    typeSpeed: 100,
  });

  let id = useId();
  return (
    <section id="home" className="w-full h-screen text-center">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1190CB] to-[#43cea2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-56 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
        <svg
          viewBox="0 0 1026 1026"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-spin-slow"
        >
          <path
            d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
            stroke="#D4D4D4"
            strokeOpacity="1"
          />
          <path
            d="M513 1025C230.23 1025 1 795.77 1 513"
            stroke={`url(#${id}-gradient-1)`}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id={`${id}-gradient-1`}
              x1="1"
              y1="513"
              x2="1"
              y2="1025"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1190CB" />
              <stop offset="1" stopColor="#1190CB" stopOpacity="50" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1026 1026"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-spin-slower"
        >
          <path
            d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
            stroke="#D4D4D4"
            strokeOpacity="1"
          />
          <path
            d="M913 513c0 220.914-179.086 400-400 400"
            stroke={`url(#${id}-gradient-2)`}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id={`${id}-gradient-2`}
              x1="913"
              y1="513"
              x2="913"
              y2="913"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#43cea2" />
              <stop offset="1" stopColor="#43cea2" stopOpacity="50" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-2 md:py-4 text-black">
            Hi, I&#39;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1190CB] to-[#43cea2] sm:text-6xl">
              {" "}
              Zain
            </span>
          </h1>
          <h1 className="md:py-2 text-black">
            A Front-End Web {text}{" "}
            <span>
              {" "}
              <Cursor
                cursorStyle="|"
                cursorBlinking={false}
                cursorColor="#43cea2"
              />
            </span>
          </h1>
          <p className="py-4 text-black sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications with a
            keen UI/UX interest, integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/mzain-ul-abideen/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/Tufalpha1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://teal-jacky-38.tiiny.site">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#43cea2] to-[#1190CB] opacity-20 sm:opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};
