import "../App.css";
import { Link } from "react-router-dom";

export const Blogger = ({image, title, texts, profileImg, userName, date}) => {
    return (
        <Link className="linkInBlogger" to="news">
            <div className="blogContainer">
                <img src={image} alt={image} />
                <h2>{title}</h2>
                <span>{texts}</span>
                <div className="blogProfileContainer">
                    <img src={profileImg} alt={profileImg} />
                    <p>{userName}</p>
                    <p>{date}</p>
                </div>
            </div>
        </Link>
    )
}