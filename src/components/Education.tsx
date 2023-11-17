import React from 'react'
import Image from 'next/image'
import au from '../../public/assets/education/AU-Logo.png'
import qdc from '../../public/assets/education/QDC.jpg'
import ssps from '../../public/assets/education/SSPS.jpg'

const Education = () => {
  return (
    <section className="relative isolate py-32">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="text-xl tracking-tighter uppercase text-[#1190CB] text-center my-4">
              Education
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="#000"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
                My Academic Journey
              </span>
            </span>{" "}
          </h2>
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 py-10">
          <div className="p-5 duration-300 transform bg-[#ecf0f3] border-2 border-dashed rounded-3xl shadow-sm border-[#43cea2] hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <Image
                className="flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                src={ssps}
                alt="ssps-logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold leading-5">
                  Matriculation (2007-2018)
                </h2>
                <p className="text-sm font-medium leading-5">
                  Computer Science
                </p>
                <p className="text-sm font-medium leading-5">Grade: A+</p>
              </div>
            </div>
            <p className="text-sm text-gray-900">
              • Assistant Senior Proctor (ASP) of the Primary Section.
            </p>
            <p className="text-sm text-gray-900">
              {" "}
              • 1st Position in Urdu Essay Writing Intraschool Competition &
              Overall Best Urdu Essay Writer for the year 2017
            </p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-[#43cea2] sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
              <svg className="w-7" stroke="#fff" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-[#ecf0f3] border-2 border-dashed rounded-3xl shadow-sm border-[#1190CB]  hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <Image
                className="flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                src={qdc}
                alt="qdc-logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold leading-5">
                  Intermediate (2018-2020)
                </h2>
                <p className="text-sm font-medium leading-5">
                  Computer Science
                </p>
                <p className="text-sm font-medium leading-5">Grade: A</p>
              </div>
            </div>
            <p className="text-sm text-gray-900">• Class Prefect</p>
            <p className="text-sm text-gray-900">• College Football Team</p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-[#1190CB] sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
              <svg className="w-7" stroke="#fff" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </p>
          </div>
          <div className="relative p-5 duration-300 transform bg-[#ecf0f3] border-2 rounded-3xl shadow-sm border-[#1190CB] hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <Image
                className="flex items-center justify-center w-12 h-9 mr-2 rounded-full"
                src={au}
                alt="au-logo"
                width={48}
                height={48}
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold leading-5">
                  {`Bachelor's`} (2020-2024)
                </h2>
                <p className="text-sm font-medium leading-5">Cyber Security</p>
                <p className="text-sm font-medium leading-5">
                  Academic Standing: Good
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-900">
              • AUCSS {`Developer's`} Club lead and Event Management team
              member.
            </p>
            <p className="text-sm text-gray-900">
              • Participated in CTF events like NaSCon (1st Place), Ignite
              Hackathon and Pakistan Cybersecurity Challenge.
            </p>
            <p className="absolute top-0 right-0 flex font-extrabold items-center justify-center w-8 h-8 -mt-4 -mr-4 rounded-full bg-[#1190CB] text-white sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
              ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education