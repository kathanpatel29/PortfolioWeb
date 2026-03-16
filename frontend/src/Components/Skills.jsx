import React from "react";
import { mySkills } from "../data/title";
import Icon from "./Custom/Icon";
import { skills } from "../data/skill";

function Skills() {
  return (
    <div className="w-full py-4">
      <div className="bg-[#111d3a] border border-[#2e3d6f] rounded-xl p-4 sm:p-5">
        <div className="font-bold text-xl text-[#37BCF8] pb-3 text-left">Skills</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-center">
          {skills.map((element) => {
            return (
              <div
                key={element.name}
                className="flex flex-col items-center gap-1 bg-[#0f1a35] rounded-lg p-2"
              >
                <img src={element.icon} alt={element.name} className="h-8 w-8 object-contain" />
                <div className="text-xs font-medium">{element.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
