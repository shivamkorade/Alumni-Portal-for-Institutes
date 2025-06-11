import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import bgImg from "../../assets/images/gate_compressed.png";
import "./admin.css";
import { useState, useEffect } from "react";
import Emailservice from "../Emailservice/Emailservice.jsx";
import CreateEvent from "../Event/AddEvent.jsx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PendingRegisterations from "../PendingRegistration/PendingRegistrations.jsx";
import Database from "../Database/Database.jsx";

const Admin = () => {
  // set active Tab
  const [activeTab, setactiveTab] = useState("createEvent");
  const handleSelection = (tab) => {
    setactiveTab(tab);
  };

  // State to handle screen width
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  // State for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle dropdown open/close
  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  // Track screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      // case "mailingService":
      //   return <Emailservice />;
      case "registerations":
        return <PendingRegisterations />;
      case "database":
        return <Database />;
      case "createEvent":
        return <CreateEvent />;
      default:
        return <h3>Welcome to the Admin Portal! Please select a tab.</h3>;
    }
  };

  return (
    <>
      <div className="admin-container">
        <div className="bgImg">
          <img src={bgImg} alt="" />
        </div>
        <div className="header">
          <h2>
            Admin Portal
            <hr
              style={{
                border: "2px solid white",
                position: "relative",
                margin: "auto",
                width: "50%",
                marginTop: "5px",
                opacity: 1,
              }}
            />
          </h2>
        </div>
      </div>
      <div className="navbar-container">
        <div className="nav-links">
          <Button
            onClick={() => handleSelection("createEvent")}
            className={`nav-btn ${activeTab === "createEvent" ? "active" : ""}`}
          >
            Create event
          </Button>
          <div
            to="/"
            className={`nav-btn ${activeTab === "service" ? "active" : ""} `}
          >
            Dashboard
          </div>
          {/* <Button
            onClick={() => handleSelection("mailingService")}
            className={`nav-btn ${
              activeTab === "mailingService" ? "active" : ""
            }`}
          >
            Mailing Service
          </Button> */}

          {/* <Button onClick={() => handleSelection("database")} className={`nav-btn ${activeTab === "database" ? "active" : ""}`} >
          Database
        </Button> */}

          {/* Show Database as Dropdown if screen is small */}
          {isSmallScreen ? (
            <>
              <Button
                onClick={handleDropdownClick}
                className={`dropdwn-btn ${
                  activeTab === "database" ? "active" : ""
                }`}
              >
                <ArrowDropDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseDropdown}
                // Ensure dropdown opens correctly below button
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                getContentAnchorEl={null} // Prevents unwanted full width
                PaperProps={{
                  sx: {
                    width: "auto", // Content fits width properly
                    minWidth: "150px",
                    boxShadow: 3,
                    borderRadius: "8px",
                    mt: 0.5,
                    fontFamily: "'Inria Sans', sans-serif",
                    justifyContent: "flex-start", // Align text to the left
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleSelection("registerations");
                    handleCloseDropdown(); // Close dropdown after clicking
                  }}
                  className={`nav-btn ${
                    activeTab === "registerations" ? "" : ""
                  }`}
                >
                  Registrations
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleSelection("database");
                    handleCloseDropdown(); // Close dropdown after clicking
                  }}
                  className={`nav-btn ${activeTab === "database" ? "" : ""}`}
                >
                  Database
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                onClick={() => handleSelection("registerations")}
                className={`nav-btn ${
                  activeTab === "registerations" ? "active" : ""
                }`}
              >
                Registrations
              </Button>
              <Button
                onClick={() => handleSelection("database")}
                className={`nav-btn ${
                  activeTab === "database" ? "active" : ""
                }`}
              >
                Database
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="servicesWrapper py-4">{renderContent()}</div>
    </>
  );
};

export default Admin;
