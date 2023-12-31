import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-48 flex flex-col items-center justify-center md:mt-24 md:flex-row md:space-x-6">
      <div className="pb-8 pt-6 md:space-y-5">
        <h1 className="pt-8 text-6xl font-extrabold leading-9 tracking-tighter text-black md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md text-center md:text-left">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl tracking-tighter">
          {`Sorry, we couldn't find this page.`}
        </p>
        <Link
          href="/"
          className="uppercase focus:shadow-outline-blue inline rounded-lg border border-transparent bg-[#1190CB] px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-[#43cea2] focus:outline-none dark:hover:bg-[#43cea2]"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
