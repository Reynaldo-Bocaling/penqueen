import React from "react";

const About = () => {
  return (
    <section id="about" className="relative w-full px-4">
      <div className="relative double-box max-w-6xl mx-auto md:h-[30rem] flex flex-col md:flex-row items-center justify-center gap-12 mt-[18rem] md:mt-[25rem] mb-20 px-5 bg-sky-500  rounded-3xl border-3 border-black pb-9 md:pb-0">
        <div className="relative double-box child w-full md:w-2/5 h-full -translate-y-16 z-30">
          <div className="w-full h-full bg-[#cb71ee] rounded-3xl border-3 border-black px-3">
            <img
              src="/img/about.png"
              className="w-full -translate-y-28"
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start">
          <h1 className="frozen-title text-stroke font-extra text-white text-6xl font-bold mb-7 text-center md:text-left">
            About Us
          </h1>
          <p className="text-base md:text-lg text-white  tracking-wider font-mono py-2  text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            eligendi fugiat deleniti cumque magni quae id quod debitis
            reiciendis omnis.
          </p>
          <p className="text-base md:text-lg text-white  tracking-wider font-mono py-2  text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            eligendi fugiat.
          </p>
          <button class="frozen-button text-white text-lg py-3 px-7 mt-3 w-[15rem]">
            Buy Now
          </button>
        </div>

        <img
          src="/img/buy-tag.png"
          className="w-[15rem] absolute top-1/2 right-20 -translate-y-1/2  md:-top-20 md:-right-10 md:-translate-x-0 md:-translate-y-0 rotate-12 z-30 -mt-20 md:-mt-7"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
