import React from "react";
import "../css/WhatsappList.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Avatar, IconButton } from "@mui/material";

const WhatsappList = () => {
  return (
    <div className="list">
      <div className="list__hover">
        <Avatar
          className="list__avatar"
          alt=""
          src="https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />

        <div className="list__layout">
          <div className="list__name">
            <h3>Suresh TechieAid</h3>
            <p>04:38 PM</p>
          </div>

          <div className="list__message">
            <p>How are you Rahul...??</p>
            <p>Online</p>
          </div>
          <div className="list__border" />
        </div>
      </div>
    </div>
  );
};

export default WhatsappList;
