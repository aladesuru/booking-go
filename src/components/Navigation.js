import React from "react";
// import poundIcon from "../assets/images/pounds-symbol.svg";
// import flag from "../assets/images/united-kingdom.svg";
// import booking from "../assets/images/edit.svg";
// import users from "../assets/images/user-outline.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="menu-icons pound-icon hide-menu-icon">
          <span>British Pound</span>
        </li>
        <li className="menu-icons flag-icon">
          <span>English</span>
        </li>
        <li className="menu-icons booking-icon hide-menu-icon">
          <span>Manage Booking</span>
        </li>
        <li className="menu-icons sign-in-icon hide-menu-icon">
          <span>Sign in</span>
        </li>
        <li className="menu-icons menu-icon">
          {" "}
          <br />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
