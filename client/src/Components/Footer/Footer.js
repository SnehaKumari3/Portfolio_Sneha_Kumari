import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";


export default function Footer() {
  return (
    <div className="scroll_container">
      <button
        className="btn_scroll"
        onClick={()=>ScrollService.scrollHandler.scrollToHome()}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
    
  );
}