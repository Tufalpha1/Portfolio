import React from "react";
import Link from "next/link";
import Image from "next/image";
import decentralizedconnect from "../../../public/assets/projects/decentralizedconnect.png";
import Tailwind from "../../../public/assets/skills/tailwind.png";
import NodeJS from "../../../public/assets/skills/node.png";
import Express from "../../../public/assets/skills/express.png";
import nextjs from "../../../public/assets/skills/nextjs.png";
import solidity from "../../../public/assets/skills/solidity.png";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={decentralizedconnect}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Decentralized Social Media Application</h2>
          <h3>Next JS/ Express/ Solidity</h3>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#B75CFF] via-[#1fcff1] to-[#19fb9b] px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          This project is currently in development.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 w-full py-8">
        <div className="col-span-4 text-center">
          <p className="uppercase text-xl tracking-widest text-center text-[#1190CB] pt-4">
            Project
          </p>
          <h2 className="py-6">Overview</h2>
          <p className="text-center">
            This is a social media application created for a decentralized
            social media platform build on the Ethereum blockchain.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <Link href="/#projects">
                <p className="">Back</p>
              </Link>
            </button>
          </div>
        </div>
        <h2 className="text-center py-4 mt-16">Technologies</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 cursor-pointer">
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={nextjs}
              alt="next"
              width={158}
              height={48}
            />
            <h3>Next JS</h3>
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Tailwind}
              alt="tailwind"
              width={158}
              height={48}
            />
            <h3>Tailwind</h3>
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={NodeJS}
              alt="nodejs"
              width={158}
              height={48}
            />
            <h3>Node JS</h3>
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Express}
              alt="express"
              width={158}
              height={48}
            />
            <h3>Express JS</h3>
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={solidity}
              alt="solidity"
              width={158}
              height={48}
            />
            <h3>Solidity</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;