import React from "react";
import Link from "next/link";
import Image from "next/image";
import eshopImg from "../../../public/assets/projects/eshop.png";
import Next from "../../../public/assets/skills/nextjs.png";
import Tailwind from "../../../public/assets/skills/tailwind.png";
import Stripe from "../../../public/assets/skills/stripe.png";
import Sanity from "../../../public/assets/skills/sanity.png";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={eshopImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Eshop</h2>
          <h3>Next JS / Tailwind / Sanity.io</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 w-full py-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-center text-[#1190CB] pt-4">
            Project
          </p>
          <h2 className="text-center py-6">Overview</h2>
          <p>
            This e-commerce platform has been constructed utilizing Next.js, a
            versatile framework. For the aesthetic presentation, Tailwind CSS
            has been employed. The content management system (CMS) utilized is
            Sanity.io. To facilitate secure and efficient payment processing,
            Stripe has been integrated into the system. This platform enables
            users to effortlessly add desired items to their shopping carts,
            complete purchases, and conveniently track their order history.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <Link href="https://github.com/Tufalpha1/Eshop">Code</Link>
            </button>
            <button className="text-white bg-gradient-to-r from-[#1190CB] via-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href="https://eshop-p.netlify.app">Demo</Link>
            </button>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <Link href="/#projects">
                <p className="">Back</p>
              </Link>
            </button>
          </div>
        </div>
        <h2 className="text-center py-4 mt-16">Technologies</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 cursor-pointer">
          <div className="hover:scale-105 ease-in duration-300 flex flex-col items-center">
            <Image
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={Next}
              alt="next"
              width={158}
              height={48}
            />
            <h3>Next JS</h3>
          </div>
          <div className="hover:scale-105 ease-in duration-300 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Tailwind}
              alt="tailwind"
              width={158}
              height={48}
            />
            <h3>Tailwind</h3>
          </div>
          <div className="hover:scale-105 ease-in duration-300 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Sanity}
              alt="sanity"
              width={158}
              height={48}
            />
            <h3>Sanity.io</h3>
          </div>
          <div className="hover:scale-105 ease-in duration-300 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Stripe}
              alt="stripe"
              width={158}
              height={48}
            />
            <h3>Stripe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
