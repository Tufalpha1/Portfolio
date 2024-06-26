import React from "react";
import Link from "next/link";
import Image from "next/image";
import decentraConnect from "../../../public/assets/projects/decentra-connect.png";
import mongo from "../../../public/assets/skills/mongo.png";
import NodeJS from "../../../public/assets/skills/node.png";
import Express from "../../../public/assets/skills/express.png";
import nextjs from "../../../public/assets/skills/nextjs.png";
import ipfs from "../../../public/assets/skills/ipfs.png";
import pinata from "../../../public/assets/skills/pinata.png";
import explore from "../../../public/assets/projects/decentraconnect/explore-section.png";
import comments from "../../../public/assets/projects/decentraconnect/comment-section.png";
import group from "../../../public/assets/projects/decentraconnect/group-section.png";
import ThreeDBanner from "@/components/ThreeDBanner";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={decentraConnect}
          alt="/"
        />
        <div className="tracking-tighter absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 sm:text-5xl">
            Decentralized Social Media Application
          </h2>
          <h3 className="sm:text-2xl">Next JS / Express / IPFS</h3>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#B75CFF] via-[#1fcff1] to-[#19fb9b] px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          This project is not deployed due to technical constraints.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 w-full py-8">
        <div className="col-span-4 text-center">
          <p className="uppercase text-xl text-center text-[#1190CB] pt-4">
            Project
          </p>
          <h2 className="py-6 sm:text-4xl tracking-tighter">Overview</h2>
          <p className="text-center text-sm sm:text-base px-4 sm:max-w-4xl xl:max-w-full mx-auto">
            This is a decentralized social media platform that utilizes IPFS for
            content storage. The frontend is built with Next JS and the backend
            is built with Express. MongoDB is used as a database for storing
            user credentials and CIDs for IPFS content.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="text-white bg-gradient-to-r from-[#742ce9] via-purple-500 to-[#B75CFF] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href="https://decentralized-connect.vercel.app">Demo</Link>
            </button>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <Link href="/#projects">
                <p className="">Back</p>
              </Link>
            </button>
          </div>
        </div>
        <h2 className="text-center py-4 mt-16 sm:text-4xl tracking-tighter">
          Technologies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6 cursor-pointer">
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={nextjs}
              alt="next"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={mongo}
              alt="MongoDB"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={NodeJS}
              alt="nodejs"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Express}
              alt="express"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={ipfs}
              alt="ipfs"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-8 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={pinata}
              alt="pinata"
              width={158}
              height={48}
            />
          </div>
        </div>
        <h2 className="text-center py-4 mt-16 sm:text-4xl tracking-tighter">
          Project Banner
        </h2>
        <ThreeDBanner />
        <h2 className="text-center py-4 mt-16 sm:text-4xl tracking-tighter">
          More Snaps
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-10 gap-8 sm:max-w-xl lg:grid-cols-3 lg:mx-0 lg:max-w-none cursor-pointer">
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-400">
            <Image
              className="col-span-1 max-h- w-full object-cover sm:col-start-2 rounded-xl"
              src={explore}
              alt="explore"
              width={710}
              height={500}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-400">
            <Image
              className="col-span-1 col-start-2  w-full object-cover sm:col-start-auto rounded-xl"
              src={comments}
              alt="comments-dialog"
              width={994}
              height={707}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-400">
            <Image
              className="col-span-1 col-start-2 w-full object-cover sm:col-start-auto rounded-xl"
              src={group}
              alt="groups-section"
              width={1000}
              height={708}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
