import React, { useState } from "react";
import "../css/Gmail.css";
import PersonIcon from "@mui/icons-material/Person";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Avatar, Drawer, IconButton } from "@mui/material";
import GmailSearch from "./GmailSearch";

const Gmail = () => {
  const [read, setRead] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    if (bookmarked === true) {
      setBookmarked(false);
      console.log("Bookmarked..");
    } else if (bookmarked === false) {
      setBookmarked(true);
      console.log("Removed From Bookmarked..");
    }
  };

  const handleEmailRead = () => {
    if (read === true) {
      setRead(false);
      console.log("Email Read..");
    } else if (read === false) {
      setRead(true);
      console.log("Email Unread..");
    }
  };

  return (
    <div>
      <div className="mail">
        <div onClick={handleEmailRead} className="mail__hover">
          <Avatar
            className="mail__avatar"
            alt=""
            src="https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />

          <div className="mail__layout">
            <div className="mail__name">
              {read === true ? (
                <h3>Flipkart Diwali Offer Sale!!</h3>
              ) : (
                <p>Flipkart Diwali Offer Sale!!</p>
              )}

              {read === true ? (
                <p>
                  <strong>23 Feb</strong>
                </p>
              ) : (
                <p>23 Feb</p>
              )}
            </div>
            <div className="mail__subject">
              {read === true ? (
                <p>
                  <strong>Hey Suresh, grab your offer now..</strong>
                </p>
              ) : (
                <p>Hey Suresh, grab your offer now..</p>
              )}
            </div>
            <div className="mail__message">
              <p>You are going to love these awesome offers..</p>
              <IconButton onClick={handleBookmark} className="mail__button">
                {bookmarked === true ? (
                  <StarRateIcon style={{ color: "green" }} />
                ) : (
                  <StarOutlineIcon />
                )}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
