import React from "react";
import { tokenomics } from "../constant";
import { IoCopyOutline } from "react-icons/io5";
import Wave from "../components/Wave";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-9 px-5">
        <div className="w-full md:w-3/5 py-7 md:px-5 flex flex-col items-start justify-center ">
          <h1 className="frozen-title text-stroke font-extra text-white text-[3.5rem] md:text-7xl font-bold mb-7">
            Tokenomics
          </h1>
          <ul className="w-full md:w-4/5 flex flex-col items-start justify-center mt-12">
            {tokenomics.map((item, index) => (
              <li key={index} className="w-full flex ">
                <h1 className="w-1/2 text-white text-xl md:text-4xl font-title font-bold text-stroke py-3 0 border-r-2 border-x-white">
                  {item.name}
                </h1>
                <h1 className="w-1/2 text-white text-xl md:text-4xl font-title font-bold text-stroke py-3 pl-7">
                  {item.value}
                </h1>
              </li>
            ))}
          </ul>
          <div className="relative  flex items-center  gap-5 h-14 double-box tokenomics-address bg-white rounded-xl border-3 border-black px-2 md:px-5 mt-9 w-full">
            <p className="text-xs md:text-xl font-bold tracking-wider">
              0x87D988SZAS88DSS8D7SD7S877939ZAAQD8012
            </p>
            <IoCopyOutline size={24} className="text-3xl text-dark-purple" />
          </div>
        </div>
        <img src="/img/tokenomics.png" alt="" className="w-full md:w-2/5" />
      </div>
      <div className="relative  z-20 -mt-12 scale-x-[-1] scale-y-[-1]">
        <Wave position="up" />
        <div className="-translate-y-5">
          <Wave position="down" />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
