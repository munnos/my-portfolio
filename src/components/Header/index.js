import React from "react";
import Navigation from "../Navigation";

function Header({ currentPage }) {
  return (
    <header currentPage = {currentPage}></header>
  );
}

export default Header;
