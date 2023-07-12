import React from "react";


const Contact = () => {
  return (
    <section id="contact" className="w-full lg:h-screen mt-48">
      <div className="isolate px-6 py-2 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xl tracking-widest uppercase text-[#1190CB] text-center">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-6">Get in touch</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {`I am available for freelance work. Contact me and we'll talk.`}
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="text-white block w-full bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {`Let's talk`}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
