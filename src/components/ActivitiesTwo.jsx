import "../App.css";
import { Link } from "react-router-dom";

const ActivitiesTwo = ({titleTwo, textsTwo, imageTwo, toTwo=''}) => {
    return (
        <div className= "ActivitiesTwo">
            <div className="leftContainer">
                <div className="yeahh">
                    <h1>{titleTwo}</h1>
                    <span>{textsTwo}</span>
                    <Link to={toTwo}>
                        Learn More
                    </Link> 
                </div> 
            </div>
            <img src={imageTwo} alt="" />
        </div>
    )
}

export default ActivitiesTwo;