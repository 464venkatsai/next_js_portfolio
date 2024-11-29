import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "./data";

function Footer() {
  return (
    <footer className="w-full pt-20 pb-5 relative" id="contact">
      <div className="w-full h-max">
        <img
          src="/grid.svg"
          alt="footer-grid.svg"
          className="w-full h-full absolute brightness-200 top-0 left-0 object-fill"
        />
        <div>
          <h1 className="text-center line-clamp-5 font-inter font-bold text-4xl">
            Have a <span className="text-purple"> project</span> in your{" "}
            <span className="text-purple">mind ?</span>
          </h1>
          <div className="flex items-center justify-center my-[5rem]">
            <a href="mailto:venkatsaikilli464@gmail.com">
              <MagicButton
                title="Let's get in touch"
                postion="right"
                icon={<FaLocationArrow />}
              />
            </a>
          </div>
        </div>
        <div className="flex justify-between mx-10 mt-[10rem]">
          <p className="font-inter font-semibold">
            Copy Right &copy; 2024 Venkat Sai
          </p>
          <div className="flex gap-5">
            {socialMedia.map((profile) => {
              return (
                <div
                  key={profile.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <a href={profile.link} target="_blank">
                  <img
                    src={profile.img}
                    alt={profile.img}
                    width={20}
                    height={20}
                    className=""
                  />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
