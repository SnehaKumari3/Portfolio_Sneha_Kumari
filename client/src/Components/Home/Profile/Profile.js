import React, { Component } from 'react';
import Typical from "react-typical";
import "./profile.css";
import ScrollService from "../../../utilities/ScrollService";


export default function Profile() {
  return (
    <div className="profile_container">
      <div className="profile_parent">
        <div className="profile_details">
          <div className="colm">
            <div className="colm_icons">
              <a href="https://github.com/SnehaKumari3">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/sneha-kumari-2861a9206/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/sneha__03_/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile_details_name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted_text">S</span>neha
              <span className="highlighted_text">
                {" "}K</span>umari
            </span>
          </div>
          <div className="profile_details_role">
            <span className="primary_text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Competitive Coder 💻",
                    1000,
                    "Web Developer 🌐",
                    1000,
                    "Junior 🚀",
                    1000,
                  ]}
                  
                />
              </h1>
              <span className="profile_role_tagline">
                Passionate , Enthusiastic and Open to learning new technologies
                everyday.
              </span>
            </span>
          </div>
          <div className="profile_options">
            <button className="btn primary-btn" onClick={()=>ScrollService.scrollHandler.scrollToContactMe()}> Contact Me </button>
            <a
              href="https://drive.google.com/file/d/10L5EP6cQJl52IaDAkZQnbRrJ7N74nYsc/view"
              download="Sneha Sneha_Resume.pdf"
            >
              <button className="btn highlighted-btn">My Resume</button>
            </a>
          </div>
        </div>
        <div className="profile_picture">
          <div className="profile_picture_bg">
          </div>
        </div>
      </div>
    </div>
  );
}
