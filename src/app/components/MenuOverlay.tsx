import React from "react";
import Navlink from "./NavLink";

export default function MenuOverlay() {
  return (
    <ul className="flex flex-col py-4 items-center">
      <Navlink href="#about" title="About" />
      <Navlink href="#project" title="Projects" />
      <Navlink href="#contact" title="Contact" />
    </ul>
  );
}
