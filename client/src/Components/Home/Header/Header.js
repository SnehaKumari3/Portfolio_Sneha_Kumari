import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtilis";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0)
  const [showHeaderOptions, setShowHeaderOptions] = useState(false)

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)

    if (screenIndex < 0) return;
  }


  
  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return( TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
      ))
    )
  }  

  const getHeaderOptionsClass = (index) => {
    let classes = "header_option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header_option_seperator ";

    if (selectedScreen === index) 
    classes += "selected_header_option ";
    return classes;
  }

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div>
      <div
        className="header_container"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header_parent">
          <div
            className="header_hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header_hamburger_bars" icon={faBars} />
          </div>

          <div className="header_logo">
            <span>Sneha Kumari</span>
          </div>

          <div
            className={
              showHeaderOptions
                ? "header_options show_hamburger_options"
                : "header_options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}
