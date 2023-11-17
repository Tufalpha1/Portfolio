"use client";
import React, { useState, useEffect } from "react";
import navLogo from "../../public/zLogo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    if (window != undefined)
    {
      window.addEventListener("scroll", handleShadow);
    }

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [shadow]);

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300  bg-white/50 backdrop-blur-xl"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 mt-2">
        <Image
          src={navLogo}
          alt="Zain's Logo"
          width={80}
          height={40}
          className="h-12 w-8"
        />
        <div>
          <ul className="hidden font-medium md:flex">
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
              <p className="w-[85%] md:w-[90%] py-4">{`Let's build something good together`}</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="font-medium">
              <Link onClick={() => setNav(false)} href={"/"}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link onClick={() => setNav(false)} href={"/#about"}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link onClick={() => setNav(false)} href={"/#skills"}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link onClick={() => setNav(false)} href={"/#projects"}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link onClick={() => setNav(false)} href={"/#contact"}>
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-tighter text-center text-[#1190CB]">{`Let's Connect`}</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
                <Link href="https://teal-jacky-38.tiiny.site">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                    <BsFillPersonLinesFill />
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

