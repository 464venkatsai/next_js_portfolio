import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import React from "react";


export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid mx-auto auto-rows-[3.5rem] grid-cols-12 gap-5 max-w-[75rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImgClassname,
  spareImg,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="flex h-full w-full relative">
        {img!=="" && <div className="w-full absolute h-full">
          <img
            src={img}
            alt={img}
            className={`w-full h-full -z-50 ${imgClassName}`}
          />
        </div>}
        

        {spareImg !== "" && (
          <div className="w-full absolute bottom-[-25%] right-[-5%] h-full">
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-contain ${spareImgClassname}`}
            />
            {id === 6 && (
              <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                  <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Gradients X Animations
                  </p>
                </div>
              </BackgroundGradientAnimation>
            )}
          </div>
        )}
        <div
          className={`${
            (id === 5 && "mt-[4.5rem]")
          } flex flex-col group-hover/bento:translate-x-4 z-20 transition duration-200 mx-7 mt-3 ${id===3 && "justify-center"}`}
        >
          <div
            style={{ wordSpacing: ".1rem" }}
            className={`${
              id === 5 && "text-[1.4rem] tracking-wider"
            } uppercase text-[.6rem] z-10 relative dark:text-neutral-400`}
          >
            {description}
          </div>
          <div
            style={{ wordSpacing: ".1rem" }}
            className={`${titleClassName} font-inter z-10 tracking-wide font-semibold dark:text-neutral-200 mb-2 mt-2`}
          >
            {title}
          </div>
        </div>
          {id===3 && (
            <div className=" absolute -z-0 flex gap-5 mr-5 right-0 bottom-0 h-full">
              <div className="flex flex-col gap-3 -mt-3">
                {
                  ["React","Next","Node"].map((item)=>{
                    return <span key={item} className="px-10 py-6 rounded-[10px] opacity-100 bg-[#10132E] font-inter">{item}</span>
                  })
                }
                <span className="px-10 py-7 rounded-[10px] opacity-100 bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="px-6 py-6 rounded-[10px] opacity-100 bg-[#10132E] font-inter"></span>
                {
                  ["Express","Django","Mongo"].map((item)=>{
                    return <span key={item} className="px-10 py-6 rounded-[10px] opacity-100 bg-[#10132E]">{item}</span>
                  })
                }
              </div>
            </div>
          )}
      </div>
    </div>
  );
};
