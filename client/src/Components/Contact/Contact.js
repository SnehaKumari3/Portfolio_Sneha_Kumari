import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typical from "react-typical";
import imgBack from "../../assets/Images/mail.png";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SuccessToast = () => {
    toast.success("Send Succesfully!!", {
      position: "top-right",
    });
  };
  const ErrorToast = () => {
    toast.error("Message not sent", {
      position: "top-right",
    });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_agtntcb",
        "template_uc6z8sg",
        form.current,
        "8Nde_ygkX2C4dAZVh"
      )
      .then(
        (result) => {
          console.log(result.text);
          SuccessToast();
        },
        (error) => {
          console.log(error.text);
          ErrorToast();
        }
      );
  };

  return (
    <div className="main_container fade_in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />

      <div className="central_form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={["Get In Touch 📧", 1000, "Say Hello 👋", 1000]}
            />
          </h2>{" "}
          <a href="#">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="back_form">
          <div className="img_back">
            <h4>Want to collabrate on some project, Send Your Mail Here 👉</h4>
            <img src={imgBack} alt="poor connection" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <div className="send_btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />

      <Footer />
    </div>
  );
}
