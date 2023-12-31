import React from "react";
import logo from "../../assets/icons/long-full.png";
import "./nav.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import Profile from "./Profile";
import MobileBottomNav from "./MobileBottomNav";

function Nav() {
  return (
    <div className="navbar md:px-24">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text2">Add guests</div>
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <Profile />
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}

export default Nav;
