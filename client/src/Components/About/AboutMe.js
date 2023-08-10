import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./AboutMe.css";
import Animations from "../../utilities/Animations";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am an undergraduate student at National Institite of Technology Patna, pursuing B-tech in Computer Science and Engineering. I am a coding enthusiast with strong knowledge of Data Structures and Algorithms and also having experience in web development. My interests include competitive programming, Public speaking, dairy-writing and teaching. Strive to be the best version of myself everyday.",
    highlights: {
      bullets: [
        "Mentor at IEEE Stunet Branch NIT Patna",
        "Web Cordinator at Incubation Center NITP Patna",
        "Management Commitee member at NSS NIT Patna",
        "Former Mathematics Teacher at Ikash Education",
      ],
      heading: "Positions / Responsibilities:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight_blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="aboutme_container screen_container fade_in"
      id={props.id || ""}
    >
      <div className="aboutme_parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="aboutme_card">
          <div className="aboutme_profile"></div>
          <div className="aboutme_details">
            <span className="aboutme_description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="aboutme_highlights">
              <div className="highlight_heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="aboutme_options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
              >
                {" "}
                Contact Me{" "}
              </button>
              <a
                href="https://drive.google.com/file/d/1p6vco3RaQN0c75U5VgV47p1u04Vls2EF/view?usp=drive_link"
                download="Sneha Sneha_Resume.pdf"
                target="blank"
              >
                <button className="btn highlighted-btn">My Resume</button>
              </a>
            </div>
          </div>
          {/* hello */}
        </div>
      </div>
    </div>
  );
}
