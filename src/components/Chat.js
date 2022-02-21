import React from "react";
import "../css/Chat.css";
import { Avatar, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  const navigate = useNavigate();
  return (
    <Link to="/chat_screen">
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic}></Avatar>

        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>

        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
