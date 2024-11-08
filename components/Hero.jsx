import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { BiRightArrowAlt } from "react-icons/bi";

function Hero() {
  return (
    <div className="w-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-[100vh] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col items-center px-10">
          <div className="font-bold text-center mx-[10rem] text-xl">
            <TextGenerateEffect words="Shaping Our Future Through Passion and Precision" />
          </div>
          <p
            className="text-lg mb-16 tracking-wider font-[500] leading-loose font-poppins"
            style={{ wordSpacing: ".15rem" }}
          >
            Hi! I&apos;m Venkat sai, an Associtive Product Engineer in Deltax.
          </p>
          <MagicButton
            title="Show My Work"
            icon={<BiRightArrowAlt size={20} />}
            postion="right"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
