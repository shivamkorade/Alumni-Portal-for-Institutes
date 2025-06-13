import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./mainPagesNavbar.css";
import { useState, useContext } from "react";
import Logo from "../../assets/images/Logo.svg";
import { useEffect } from "react";
import { useRef } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PeopleIcon from "@mui/icons-material/People";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../../Context/AuthContext";
import Button from "@mui/material/Button";

const MainPagesNavbar = () => {
  // Hover
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setHoveredDropdown(null); // Close on route change
  }, [location.pathname]);

  // User context
  const { user, logout } = useContext(AuthContext);
  const userRole = user?.role || "guest";
  // console.log(userRole);

  // Navbar active tab
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // GET WINDOW SIZE FOR RESPONSIVENESS
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive Open menu
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const openMenu = () => {
    // console.log("triggered");
    setisOpenMenu(true);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Click occurred outside of the menu, trigger close menu function
        closeMenu();
      }
    };

    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setisOpenMenu(false);
    setOpenDropdown(null);
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Handle  Logout
  const navigate = useNavigate();

  return (
    <header>
      {windowWidth <= 778 && (
        <>
          <div className=" p-2  d-flex flex-row m-0 part1Wrapper">
            <div className=" d-flex justify-content-flex-start align-items-center part1 m-auto">
              <Link
                to="/"
                className=" d-flex justify-content-flex-start align-items-center"
              >
                <img className="nav-logo" alt="" src={Logo} />
                PVPIT CONNECT
              </Link>
            </div>

            <div className=" d-flex align-items-center justify-content-end part2 m-auto">
              {(userRole === "guest" || !user) && (
                <li className="list-inline-item px-2 py-2">
                  <Link to={"/login"}>
                    <div className="signinBtn d-flex ">Sign In</div>
                  </Link>
                </li>
              )}
              {/* {(userRole === "admin" ) && (
              <li className="list-inline-item px-2 py-2">
                <Link to={''} ><div className="signinBtn d-flex ">Hello,Admin</div></Link>
              </li>

            )} */}
              {/* <Link to={'/login'} ><div className="signinBtn d-flex ">Sign In</div></Link> */}

              <span>
                <div
                  className=" navbarToggle d-flex justify-content-center"
                  onClick={openMenu}
                >
                  <MenuRoundedIcon />
                </div>
              </span>
            </div>
          </div>

          <nav className={`navbarOverlay ${isOpenMenu ? "activeDark" : ""}`}>
            <div className={`sliderNavWrapper ${isOpenMenu ? "open" : ""}`}>
              <div className="row p-4 pl-3 pb-0">
                <span>
                  <CloseRoundedIcon onClick={() => setisOpenMenu(false)} />
                </span>
              </div>
              <ul className="list list-inline mt-3">
                <li className="list-inline-item px-2 py-2">
                  <Link to="/" onClick={closeMenu}>
                    <span className="icon">
                      <HomeOutlinedIcon />
                    </span>{" "}
                    Home
                  </Link>
                </li>

                {userRole === "admin" && (
                  // <li className="jobsDropdownWrapper d-flex justify-content-center DropdownWrapper">
                  //   <Link to ="" >Jobs<span className='icon'><ArrowDropDownIcon/></span></Link>
                  //   <ul className="jobsDropdownMenu dropdown" >
                  //     <Link to="jobsearch"><li>Job Search</li></Link>
                  //     <Link to="post-job"><li>Add an Opportunity</li></Link>
                  //   </ul>
                  // </li>

                  <li className="list-inline-item px-2 py-2">
                    <Link to="#" onClick={() => toggleDropdown("jobs")}>
                      <span className="icon">
                        <WorkOutlineOutlinedIcon />
                      </span>{" "}
                      Jobs
                      <span
                        className={`icon ${
                          openDropdown === "jobs" ? "rotate" : ""
                        }`}
                      >
                        <ArrowDropDownIcon />
                      </span>
                    </Link>
                    <ul
                      className={`dropdown jobsDropdownMenu ${
                        openDropdown === "jobs" ? "show" : ""
                      }`}
                    >
                      <Link to="jobsearch" onClick={closeMenu}>
                        <li>Job Search</li>
                      </Link>
                      <Link to="post-job" onClick={closeMenu}>
                        <li>Add an Opportunity</li>
                      </Link>
                    </ul>
                  </li>
                )}

                {userRole === "student" && (
                  // <li className="jobsDropdownWrapper d-flex justify-content-center DropdownWrapper">
                  //   <Link to ="" >Jobs<span className='icon'><ArrowDropDownIcon/></span></Link>
                  //   <ul className="jobsDropdownMenu dropdown" >
                  //     <Link to="jobsearch"><li>Job Search</li></Link>
                  //     <Link to="post-job"><li>Add an Opportunity</li></Link>
                  //   </ul>
                  // </li>

                  <li className="list-inline-item px-2 py-2">
                    <Link to="studentprofile" onClick={closeMenu}>
                      <span className="icon">
                        <AccountCircleIcon />
                      </span>
                      Profile
                    </Link>
                  </li>
                )}

                {/* COMMUNITY */}
                <li className="list-inline-item px-2 py-2">
                  <Link to="#" onClick={() => toggleDropdown("community")}>
                    <span className="icon">
                      <PeopleIcon />
                    </span>{" "}
                    Community
                    <span
                      className={`icon ${
                        openDropdown === "community" ? "rotate" : ""
                      }`}
                    >
                      <ArrowDropDownIcon />
                    </span>
                  </Link>
                  <ul
                    className={`dropdown communityDropdownMenu ${
                      openDropdown === "community" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="yearbook" onClick={closeMenu}>
                        Yearbook
                      </Link>
                    </li>
                    <li>
                      <Link to="alumni" onClick={closeMenu}>
                        Alumni
                      </Link>
                    </li>

                    <li>
                      <Link to="donation">Donation</Link>
                    </li>
                    {/* <li><Link to="chapters" onClick={closeMenu}>Chapters</Link></li>
                        <li><Link to="map" onClick={closeMenu}>Map</Link></li>*/}
                  </ul>
                </li>

                {/* EVENTS */}
                <li className="list-inline-item px-2 py-2">
                  <Link to="#" onClick={() => toggleDropdown("events")}>
                    <span className="icon">
                      <CalendarMonthOutlinedIcon />
                    </span>{" "}
                    Events
                    <span
                      className={`icon ${
                        openDropdown === "events" ? "rotate" : ""
                      }`}
                    >
                      <ArrowDropDownIcon />
                    </span>
                  </Link>
                  <ul
                    className={`dropdown eventsDropdownMenu ${
                      openDropdown === "events" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    {/* <li>
                      <Link to="feed" onClick={closeMenu}>
                        Campus Feed
                      </Link>
                    </li> */}
                    <li>
                      <Link to="gallery" onClick={closeMenu}>
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* ABOUT */}
                <li className="list-inline-item px-2 py-2">
                  <Link to="#" onClick={() => toggleDropdown("about")}>
                    <span className="icon">
                      <InfoOutlinedIcon />
                    </span>{" "}
                    About
                    <span
                      className={`icon ${
                        openDropdown === "about" ? "rotate" : ""
                      }`}
                    >
                      <ArrowDropDownIcon />
                    </span>
                  </Link>
                  <ul
                    className={`dropdown aboutDropdownMenu ${
                      openDropdown === "about" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="ourstory">Our Story</Link>
                    </li>
                    <li>
                      <Link to="team" onClick={closeMenu}>
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to="career" onClick={closeMenu}>
                        Career
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="list-inline-item px-2 py-2">
                      <Link to={'/register'} onClick={closeMenu}><span className='icon' ><VpnKeyOutlinedIcon/></span>Register</Link>
                    </li> */}

                {/* Profile,Register btn */}

                {(userRole === "guest" || !user) && (
                  <li className="list-inline-item px-2 py-2">
                    <Link to={"/register"} onClick={closeMenu}>
                      <span className="icon">
                        <VpnKeyOutlinedIcon />
                      </span>
                      Register
                    </Link>
                  </li>
                )}
                {userRole === "student" && (
                  <li className="list-inline-item px-2 py-2">
                    <Button
                      onClick={() => {
                        logout();
                        closeMenu();
                      }}
                      className="btn"
                    >
                      <span style={{ padding: "5px" }}>
                        <LogoutIcon />
                      </span>
                      Logout
                    </Button>
                  </li>
                )}
                {userRole === "admin" && (
                  <li className="list-inline-item px-2 py-2">
                    <span style={{ padding: "5px" }}>
                      <LogoutIcon />
                    </span>
                    <Button
                      onClick={() => {
                        logout();
                        closeMenu();
                      }}
                      className="btn"
                    >
                      Logout
                    </Button>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </>
      )}

      {windowWidth > 778 && (
        <div className="row  m-0">
          <div className="col-4 d-flex justify-content-center align-items-center part1 m-auto">
            <Link
              to="/"
              className=" d-flex justify-content-center align-items-center"
            >
              <img className="nav-logo" alt="" src={Logo} />
              PVPIT CONNECT
            </Link>
          </div>
          <div className="col-8 d-flex align-items-center part2 m-auto">
            <ul className="d-flex justify-content-center align-items-center ">
              {/* <li className=""><Link to ="/"   className={`${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')} aria-current="home">Home</Link></li> */}

              <li className="">
                <Link to="/">Home</Link>
              </li>

              {userRole === "admin" && (
                <li
                  className="jobsDropdownWrapper d-flex justify-content-center DropdownWrapper"
                  onMouseEnter={() => setHoveredDropdown("jobs")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <Link
                    to="#"
                    className={`${
                      hoveredDropdown === "jobs" ? "setActive" : ""
                    }`}
                  >
                    Jobs
                    <span className="icon">
                      <ArrowDropDownIcon />
                    </span>
                  </Link>

                  <ul
                    className={`jobsDropdownMenu dropdown ${
                      hoveredDropdown === "jobs" ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="jobsearch">Job Search</Link>
                    </li>
                    <li>
                      <Link to="post-job">Add an Opportunity</Link>
                    </li>
                  </ul>
                </li>
              )}

              <li
                className="communityDropdownWrapper d-flex justify-content-center DropdownWrapper"
                onMouseEnter={() => setHoveredDropdown("community")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link
                  to="#"
                  className={`${
                    hoveredDropdown === "community" ? "setActive" : ""
                  }`}
                >
                  Community
                  <span className="icon">
                    <ArrowDropDownIcon />
                  </span>
                </Link>

                <ul
                  className={`communityDropdownMenu dropdown ${
                    hoveredDropdown === "community" ? "show" : ""
                  }`}
                >
                  <li>
                    <Link to="yearbook">Yearbook</Link>
                  </li>
                  <li>
                    <Link to="alumni" onClick={closeMenu}>
                      Alumni
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="chapters">Chapters</Link>
                  </li>
                  <li>
                    <Link to="map">Map</Link>
                  </li> */}
                  <li>
                    <Link to="donation">Donation</Link>
                  </li>
                </ul>
              </li>

              <li
                className="eventsDropdownWrapper d-flex justify-content-center DropdownWrapper"
                onMouseEnter={() => setHoveredDropdown("events")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link
                  to=""
                  className={`${
                    hoveredDropdown === "events" ? "setActive" : ""
                  }`}
                >
                  {" "}
                  Events{" "}
                  <span className="icon">
                    <ArrowDropDownIcon />
                  </span>
                </Link>
                <ul
                  className={`eventsDropdownMenu dropdown  ${
                    hoveredDropdown === "events" ? "show" : ""
                  }`}
                >
                  <Link to="/events">
                    <li> Events</li>
                  </Link>
                  {/* <Link to="feed">
                    <li>Campus Feed</li>
                  </Link> */}
                  <Link to="gallery">
                    <li>Gallery</li>
                  </Link>
                </ul>
              </li>

              <li
                className="aboutDropdownWrapper d-flex justify-content-center DropdownWrapper"
                onMouseEnter={() => setHoveredDropdown("about")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link to="">
                  {" "}
                  About{" "}
                  <span className="icon">
                    <ArrowDropDownIcon />
                  </span>
                </Link>
                <ul
                  className={`aboutDropdownMenu dropdown  ${
                    hoveredDropdown === "about" ? "show" : ""
                  }`}
                >
                  <Link to="ourstory">
                    <li>Our Story</li>
                  </Link>
                  <Link to="team">
                    <li>Team</li>
                  </Link>
                  <Link to="career">
                    <li>Career</li>
                  </Link>
                </ul>
              </li>

              {/* Login,Logout btn */}
              {(userRole === "guest" || !user) && (
                <li className="">
                  <Link to="/login">Login</Link>
                </li>
              )}
              {userRole === "student" && (
                <li>
                  <Button onClick={logout} className="">
                    Logout
                  </Button>
                </li>
              )}
              {userRole === "admin" && (
                <li>
                  <Button onClick={logout} className="">
                    Logout
                  </Button>
                </li>
              )}

              {/* Profile,Register btn */}

              {(userRole === "guest" || !user) && (
                <li>
                  <Link to="register" className="highlight">
                    Register
                  </Link>
                </li>
              )}
              {/* Show Profile if user is a student */}
              {userRole === "student" && (
                <li>
                  <Link to="studentprofile" className="highlight no-hover">
                    Profile
                  </Link>
                </li>
              )}
              {/* Hide both options for admin */}
              {userRole === "admin" && (
                <li>
                  <Link to="" className="highlight no-hover">
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* <div className="col-1"></div> */}
        </div>
      )}
    </header>
  );
};

export default MainPagesNavbar;
