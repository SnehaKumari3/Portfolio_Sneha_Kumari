import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume_heading">
        <div className="resume_main_heading">
          <div className="heading_bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading_date">
                {props.fromDate + props.toDate}
              </div>
            ) : (
              <div>
              </div>
            )}
        </div>
          <div className="resume_sub_heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume_heading_description">
            <span>{props.description ? props.description : ""}</span>
          </div>
          
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Experience", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];



  const programmingSkillDetails = [
    { skill: "C", ratingPercentage: 90 },
    { skill: "C++", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Bootstrap", ratingPercentage: 70 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React Js", ratingPercentage: 70 },
    { skill: "Firebase", ratingPercentage: 60 },
    { skill: "Figma", ratingPercentage: 85 },
    { skill: "Canva", ratingPercentage: 90 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromdate: "", toDate: "" },
      description:
        "- A personal website to showcase all my details and projects at one place.",
      subHeading: "Tech Stack: React-JS, CSS and Bootstrap",
    },
    {
      title: "Apki Dukan",
      duration: { fromdate: "", toDate: "" },
      description:
        "- An E-commerce website to connect the users with their local shops. The website has the functionality of login, signup,add and remove items from basket and checkout.",
      subHeading: "Technologies Used: React JS, CSS, Bootstrap, Firebase",
    },
    {
      title: "Music Player Website",
      duration: { fromdate: "", toDate: "" },
      description:
        "- A music website with the functionality of play, pause, next, back and auto-play.",
      subHeading: "Technologies Used: HTML, CSS, Bootstrap, JavaScript",
    },
    {
      title: "Rock-Paper-Scissor",
      duration: { fromdate: "", toDate: "" },
      description:
        "- An online rock-paper-scissor game that can be played with computer  that has the live score updation features.",
      subHeading: "Technologies Used: HTML, CSS, Bootstrap, JavaScript",
    },
  ];

  const ResumeDetails = [
    <div className="resume_screen_container" key="education">
      <ResumeHeading
        heading={"National Institute of Technology, Patna"}
        subHeading={"B-Tech in Computer Science and technology"}
        description={"- CGPA : 9.20/10.0"}
        fromDate={"2020-"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"Rajendra Memorial Womens College, Nawada "}
        subHeading={"Senior Secondary"}
        description={"- Score : 91 %"}
        fromDate={"2018-"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Modern English School, Nawada"}
        subHeading={"Higher Secondary"}
        description={"- Score : 95.8 %"}
        fromDate={" "}
        toDate={"2018"}
      />
    </div>,
    
    <div className="resume_screen_container" key="work_experience">
      <div className="experience_container">
        
        <ResumeHeading
        heading={"Technical Intern at Piramal Finance"}
        subHeading={"Tools & technologies used: ReactJs, Material-UI, SpringBoot, Thymeleaf"}
        description={"-  worked on the frontend of a project called Test-Assure, which aimed to ease the testing process, and show statistics related to test cases. Added an admin panel that provided comprehensive reports for each developer. Developed an algorithm to generate all possible test cases for a given json schema and implemented the user interface for the project called Test-Data-Generator using Thymeleaf."}
        fromDate={"May, 2023 - "}
        toDate={"July, 2023"}
        />
        {/* <ResumeHeading
        heading={"IEEE Student Branch, NIT Patna"}
        subHeading={"Mentor"}
        description={"- IEEE Student Branch NIT Patna is a technical student welfare club under IEEE Kolkata section R-10. I have contributed to the official website, made some project and conducted many events."}
        fromDate={"July, 2021 - "}
        toDate={"present"}
        />
        <ResumeHeading
        heading={"Incubation Center, NIT Patna"}
        subHeading={"Web Cordinator"}
        description={"- web team member of the official website of Incubation Center, NIT Patna"}
        fromDate={"Aug, 2021 - "}
        toDate={"present"}
        /> */}
      </div>
    </div>,

    <div
    className="resume_screen_container programming_skills_container"
    key="programming_skills"
    >
      {programmingSkillDetails.map((skill, index) => (
      <div className="skill_parent" key={index}>
        <div className="heading_bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill_percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active_percentage"
            ></div>
          </div>
      </div>
      ))}
    </div>,

    <div className="resume_screen_container" key="projects">
    {projectDetails.map((projectDetails, index) => (
      <ResumeHeading
      key={index}
      heading={projectDetails.title}
      subHeading={projectDetails.subHeading}
      description={projectDetails.description}
      fromDate={projectDetails.duration.fromdate}
      toDate={projectDetails.duration.toDate}
      />
    ))}
    </div>,

    <div className="resume_screen_container" key="interests">
        <ResumeHeading
          heading="Teaching"
          description="- I love sharing my knowledge and have taught Mathematics to 50+ underprivileged Students(class 9th-10th) online for 6 Months during the Covid-19 Pandemic."
        />
        <ResumeHeading
          heading="Competitive Programming"
          description="- Problem Solving is something that fascinates me a lot. I have been practicing competitive Coding for the last one year and have solved more than 1000 questions on different coding platforms like Leetcode, Codeforces, Codechef, and Hackerrank."
        />
        <ResumeHeading
          heading="Listening Audio Books and Music"
          description="- Listening to audio books and music while walking or travelling is something i can never compromise with."
        />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: {
        transform: "translateY(" + index * offsetHeight * -1 + "px)",
      },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected_bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet_logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B_img"
        />
        <span className="bullet_label">
            {bullet.label}
        </span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume_details_carousal"
      >
        {ResumeDetails.map((ResumeDetails) => ResumeDetails)}
      </div>
    );
  };

  useEffect(()=>{
    return()=>{
      fadeInSubscription.unsubscribe();
    };
  },[fadeInSubscription]);

  return (
    <div className="resume_container screen_container fade_in" id={props.id || ""}>
      <div className="resume_content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume_card">
          <div className="resume_bullets">
            <div className="bullet_container">
              <div className="bullet_icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume_bullet_details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
