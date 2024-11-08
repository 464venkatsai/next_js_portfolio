import React from "react";

function MagicButton({ title, className, icon, postion, handleClick }) {
  return (
    <button
      className={
        "relative inline-flex h-12 rounded-[10px] overflow-hidden p-[1px]" +
        `${className ? className : ""}`
      }
    >
      <span className="absolute inset-[-1000%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer text-center items-center justify-center rounded-[10px] bg-slate-950 pl-10 pr-6 py-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 item">
        {postion === "left" && <span className="ml-1">{icon}</span>}
        {title}
        {postion === "right" && <span className="ml-1">{icon}</span>}
        {/* {postion==="right" && icon} */}
      </span>
    </button>
  );
}

export default MagicButton;
