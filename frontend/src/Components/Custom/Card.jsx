import React from "react";
import { viewCode } from "../../data/title";
import github from "../../assets/github.png";
import githubActive from "../../assets/github_active.png";
import ButtonWithImage from "../Custom/ButtonWithImage";

function Card({ name, img, description, demoLink, githubLink }) {
  return (
    <div className="w-full shadow-lg bg-[#1f2945] p-4 rounded-lg flex flex-col items-center h-[500px]">
      <div className="h-110 overflow-hidden flex flex-col items-center justify-start">
        <img src={img} className="h-1/3 w-full object-contain rounded-t-lg pb-4" />
        <div className="text-lg font-semibold pb-2 text-[#37BCF8]">{name}</div>
        <div className="w-11/12 h-1/2 overflow-y-auto leading-loose text-sm mx-auto pb-2">
          {description}
        </div>
        <div className="flex gap-2 py-4">
          {demoLink ? (
            <a href={demoLink} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold">
              Live Demo
            </a>
          ) : null}
          {githubLink ? (
            <a href={githubLink} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-[#10172A] border border-[#37BCF8] text-[#37BCF8] hover:bg-[#223354] text-xs font-semibold">
              {viewCode}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
