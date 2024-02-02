"use client";
import React, { useState, useEffect } from "react";
import navLogo from "../../public/zLogo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90 || window.scrollY === 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    if (window !== undefined)
    {
      window.addEventListener("scroll", handleShadow);
    }

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <nav
      className={
        shadow
          ? "fixed top-0 w-full h-24 shadow-xl z-[100] ease-in-out duration-300 bg-white/50 backdrop-filter backdrop-blur-3xl"
          : "fixed top-0 w-full h-24 z-[100]"
      }
    >
      <div className="flex justify-around items-center w-full h-full px-4 2xl:px-16 mt-2 ">
        <Image
          src={navLogo}
          alt="Zain's Logo"
          width={80}
          height={40}
          className="h-12 w-8 mr-32"
        />
        <div>
          <ul className="hidden font-semibold md:flex ">
            <Link href={"/"} scroll={true}>
              <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
                Home
              </li>
            </Link>
            <Link href={"/#about"} scroll={true}>
              <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
                About
              </li>
            </Link>
            <Link href={"/#skills"} scroll={true}>
              <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
                Skills
              </li>
            </Link>
            <Link href={"/#projects"} scroll={true}>
              <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
                Projects
              </li>
            </Link>
            <Link href={"/#contact"} scroll={true}>
              <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden p-2">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/30" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-200%] top-0 bottom-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={navLogo}
                alt="Zain's Logo"
                width={80}
                height={40}
                className="h-12 w-8"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 text-center">
              <p className="w-[85%] md:w-[90%] py-4 text-xl font-bold bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">{`Let's build something good together!`}</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="font-semibold ">
              <Link onClick={() => setNav(false)} href={"/"}>
                <li className="py-4 text-base">Home</li>
              </Link>
              <Link onClick={() => setNav(false)} href={"/#about"}>
                <li className="py-4 text-base">About</li>
              </Link>
              <Link onClick={() => setNav(false)} href={"/#skills"}>
                <li className="py-4 text-base">Skills</li>
              </Link>
              <Link onClick={() => setNav(false)} href={"/#projects"}>
                <li className="py-4 text-base">Projects</li>
              </Link>
              <Link onClick={() => setNav(false)} href={"/#contact"}>
                <li className="py-4 text-base">Contact</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase text-center text-[#1190CB]">{`Let's Connect`}</p>
              <div className="flex items-center justify-evenly my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/mzain-ul-abideen/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/Tufalpha1">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                    <FaGithub />
                  </div>
                </Link>
                <Link href={"/#contact"}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
