import React, { useEffect, useRef } from "react";
import Hamburger from "./Hamburger/Hamburger";
import Typed from "typed.js";

import avatar from "../assets/img/avatar.jpg";

import { Navigation } from "../Navigation/Navigation";

export default function Header() {
  const el = useRef(null);

  

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "JavaScript developer",
        "JavaScript developer",
        "Front-end developer",
        "React developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 500,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 100,
    });

    if (Navigation.length === 5) Navigation.shift();

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="header">
      <Hamburger />

      <div className="logo">
        <img src={avatar} alt="ava" />
      </div>

      <div className="title">
        <h1 className="name ">
          Pavel <br /> Melnik
        </h1>
        <h3 ref={el} className="subname">
          {" "}
        </h3>
      </div>

      <nav className="navigation-main">
        {Navigation.map((menuItem) => (
          <span key={menuItem.name} className="navbar-item">
            <a href={menuItem.url}>{menuItem.name}</a>
          </span>
        ))}
      </nav>
    </div>
  );
}

export { Header };
