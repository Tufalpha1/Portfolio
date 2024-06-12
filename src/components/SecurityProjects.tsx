"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";


function SecurityProjects() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-20 lg:py-20 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="py-8 text-center text-4xl sm:text-5xl 2xl:text-6xl bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">Cybersecurity Projects</h2>
                {/* <p className="mt-1 text-gray-700">Stay in the know with insights from industry experts.</p> */}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative flex flex-col w-full min-h-60 bg-red-700 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] bg-center bg-cover  rounded-xl hover:shadow-lg transition">

                    <div className="flex-auto p-4 md:p-6">
                        <Noise />
                        <h3 className="sm:absolute sm:top-40 mx-auto text-left text-xl sm:text-5xl xl:text-6xl text-gray-100 tracking-tighter">Red Team Projects &#129109;</h3>
                    </div>
                </div>


                <Link className="group" href="/buffer-overflow">
                    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <Image className="absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/assets/security/buffer-overflow/buffer-overflow.png" alt="Buffer Overflow" width={1000} height={1000}/>
                        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-red-600 text-white py-1.5 px-3">
                            Operating Systems
                        </span>
                    </div>

                    <div className="mt-7">
                        <h3 className="text-xl tracking-tighter font-bold text-black  group-hover:text-gray-700">
                            Buffer Overflow Exploitation in FreeFloat FTP Server
                        </h3>
                        <p className="text-sm mt-3 text-gray-500 group-hover:text-gray-400">
                            Exploiting stack buffer overflow vulnerability on FreeFloat FTP server that results in a reverse shell to the victim machine.
                        </p>
                        <p className="mt-5 inline-flex items-center gap-x-1 text-red-600 tracking-tighter decoration-2 group-hover:underline font-medium">
                            Read more
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </div>
                </Link>

                <Link className="group" href="/arp-poisoning">
                    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <Image className="absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/assets/security/arp-poisoning/arp-poisoning.jpg" alt="MITM Attack" width={1000} height={1000}/>
                        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-red-600 text-white py-1.5 px-3">
                            Network Security
                        </span>
                    </div>

                    <div className="mt-7">
                        <h3 className="text-xl tracking-tighter font-bold text-black  group-hover:text-gray-700">
                            MITM Attack using ARP Spoofing
                        </h3>
                        <p className="text-sm mt-3 text-gray-500 group-hover:text-gray-400">
                            Man in the middle attack by ARP poisoning using Ettercap graphical tool to intercept passwords.
                        </p>
                        <p className="mt-5 inline-flex items-center gap-x-1 text-red-600 tracking-tighter decoration-2 group-hover:underline font-medium">
                            Read more
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}


const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)] rounded-xl"
      style={{
        backgroundImage: "url(/noise.jpg)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};

export default SecurityProjects;