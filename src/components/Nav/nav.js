import React, { useState } from "react";
import { Link } from "react-scroll";

export default function nav() {
  return (
    <div className="fixed top-0 w-full h-[100px] flex justify-between items-center px-5 bg-blue-700 text-amber-700 text-2xl font-serif">
      <div>
        <h1>Patrick Vona</h1>
      </div>
      <ul className="flex">
        <li className="pr-5">
          <Link to="Home">Home</Link>
        </li>
        <li className="pr-5">
          <Link to="aboutMe">About</Link>
        </li>
        <li className="pr-5">
          <Link to="project">Projects</Link>
        </li>
        <li className="pr-5">
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
