import React from "react";
import "../css/EmailList.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Avatar, Drawer, IconButton, SvgIcon } from "@mui/material";
import GmailSearch from "./GmailSearch";

const EmailList = ({ Icon, heading, count, label }) => {
  return (
    <div className="elist">
      <div className="elist__hover">
        <Icon className="elist__icon" />
        <div className="elist__spacing">
          <p>
            <strong>{heading}</strong>
          </p>
          {count && <p>{count}</p>}
        </div>
      </div>
    </div>
  );
};

export default EmailList;
