import "../App.css";
import { Link } from "react-router-dom";
import Instant from "../pages/Main";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={require("../images/teamLogo.png")} alt="" />
      <div className="linkContainer">
        <Link className="colorOfLinks" to="/home">
          Home
        </Link>
        <Link className="colorOfLinks" to="/products">
          Products
        </Link>
        <Link className="colorOfLinks" to="/services">
          Services
        </Link>
        <Link className="colorOfLinks" to="/contact">
          Contact
        </Link>
        <Link className="colorOfLinks" to="/login">
          Log in
        </Link>
        <Link className="spclOne" to="/getAccess">
          Get Access
        </Link>
      </div>
    </div>
  );
};

export default Header;
