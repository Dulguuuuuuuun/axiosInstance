import React from "react";
import { Blogger } from "../components/Blogger";
import "../App.css";

const Services = () => {
  return (
    <div className="ContainerOtherService">
      <header></header>

      <div className="blogMain">
        <div className="goodAfter">
          <p>Blog posts</p>
          <span>Our latest updates and blogs about managing your team</span>
        </div>
        <div className="blogsContainer">
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/BlogImg.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
        </div>
        <div className="blogsContainer">
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/BlogImg.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
        </div>
        <div className="blogsContainer">
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
        </div>
        <button className="btnSrvc">Next</button>
        <br />
      </div>
    </div>
  );
};
export default Services;
