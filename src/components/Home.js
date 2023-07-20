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
        <h1 className="text-8xl font-bold mt-12 text-notindigo">
          Patrick Vona
        </h1>
        <div className="flex flex-col items-center mt-6">
          <div
            className="relative w-1/2 group"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <img
              className="w-full h-auto rounded-full shadow-md border border-gray-500 filter hover:grayscale-100 hover:opacity-25 hover:scale-105"
              src={picture}
              alt="Profile"
            />
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl text-xl leading-relaxed font-raleway opacity-0 group-hover:opacity-100 ${
                showInfo ? "opacity-100" : ""
              }`}
            >
              <p className="text-center text-2xl">
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
