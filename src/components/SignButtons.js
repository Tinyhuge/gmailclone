import React from "react";
import "../css/SignButtons.css";
import GoogleIcon from "@mui/icons-material/Google";

const SignButtons = ({ Icon, name, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="dsearch__dButton1">
      <div className="dsearch__dBtnBox">
        <Icon fontSize="large" />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default SignButtons;
