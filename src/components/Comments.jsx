import "../App.css";
import Comment from "./Comment";

const Comments = () => {
  return (
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
  );
};

export default Comments;
