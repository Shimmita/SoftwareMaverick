/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import LineEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import myLogo from "../../logo/logo_b.png";
import profile_image from '../../logo/avatar_1.jpeg';

import {
  laptopBreakPoint,
  mobileBreakPoint,
  tabletBreakPoint,
} from "../breakpoints/BreakPoints";
import "../styling/Home.css";
import ShowModal from "../modals/ShowModal";

const Home = () => {
  var num = [
    8, 23, 50, 9, 6, 4, 8, 55, 34, 346, 9, 14, 44, 90, 30, 330, 20, 10, 4, 2, 0,
    4, 66, 90,
  ];
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  //fun to handle width of the device
  const handleDeviceWidth = () => setDeviceWidth(window.innerWidth);
  //use effect hook to hadle Ui Rendering and update of the component

  useEffect(() => {
    window.addEventListener("resize", handleDeviceWidth);

    return () => window.removeEventListener("resize", handleDeviceWidth);
  });

  let textDetails =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sint quam ab maiores magnam, ducimus hic alias quos aut voluptatibus nesciunt deserunt ratione, unde nihil! Blanditiis quam iure nulla magni!";

  //modal description on how be displayed;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const optionsList = [
    "Freelance Jobs",
    "Explore Programming",
    "Explore Databases",
    "Cyber Security",
    "Computer Networking",
    "Machine Learning",
    "Artificial Intelligence",
  ];

  const handleShowModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSelected = (item) => {
    setOptionSelected(item);
    //log the selected value
    console.log(optionSelected);

    window.alert(item);
  };

  // rendering mobile version of the web

  if (deviceWidth <= mobileBreakPoint || isMobile) {
    return (
      <div>
        <header>
          <nav>
            <div className="logo-container">
              <img
                src={myLogo}
                alt="Logo"
                style={{ width: "100px" }}
                className="logo-icon"
              />
            </div>
            <div className="container-title-name">
              <Link to="/" style={{ color: "black" }}>
                <h1 className="title-name">SOFTWARE &nbsp;MAVERICKS</h1>
              </Link>
            </div>

            <div>
              <ul className="container-list-head">
                <li className="nav-list-head" onClick={handleShowModal}>
                  <Link to="/" className="link-tag-react">
                    More
                  </Link>
                </li>

                <li className="nav-list-head">
                  <Link to="/SignIn" className="link-tag-react">
                    SignIn
                  </Link>
                </li>
                <li className="nav-list-head">
                  <Link to="/SignUp" className="link-tag-react">
                    {" "}
                    SignUp
                  </Link>
                </li>

                <li className="nav-list-head">
                  <Link to="/About" className="link-tag-react">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* display modal containing the more options here */}
          <ShowModal
            isModalOpen={isModalOpen}
            handleShowModal={handleShowModal}
            handleSelected={handleSelected}
            optionsList={optionsList}
          />
        </header>

        <div className="container-mobile">
          {num.map((item, index) => {
            return (
              <div className="mobile-contents" key={index}>
                <h3
                  style={{
                    textAlign: "center",
                    marginBottom: "8px",
                    fontSize: "12px",
                  }}
                >
                  Alvin Darwin Breaks Record {item}
                </h3>
                <p style={{ fontSize: "14px" }}>
                  <LineEllipsis text={textDetails} maxLine={4} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  //render tablet

  if (
    (deviceWidth <= tabletBreakPoint && deviceWidth > mobileBreakPoint) ||
    isTablet
  ) {
    return (
      <div>
        <header>
          <nav>
            <div className="logo-container">
              <img
                src={myLogo}
                alt="Logo"
                style={{ width: "110px" }}
                className="logo-icon"
              />
            </div>
            <div className="container-title-name">
              <Link to="/" style={{ color: "black" }}>
                <h1 className="title-name">SOFTWARE &nbsp;MAVERICKS</h1>
              </Link>
            </div>

            <div>
              <ul className="container-list-head">
                <li className="nav-list-head">
                  <Link to="/SignIn" className="link-tag-react">
                    SignIn
                  </Link>
                </li>
                <li className="nav-list-head">
                  <Link to="/SignUp" className="link-tag-react">
                    {" "}
                    SignUp
                  </Link>
                </li>

                <li className="nav-list-head">
                  <Link to="/About" className="link-tag-react">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="container-tablet">
          <div className="sidebar-container-tablet">
            <div className="sidebar-item-tablet">Freelance Jobs</div>
            <div className="sidebar-item-tablet">Explore Programming</div>
            <div className="sidebar-item-tablet">Explore Databases</div>
            <div className="sidebar-item-tablet">Cyber Security</div>
            <div className="sidebar-item-tablet">Computer Networking</div>
            <div className="sidebar-item-tablet">Machine Learning</div>
            <div className="sidebar-item-tablet">Artificial Intelligence</div>
          </div>

          <div className="container-tablet-content">
            {num.map((item, index) => {
              return (
                <div className="tablet-contents" key={index}>
                  <h3
                    style={{
                      textAlign: "center",
                      marginBottom: "8px",
                      fontSize: "12px",
                    }}
                  >
                    Alvin Darwin Breaks Record
                  </h3>
                  <p style={{ fontSize: "14px" }}>
                    <LineEllipsis
                      text={textDetails}
                      maxLine="6"
                      basesOn="letters"
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  //render laptop, desktops and even Tvs

  if (deviceWidth >= laptopBreakPoint) {
    return (
      <div className="main-parent-div">  
      <div className="parent-div-laptop">
        <header>
          <nav>
            {/* <div className="logo-container">
              <img
                src={myLogo}
                alt="Logo"
                style={{ width: "110px" }}
                className="logo-icon"
              />
            </div> */}
            <div className="container-title-name">
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <h1 className="title-name">SOFTWARE &nbsp;MAVERICKS</h1>
              </Link>
            </div>

            <div>
              <ul className="container-list-head">
                <li className="nav-list-head">
                  <Link to="/SignIn" className="link-tag-react">
                    SignIn
                  </Link>
                </li>
                <li className="nav-list-head">
                  <Link to="/SignUp" className="link-tag-react">
                    {" "}
                    SignUp
                  </Link>
                </li>

                <li className="nav-list-head">
                  <Link to="/About" className="link-tag-react">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div
          className="container-laptop
        "
        >
          <div
            className="sidebar-container-laptop
          "
          >
            <div
              className="sidebar-item-laptop
            "
            >
              Freelance
            </div>
            <div
              className="sidebar-item-laptop
            "
            >
              Programming
            </div>
            <div
              className="sidebar-item-laptop
            "
            >
              Databases
            </div>

            <div
              className="sidebar-item-laptop
            "
            >
              Networking
            </div>
            <div
              className="sidebar-item-laptop
            "
            >
              CyberSecurity
            </div>

            <div
              className="sidebar-item-laptop
            "
            >
              ArtificialIntelligence
            </div>
          </div>

          <div className="parent-laptop-contents">
          <div className="container-laptop-content">
          {num.map((item, index) => {
              return (
                <div className="laptop-contents" key={index}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={profile_image}
                      style={{
                        width: "70px",
                        borderRadius: '35px',
                        border: "1px solid white",
                        marginBottom: ".5rem",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      textAlign: "center",
                      marginBottom: "5px",
                    }}
                  >
                    Shimmita Douglas
                  </h3>
                  <p
                    style={{
                      fontStyle: "oblique",
                      color: "lightblue",
                    }}
                  >
                    <LineEllipsis
                      text={textDetails}
                      maxLine="2"
                      basesOn="letters"
                    />
                  </p>
                </div>
              );
            })}
          </div>
          
          </div>
          
        </div>
      </div>

      </div>
    );
  }
};

export default Home;
