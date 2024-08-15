import React, { useState } from "react";
import { navlinks, socials } from "../constant";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">
        <h1 className="text-stroke font-extra text-sky-500 text-4xl font-bold flex items-center gap-2">
          $penqueen
        </h1>
        <ul className="hidden md:flex items-center gap-7">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="text-white text-2xl">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-9">
          <div className="flex items-center gap-5">
            {socials.slice(0, 2)?.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="h-12 w-12 bg-dark-violet rounded-lg flex items-center justify-center"
              >
                <img src={item.img} className="w-[2rem]" alt="" />
              </a>
            ))}
          </div>
          <button class="frozen-button text-white text-lg py-3 px-7">
            Buy Now
          </button>
        </div>
        <button onClick={handleMenu} className="md:hidden">
          <CgMenuRight size={40} className="text-dark-purple " />
        </button>
      </nav>

      {isOpen && (
        <nav className="shadow-effect fixed top-0 left-0 bottom-0 w-9/12 bg-[#9bb9fa]  z-[999] py-5 md:hidden flex flex-col items-center justify-start duration-300 transition-all">
          <div className="flex items-center mb-20">
            <h1 className="text-stroke font-extra text-sky-500 text-4xl font-bold flex items-center gap-2">
              $penqueen
            </h1>
          </div>

          <ul className="flex flex-col items-center justify-center gap-9">
            {navlinks.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a
                  href={item.url}
                  className=" text-white text-2xl font-semibold tracking-wider"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <button class="frozen-button text-white text-lg py-3 px-12">
              Buy Now
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
