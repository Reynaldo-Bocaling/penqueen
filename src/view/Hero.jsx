import React from "react";
import Wave from "../components/Wave";
import Header from "../components/header";

const Hero = () => {
  return (
    <section id="heros" className="relative w-full ">
      <Header />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center pt-12">
        <h1 className="text-stroke text-white text-3xl md:text-5xl font-title font-semibold leading-[4rem]">
          Welcome to
        </h1>
        <h1 className="frozen-title text-stroke font-extra text-sky-500 text-[4rem] md:text-11xl font-bold md:leading-[4rem]">
          $penqueen
        </h1>
        <div className="flex items-center center">
          <img
            src="/img/img1.png"
            className="w-1/3 -rotate-12 translate-y-12"
            alt=""
          />
          <img src="/img/img2.png" className="w-1/3" alt="" />
          <img
            src="/img/img3.png"
            className="w-1/3 rotate-12 translate-y-12"
            alt=""
          />
        </div>
      </div>
      <div className="relative -mt-40 translate-y-28 md:-mt-[42rem] md:translate-y-[22rem] z-20">
        <Wave position="up" />
        <div className="-translate-y-5">
          <Wave position="down" />
        </div>
      </div>
      <img
        src="/img/hero-bg.jpg"
        className="w-full h-full absolute top-0 left-0 z-[-1] opacity-25"
        alt=""
      />
    </section>
  );
};

export default Hero;
