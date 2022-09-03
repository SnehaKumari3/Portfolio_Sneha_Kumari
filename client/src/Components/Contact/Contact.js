import React,{useState} from "react";
import Typical from "react-typical";
import axios from 'axios';
import {toast} from 'react-toastify';
import imgBack from "../../assets/Images/mail.png";
import load1 from "../../assets/Images/load2.gif"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import "./Contact.css";

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const [banner,setBanner]=useState("");
  const [bool,setBool]=useState(false);


  const handleName = (e)=>{
    setName(e.target.value);
  };
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  };
  const handleMessage = (e)=>{
    setMessage(e.target.value);
  };

  const submitForm = async(e)=>{
    e.preventDefault();
    try{
      let data={
        name,
        email,
        message,
      };
      setBool(true)
      const res = await axios.post(`/contact`,data);
      if(name.length === 0 || email.length === 0 || message.length === 0){
        setBanner(res.data.msg)
        toast.error(res.data.msg)
        setBool(false)
      }
      else if(res.status === 200){
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(false)

        setName("");
        setEmail("");
        setMessage("");
      }

    }catch (error) {
      console.log(error)
    }
    
  };

  return (
    <div className="main_container fade_in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />

      <div className="central_form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={["Get In Touch 📧", 1000,
              "Say Hello 👋", 1000]}
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
                <img src={imgBack} alt="poor connection"/>
            </div>
            <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label htmlFor='name'>Name</label>
                <input type='text'
                onChange={handleName} value={name}/>
                <label htmlFor='email'>Email</label>
                <input type='email' onChange={handleEmail} value={email}/>
                <label htmlFor='message'>Message</label>
                <textarea  type='text' onChange={handleMessage} value={message}/>

                <div className="send_btn">
                    <button type="submit">
                        Send
                        <i className="fa fa-paper-plane" />
                        {bool ? (
                        <b className="load">
                          <img src={load1} alt="poor connection"/>
                        </b>):("")}
                    </button>
                </div>
            </form>

        </div>
      </div>
      <Footer/>
    </div>
  );
}
