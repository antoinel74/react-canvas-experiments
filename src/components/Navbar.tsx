import React, { useState } from "react";
import { polyrythm } from "../drawFunctions/polyrythm";
import { solarium } from "../drawFunctions/solarium";

interface NavbarProps {
  drawSwitch: (drawFunction: () => void) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ drawSwitch }) => {
  const [activeButton, setActiveButton] = useState<string>("polyrythm");

  const handleClick = (drawFunction: () => void, buttonName: string) => {
    drawSwitch(drawFunction);
    setActiveButton(buttonName);
  };
  return (
    <nav className="absolute top-0 flex w-full items-start justify-between gap-6 px-8 py-4 ">
      <a href="/" className="font-semibold uppercase">
        React TS Canvas
      </a>
      <div className="flex flex-col items-end gap-2">
        <span className="opacity-50">select canvas:</span>
        <button onClick={() => handleClick(() => polyrythm, "polyrythm")} className="flex items-center gap-2">
          polyrythm
          <span className={activeButton === "polyrythm" ? "block h-1 w-1 rounded-full bg-green-800" : ""}></span>
        </button>
        <button onClick={() => handleClick(() => solarium, "solarium")} className="flex items-center gap-2">
          solarium
          <span className={activeButton === "solarium" ? "block h-1 w-1 rounded-full bg-green-800" : ""}></span>
        </button>
      </div>
    </nav>
  );
};
