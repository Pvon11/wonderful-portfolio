import React, { useState } from "react";
import picture from "../components/assets/profile.jpg";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-8xl font-bold mt-8 md:mt-12 text-notindigo">
          Patrick Vona
        </h1>
        <div className="flex flex-col items-center mt-6 md:mt-12">
          <div
            className="relative w-full sm:w-full md:w-5/6 lg:w-1/2 group"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <img
              className="w-full h-auto mx-auto rounded-full shadow-md border border-gray-500 filter hover:grayscale-100 hover:opacity-25 hover:scale-105 sm:w-full md:w-full lg:w-2/3"
              src={picture}
              alt="Profile"
            />
            {/* New container for the text with pointer-events: none */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-5/6 lg:w-full max-w-xl text-base md:text-xl leading-relaxed font-raleway opacity-0 group-hover:opacity-100 ${
                showInfo ? "opacity-100" : ""
              }`}
              style={{ pointerEvents: "none" }} // Apply pointer-events: none
            >
              <p className="text-center">
                I am a passionate MERN full-stack web developer who recently
                graduated the prestigious UPENN Bootcamp. It gave expertise in
                creating robust and dynamic web applications. In my free time, I
                channel my creativity through music, performing as a freelance
                jazz trombonist. Combining my technical skills and artistic
                flair, I strive to craft seamless user experiences and harmonize
                technology with artistry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
