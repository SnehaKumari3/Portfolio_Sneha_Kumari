import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import image1 from "../../assets/Images/apki-dukan_img.png";
import image4 from "../../assets/Images/portfolio_img.png";
import image3 from "../../assets/Images/music-player_img.png";
import image2 from "../../assets/Images/rock-paper-scissor_img.png";
import "./Project.css";

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <div>
      <section className="project_section fade_in" id={props.id || ""}>
        <ScreenHeading
          title={"Projects"}
          subHeading={"Some of my cool projects"}
        />
        <div className="container">
            <OwlCarousel
              className="owl_carousel"
              id="project_carousel"
              {...options}
            >
              <div className="project_card">
                <div className="project_ss">
                  <img src={image1} alt="" />
                </div>
                <h5>
                  <a href="#">
                  <i class="fa fa-globe "></i>
                  </a>
                  <b>Apki-Dukan</b>
                  <a href="https://github.com/SnehaKumari3/APKI-DUKAN">
                  <i className="fa fa-github-square"/>
                  </a>
                </h5>
                <h6 className="project_tech">
                  <b>Tech Stack: HTML, CSS, Bootstrap, JavaScript</b>
                </h6>
                <p className="project_details">
                  An online stone paper Scissors game website to play with
                  computer that has the live score updation features.
                </p>
                
              </div>
              <div className="project_card">
                <div className="project_ss">
                  <img src={image4} alt="" />
                </div>
                <h5>
                  <a href="#">
                  <i class="fa fa-globe "></i>
                  </a>
                  <b>Personal Portfolio Website</b>
                  <a href="#">
                  <i className="fa fa-github-square"/>
                  </a>
                </h5>
                <h6 className="project_tech">
                  <b>Tech Stack: React-JS, CSS and Bootstrap</b>
                </h6>
                <p className="project_details">
                A personal website to showcase all my details and projects at one place.
                </p>
                
              </div>

              <div className="project_card">
                <div className="project_ss">
                  <img src={image3} alt="" />
                </div>
                <h5>
                  <a href="https://snehakumari3.github.io/Music-Player/">
                  <i class="fa fa-globe "></i>
                  </a>
                  <b>Music Player</b>
                  <a href="https://github.com/SnehaKumari3/Music-Player">
                  <i className="fa fa-github-square"/>
                  </a>
                </h5>
                <h6 className="project_tech">
                  <b>Technologies Used: HTML, CSS, Bootstrap, JavaScript</b>
                </h6>
                <p className="project_details">
                A music website with the functionality of play, pause, next, back and auto-play.
                </p>
              </div>

              <div className="project_card">
                <div className="project_ss">
                  <img src={image2} alt="" />
                </div>
                <h5>
                  <a href="https://snehakumari3.github.io/rock-paper-scissors-game/">
                  <i class="fa fa-globe "></i>
                  </a>
                  <b>Rock-Paper-Scissor</b>
                  <a href="https://github.com/SnehaKumari3/rock-paper-scissors-game">
                  <i className="fa fa-github-square"/>
                  </a>
                </h5>
                <h6 className="project_tech">
                  <b>Technologies Used: HTML, CSS, Bootstrap, JavaScript</b>
                </h6>
                <p className="project_details">
                An online rock-paper-scissor game that can be played with computer that has the live score updation features.
                </p>
              </div>
            </OwlCarousel>
        </div>
      </section>
    </div>
  );
}
