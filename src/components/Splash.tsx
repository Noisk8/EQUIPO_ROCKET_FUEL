import React from "react";
import AstronautImage from "./AstronautImage";
import Starfield from "./Starfield";


function Splash(){
  const astronautImage = "/images/tao.png";
  const widths = [400, 800]; // Define desired widths here.
  const sizes = "(max-width: 800px) 400px, 800px"; // Define sizes attribute here.

  return (
    <div className="relative h-full bg-black">
      <Starfield />
      <div
        id="splash-bg-fallback"
        className="absolute inset-0 hidden opacity-40"
      >
      </div>
      <div className="relative grid h-full place-items-center sm:grid-cols-2">
        <div className="flex flex-col gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end">
          <h1>Icon</h1>
          <div className="gradient-text text-center font-extrabold tracking-tighter text-8xl">
            EQUIPO
            <br /> ROCKET
            <br />
          </div>
        </div>
        <div
          id="astronaut"
          className="w-2/3 max-w-3xl self-start sm:w-10/12 sm:self-auto sm:justify-self-start"
        >
          <AstronautImage
            className="object-cover w-full h-full"
            src={astronautImage}
            widths={widths}
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  );
}

export {Splash}