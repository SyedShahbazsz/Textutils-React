// Modified Navbar.js with Theme Dropdown included
import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-4`}
    >
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#">
          {props.title}
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu section */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          {/* Left side: Links */}
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              {/* <Link className="nav-link active me-3" aria-current="page" to="/"> */}
              <a className="nav-link active me-3" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link me-3" to="/about">
                {props.aboutText}
              </Link> */}
            </li>
          </ul>

          {/* Right side: Switch + Theme dropdown + Search */}
          <div className="d-flex align-items-center gap-3">
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "#0c3177" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Enable DarkMode
              </label>
            </div>

            {/* Theme dropdown */}
            <select
              className="form-select w-auto"
              value={props.themeColor}
              onChange={props.onThemeChange}
              title="Select Theme Background"
            >
              {props.mode === "light" ? (
                <>
                  <option value="#ffffff">Default White</option>
                  <option value="#d1f2a0">Light Green</option>
                  <option value="#e3f2fd">Sky Blue</option>
                  <option value="#fff3cd">Soft Yellow</option>
                </>
              ) : (
                <>
                  <option value="#042743">Default Dark Blue</option>
                  <option value="#2d2d2d">Dark Gray</option>
                  <option value="#1a1a2e">Midnight Purple</option>
                  <option value="#121212">Pure Black</option>
                </>
              )}
            </select>

            {/* Search */}
            <form className="d-flex mt-2 mt-lg-0" role="search">
              <input
                className="form-control me-2 mx-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  // toggleMode: PropTypes.func.isRequired,
  // themeColor: PropTypes.string.isRequired,
  // onThemeChange: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
