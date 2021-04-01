import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">SMARTIFYLABS</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Filmes</Link>
            </li>

            <li>
              <Link to="/series">Series</Link>
            </li>

         
          </ul>
        </div>
      </div>
    </header>
  );
};
