import React from 'react'
import Profile from './Profile/Profile';
import Homefooter from './HomeFooter/Homefooter';
import "./Home.css";
import Header from "./Header/Header";


export default function Home(props) {
  return (
    <div className='home_container' id={props.id || ""}>
        <Header/>
        <Profile/>
        <Homefooter/>
    </div>
  );
}
