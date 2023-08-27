import React from 'react'
import logo from '../../public/navLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div className="text-center flex flex-col place-content-center">
        <Image
          src={logo}
          className="w-20 h-20 mx-auto my-4"
          alt="company-logo"
        />
        <p className="uppercase tracking-widest font-">
          Innovation. Collaboration. Success.
        </p>
        <div className="flex items-center justify-evenly max-w-[330px] m-auto py-4 gap-8">
          <a
            href="https://www.linkedin.com/in/mzain-ul-abideen/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://github.com/Tufalpha1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
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
        <hr />
        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-600 line-clamp-2">
          <h6 className="py-2">© Zain 2023. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer