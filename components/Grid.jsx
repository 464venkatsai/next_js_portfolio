import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "./data";

function Grid() {
  return (
    <section id="about" className="text-white bg-black-100 px-10">
      <BentoGrid>
        {gridItems.map((item, index) => (
          <BentoGridItem key={item.id} titleClassName={item.titleClassName} spareImgClassname={item.spareImgClassName} id={item.id} title={item.title} description={item.description} className={item.className} img={item.img} imgClassName={item.imgClassName} spareImg={item.spareImg}/>
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
