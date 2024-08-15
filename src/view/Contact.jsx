import React from "react";
import { socials } from "../constant";
import SlidingText from "../components/SlidingText";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 md:-mt-12">
        <img
          src="/img/socials.png"
          alt=""
          className="order-2 md:order-1 w-full md:w-1/2"
        />
        <div className="w-full md:w-1/2 blurd-effect py-12 rounded-xl order-1 md:order-2">
          <h1 className="frozen-title text-stroke font-extra text-white text-5xl md:text-6xl font-bold mb-12 text-center">
            Contact Us
          </h1>
          <p className="text-center text-dark-purple text-lg font-mono tracking-wider max-w-lg mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="max-w-lg mx-auto flex items-center justify-around w-full gap-2">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="p-3 rounded-full bg-[#7017b5]"
              >
                <img
                  src={item.img}
                  className="w-10 h-10 md:w-12 md:h-12"
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <SlidingText />
    </section>
  );
};

export default Contact;
