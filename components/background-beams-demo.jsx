"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { AnimatedTooltipPreview } from "./contributer-demo";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 ">
        <div className="pb-2 ">
          <h1 className="relative text-xl leading-snug  md:leading-[1.3] z-10  md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Coming Soon...
          </h1>
        </div>

        <div className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 flex flex-col items-center justify-center">
          TradeBin is a smart platform for buying, selling, and exchanging
          second-hand goods, along with lost-and-found services tailored for
          hostel-based college students. With an eco-friendly delivery system,
          we make transactions seamless, affordable, and sustainable, while
          fostering a connected campus community in NITR.
          <div className="z-20 pt-5">
            <AnimatedTooltipPreview />
          </div>
        </div>

        {/* <div className="absolute z-20  pt-5 max-w-2xl lg:w-[512] md:w-[512] ">
          <AnimatedTooltipPreview />
        </div> */}
      </div>
      <BackgroundBeams />
    </div>
  );
}
