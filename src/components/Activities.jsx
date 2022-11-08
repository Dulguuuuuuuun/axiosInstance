import "../App.css";
import { Link } from "react-router-dom";
import React from "react";

const Activities = ({title, texts, image, to=''}) => {
    return (
        <div className= "Activities">
            <div className="leftContainer">
                <div className="yeahh">
                    <h1>{title}</h1>
                    <span>{texts}</span>
                    <Link to={to}>
                        Learn More
                    </Link> 
                </div> 
            </div>
            <img src={image} alt="" />
        </div>
    )
}

export default Activities;