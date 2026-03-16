import React from "react";
import Timeline from "./Custom/Timeline";
import { education } from "../data/title";
import { educations } from "../data/education";

function Education() {
  return (
    <div className="w-full py-4" id="education">
      <div className="bg-[#111d3a] border border-[#2e3d6f] rounded-xl p-4 sm:p-5 mx-auto md:w-10/12 w-11/12">
        <div className="font-bold text-xl text-[#37BCF8] pb-3">{education}</div>
        <div className="w-full py-2">
          {educations.map((element, index) => {
            const leftSide = index % 2 === 0;
            const first = index === 0;
            const last = index === educations.length - 1;

            return (
              <Timeline
                key={element.year}
                year={element.year}
                organization={element.organization}
                position={element.position}
                responsibility={element.responsibility}
                first={first}
                last={last}
                leftSide={leftSide}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;
