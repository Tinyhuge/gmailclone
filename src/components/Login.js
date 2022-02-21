import { Button, TextField } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "../css/Login.css";

function Login() {
  return (
    <div className="field">
      <TextField
        className="field__input"
        label="Enter email or phone.."
        variant="outlined"
      />
      <TextField
        className="field__input"
        label="Enter email or phone.."
        variant="outlined"
      />
      <TextField
        className="field__input"
        label="Enter email or phone.."
        variant="outlined"
      />
    </div>
  );
}

export default Login;
