import React from 'react'
import "./ScreenHeading.css";
export default function ScreenHeading(props) {
  return (
    <div className='heading_container'>
        <div className='screen_heading'>
            <span>{props.title}</span>
        </div>
        {
            (props.subHeading)?(
                <div className='screen_subheading'>
                    <span>{props.subHeading}</span>
                </div> 
            ):(<div></div>)
        }
        <div className='heading_seperator'>
            <div className='seperator_line'>
            </div>
            <div className='seperator_blob'>  
                <div></div>
            </div>
        </div>
    </div>
  )
}
