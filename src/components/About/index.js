import React from "react";
import picture from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="aboutMe"
      className="my-20 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="text-center">
        <div className="relative group flex justify-center items-center">
          <img
            className="w-1/2 h-auto rounded-full shadow-md border border-gray-500 filter  transition duration-300 ease-in-out transform group-hover:grayscale-100 hover:opacity-75 hover:scale-105"
            src={picture}
            alt="Profile"
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 max-w-xl text-lg leading-relaxed font-raleway">
            I am a passionate MERN full-stack web developer with expertise in
            creating robust and dynamic web applications. In my free time, I
            channel my creativity through music, performing as a freelance jazz
            trombonist. Combining my technical skills and artistic flair, I
            strive to craft seamless user experiences and harmonize technology
            with artistry.
          </p>
        </div>
      </div>
    </section>
  );
}
