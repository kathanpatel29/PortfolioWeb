import React from "react";
import { about } from "../data/about";

function About() {
  return (
    <div className="w-full py-4">
      <div className="bg-[#111d3a] border border-[#2e3d6f] rounded-xl p-4 sm:p-5">
        <div className="font-bold text-xl text-[#37BCF8] pb-3 text-left">About Me</div>
        <div className="sm:leading-loose sm:text-base leading-relaxed text-sm text-left">{about}</div>
      </div>
    </div>
  );
}

export default About;
