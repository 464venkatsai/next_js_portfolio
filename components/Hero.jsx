import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

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
            <TextGenerateEffect words="Shaping The Future Through Passion and Precision" />
          </div>
          <p
            className="xl:text-2xl lg:text-lg md:text-base sm:text-sm xs:text-xs lg:mb-16 md:mb-8 sm:mb-8 xs:mb-8 lg:tracking-wider lg:font-[500] lg:leading-loose lg:font-poppins md:"
            style={{ wordSpacing: ".15rem" }}
          >
            Hi! I&apos;m Venkat sai, an Associtive Product Engineer in Deltax.
          </p>
          <Link href={"/#projects"}>
          <MagicButton
            title="Show My Work"
            icon={<BiRightArrowAlt size={20} />}
            postion="right"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
