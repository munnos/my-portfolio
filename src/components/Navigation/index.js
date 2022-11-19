import React from "react";
import { useState } from "react";

const Navigation = ({currentPage}) => {
  return (
    <nav>
      <ul>
        <li>Home
            {currentPage === 'Home' ? "Home" : "Portfolio"}
        </li>
        <li> About</li>
      </ul>
    </nav>
  );
};

export default Navigation;
