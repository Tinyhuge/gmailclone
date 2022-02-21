import React, { useState } from "react";
import "../css/ChatScreen.css";
import { Avatar, IconButton } from "@mui/material";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Whats'app Suresh Bro?",
    },
    {
      image:
        "https://images.pexels.com/photos/908602/pexels-photo-908602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "I am enjoying the weekend!",
    },
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Ohh nice. Keep it up!",
    },
    {
      image:
        "https://images.pexels.com/photos/908602/pexels-photo-908602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Ok Bye. I'll talk to you after party..",
    },
    {
      message: "Everything is Fine, bro..",
    },
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Bye. Drive safely and call me after party..",
    },
    {
      message: "Hey, I returned from Party...",
    },
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Wow! You left your party very early, no?",
    },
    { message: "I have not left early. We all got tired so.." },
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "How many people are there in Party?",
    },
    { message: "Not more. Only me and my other 5 friends were..." },
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "What you'll do now?",
    },
    { message: "Right now I'm very tired. So I'm going for sleep.." },
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Ok then. Go sleep now. We'll talk later..",
    },
    { message: "Ok Bye.." },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessage([...message, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/22
      </p>

      {message.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chat__image"
              alt={message.name}
              src={message.image}
            ></Avatar>
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="chatScreen__inputField"
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default ChatScreen;
