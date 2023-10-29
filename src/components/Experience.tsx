import React from "react";
import Image from "next/image";
import aucss from "../../public/assets/experience/AUCSS-Logo.png";
import xgrid from "../../public/assets/experience/Xgrid_logo.png";
import cysecops from "../../public/assets/experience/Cysecops-logo.png";
const Experience = () => {
  return (
    <section className="relative isolate py-32" id="experience">
      <div>
        <p className="text-xl tracking-widest uppercase text-[#1190CB] text-center my-4">
          Experience
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold text-center leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        Where I have worked
      </h2>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 text-xs font-medium border rounded-full border-[#1190CB]">
                  1
                </div>
              </div>
              <div className="w-px h-full bg-gray-400" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5 sm:my-12">
                <Image
                  className="flex items-center justify-center w-20 h-20 my-3 rounded-full"
                  src={aucss}
                  alt="aucss-logo"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
                  Air University Cyber Security Society
                </h2>
                <p className="text-sm sm:text-base font-bold">
                  {`Developer's`} club lead (Dec 2022- Present)
                </p>
                <p>• Designed and developed aucss official website.</p>
                <p>• Organized and coordinated numerous technical events.</p>
                <p className="text-sm sm:text-base mt-2 font-bold">
                  Event Management Team Member (Dec 2021 - Dec 2022)
                </p>
                <p>• Usher for ICCWS 2022.</p>
                <p>• Hosted welcome parties of multiple batches.</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-400 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 text-xs font-medium border rounded-full border-[#43cea2]">
                  2
                </div>
              </div>
              <div className="w-px h-full bg-gray-400" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5 sm:my-6">
                <Image
                  className="flex items-center justify-center w-20 h-20 my-3 rounded-full"
                  src={xgrid}
                  alt="xgrid-logo"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
                  Xgrid
                </h2>
                <p className="text-sm sm:text-base font-bold">
                  Project Intern (May 2023 - Sep 2023)
                </p>
                <p>• Worked on my FYP {`'DecentralizedConnect'`}.</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-400 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 text-xs font-medium border rounded-full border-[#1190CB]">
                  3
                </div>
              </div>
              <div className="w-px h-full opacity-0" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5 sm:my-6">
                <Image
                  className="flex items-center justify-center w-20 h-20 my-3 rounded-full"
                  src={cysecops}
                  alt="cysecops-logo"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
                  CySecOps
                </h2>
                <p className="text-sm sm:text-base font-bold">
                  Web Development Intern (Feb 2023 - May 2023)
                </p>
                <p>• Worked on their website.</p>
                <p>• Trained two junior interns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute right-12 top-1/2 -z-20 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:right-60 lg:translate-y-0 lg:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1190CB] to-[#43cea2] opacity-0 sm:opacity-40"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};

export default Experience;
