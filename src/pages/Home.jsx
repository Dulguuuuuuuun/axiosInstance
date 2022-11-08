import "../App.css";
import React, { PureComponent } from "react";
import Activities from "../components/Activities";
import ActivitiesTwo from "../components/ActivitiesTwo";
import Comment from "../components/Comment";
import Comments from "../components/Comments";
import Instant from "./Main";

export class Home extends PureComponent {
  render() {
    return (
      <div className="">
        <Instant
          title="Instant collaborations for remote teams"
          text="All in one for your remote team chats, 
        collaboration and track projects"
        />

        <div className="" style={{ marginTop: 1300 }}>
          <Activities
            texts="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
            title="Your Hub for teamwork"
            image="./images/niceOne.png"
          />
          <ActivitiesTwo
            textsTwo="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
            titleTwo="Simple task management"
            imageTwo="./images/niceTwo.png"
          />
          <Activities
            texts="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
            title="Scheduling that actually works"
            image="./images/niceThree.png"
          />
        </div>

        <div className="comments">
          <h1>What people say about us</h1>
          <div className="commentuud">
            <Comment
              name={"John Cena"}
              content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
              image={require("../images/Avatar.png")}
              star={[0, 1, 2, 3, 4]}
            />
            <Comment
              name={"Jane Cooner"}
              content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
              image={require("../images/AvatarTwo.png")}
              star={[0, 1, 2, 3, 4]}
            />
            <Comment
              name={"Eleanor Pena"}
              content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
              image={require("../images/AvatarThree.png")}
              star={[0, 1, 2, 3, 4]}
            />
            <Comment
              name={"Alexandra Eva"}
              content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
              image={require("../images/AvatarFour.png")}
              star={[0, 1, 2, 3, 4]}
            />
          </div>
          <div className="arrow">
            <img src={"../images/sum.png"} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
