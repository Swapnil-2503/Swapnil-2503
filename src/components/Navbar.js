import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/About" className={isActive("/About")}>
          About Me
        </Link>
        <Link to="/projects" className={isActive("/projects")}>
          Projects
        </Link>
        <Link to="/experience" className={isActive("/experience")}>
          Education
        </Link>
        <Link to="/profile" className={isActive("/profile")}>
          Skills
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
