import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100 bg-black shadow-2xl justify-between mb-20">
      <a className="btn btn-ghost text-xl text-primary-100" href="/">
        <img src="src/assets/transparent_2024-07-17T08-27-07.png" width={40} />
      </a>
      <div className="text-primary-600">
        <a className="btn btn-ghost text-xl" href="https://github.com/Burnlees">
          <FaGithub />
        </a>
        <a
          className="btn btn-ghost text-xl"
          href="https://linkedin.com/in/josh-burnlees-729682304"
        >
          <FaLinkedin />
        </a>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost rounded-btn text-xl"
          >
            <RxHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-primary-900 rounded-box z-[1] mt-4 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
