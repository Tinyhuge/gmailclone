import React, { useState } from "react";
import "../css/GmailSearch.css";
import PersonIcon from "@mui/icons-material/Person";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Checkbox,
  Drawer,
  FormControlLabel,
  IconButton,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import EmailList from "./EmailList";
import SignButtons from "./SignButtons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // paddingLeft: "10%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // marginLeft: "10%",
  // marginRight: "11%",
  p: 4,
};

let thirdField;
// sx = { style };

const GmailSearch = () => {
  const [open, setOpen] = useState(false);
  const [dopen, setDopen] = useState(false);
  const [tabselected, setTabselected] = useState(false);
  const [tab1selected, setTab1selected] = useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(false);
    // setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <EmailList Icon={MailIcon} heading="All inboxes" count="78+" />
        <Divider />
        <EmailList Icon={InboxIcon} heading="Primary" />
        <EmailList Icon={MailIcon} heading="Social" />
        <EmailList Icon={InboxIcon} heading="Promotions" />
        <div className="search__label">
          {" "}
          <h5>All labels</h5>
        </div>
        <EmailList Icon={MailIcon} heading="Starred" />
        <EmailList Icon={InboxIcon} heading="Snoozed" count="9" />
        <EmailList Icon={MailIcon} heading="Importent" />
        <EmailList Icon={InboxIcon} heading="Sent" />
        <EmailList Icon={MailIcon} heading="scheduled" count="3" />
        <EmailList Icon={InboxIcon} heading="Outbox" />
        <EmailList Icon={MailIcon} heading="Drafts" />
        <EmailList Icon={InboxIcon} heading="All mail" count="90" />
        <EmailList Icon={MailIcon} heading="Bin" />
        <div className="search__label">
          {" "}
          <h5>Google apps</h5>
        </div>
        <EmailList Icon={InboxIcon} heading="Calender" />
        <EmailList Icon={MailIcon} heading="Contacts" count="399+" />
        <Divider />
        <EmailList Icon={InboxIcon} heading="Settings" />
        <EmailList Icon={MailIcon} heading="Help and feedback" />
      </List>
    </Box>
  );

  const handleTabChange = () => {
    if (tabselected === false) {
      setTabselected(true);
    } else if (tabselected === true) {
      setTabselected(false);
    }
  };

  const handleTextfield = () => {
    if (setTab1selected === false) {
      thirdField = (
        <div className="search__dInput2">
          <LockIcon />
          <input placeholder="password" type="password" />
        </div>
      );
    } else {
      thirdField = <h1>tt</h1>;
    }
  };

  return (
    <div>
      <Modal open={dopen} onClose={() => setDopen(false)}>
        <Box sx={style}>
          <div className="search__dBox">
            <div className="search__tab">
              <div
                onClick={() => setTab1selected(true)}
                style={{
                  backgroundColor:
                    tab1selected === true ? "white" : "lightgray",
                  borderTopColor: tab1selected === true ? "green" : "lightgray",

                  borderTopWidth: "3px",
                }}
                className="search__tab1"
              >
                <h2 className="search__tabText">Sign In</h2>
              </div>
              <div
                style={{
                  backgroundColor:
                    tab1selected === false ? "white" : "lightgray",
                  borderTopColor:
                    tab1selected === false ? "green" : "lightgray",

                  borderTopWidth: "3px",
                }}
                onClick={() => setTab1selected(false)}
                className="search__tab2"
              >
                <h2 className="search__tabText">Sign Up</h2>
              </div>
            </div>
            {/* Conditional Tab Rendering */}
            {tab1selected === true ? (
              <div className="search__dInput2">
                <AccountCircleIcon />
                <input placeholder="Username or email" type="email" />
              </div>
            ) : (
              <div className="search__dInput2">
                <MailIcon />
                <input placeholder="E-mail" type="email" />
              </div>
            )}
            <br />
            <div className="search__dInput2">
              <LockIcon />
              <input placeholder="password" type="password" />
            </div>

            <br />

            <div
              style={{ display: tab1selected === true ? "none" : "" }}
              className="search__dInput2"
            >
              <ApartmentIcon />
              <input placeholder="Institution/Organization" type="text" />
            </div>

            <br />
            <div className="search__dPassword">
              <div className="search__dCheckbox">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>

              <p>Forgot Password</p>
            </div>
            <br />
            <br />
            <Button
              className="search__dBtn"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "80%",
                color: "white",
                backgroundColor: "rgb(23, 166, 90)",
                borderRadius: "8px",
                height: "45px",
              }}
              variant="contained"
            >
              Sign In
            </Button>
            <br />
            <div className="search__dDivider">
              <div className="search__dLine" />
              <p>or</p>
              <div className="search__dLine" />
            </div>
            <br />
            <div className="search__LayoutBtn">
              <div className="search__LayoutB1">
                <SignButtons
                  Icon={GoogleIcon}
                  name="Google"
                  color="rgb(209, 73, 61)"
                />
                <SignButtons
                  Icon={FacebookIcon}
                  name="Facebook"
                  color="rgb(61, 91, 153)"
                />
              </div>
              <div className="search__LayoutB2">
                <SignButtons
                  Icon={LinkedInIcon}
                  name="LinkedIn"
                  color="rgb(5, 95, 146)"
                />
                <SignButtons
                  Icon={GitHubIcon}
                  name="GitHub"
                  color="rgb(51, 47, 47)"
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>

      <div className="search">
        <div className="search__row">
          <IconButton onClick={() => setOpen(true)} style={{ color: "black" }}>
            <MenuIcon className="search__menu" />
          </IconButton>

          <div className="search__menuSpacing">
            <input
              className="search__input"
              type="text"
              placeholder="Search in emails"
            />
            <Avatar
              onClick={() => setDopen(true)}
              className="search__avatar"
              alt=""
              src="https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmailSearch;
