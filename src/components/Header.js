import React from "react";
import "../css/Header.css";
import AddIcon from "@mui/icons-material/Add";

import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Avatar, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <ArrowBackIosIcon
          onClick={() => navigate(backButton)}
          fontSize="large"
          className="header__"
        />
      ) : (
        <PersonIcon className="header__icon" fontSize="large" />
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
          alt="tinder-logo"
        />
      </Link>
      <Link to="/chats">
        <ForumIcon className="header__icon" />
      </Link>
    </div>
  );
}

export default Header;
