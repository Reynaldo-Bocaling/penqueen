import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full  z-30 pt-2 pb-12 ">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <h1
            key={i}
            className="text-stroke text-white text-5xl font-title font-semibold flex items-center gap-12"
          >
            <h1 className="font-title pl-5">$penqueen</h1>
            <span>*</span>

            <h1 className="font-title pl-5"> Buy Now</h1>
            <span>*</span>
          </h1>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
