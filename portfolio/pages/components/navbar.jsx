import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../public/code.png";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-black p-3 mb-16 mt-4">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <div>
              <Image src={logo} className="" width="40px" height="40px" />
            </div>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-zinc-700 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="font-work-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white ease-in duration-500 items-center justify-center hover:bg-zinc-700 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="./posts">
              <a className="font-work-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white ease-in duration-500 items-center justify-center hover:bg-zinc-700 hover:text-white">
                Posts
              </a>
            </Link>
            <Link href="/">
              <a className="font-work-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white ease-in duration-500 items-center justify-center hover:bg-zinc-700 hover:text-white">
                About Me
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
