import React from "react";

// import components
import Navigation from "./Navigation.js";
import Logo from "./Logo.js";

const Header = () => {
  return (
    <header className="clearfix">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
