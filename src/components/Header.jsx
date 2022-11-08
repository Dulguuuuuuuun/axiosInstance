import "../App.css";
import { Link } from "react-router-dom";
import Instant from "../pages/Main";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";


const Header = () => {
  let location = useLocation();
  const styles = {
      navBg: 
        location.pathname !== "/" ? { width: 0, height: 100 } : { width: ""},
      navColor:
        location.pathname !== "/" ? { color: "black" } : { color: "white" },
      spclColor: 
        location.pathname !== "/" ? {color: "black"} : { color: '#4DA0FD'},
    };
  return (
    <div className="headerContainer">
      <img src={require("../images/teamLogo.png")} alt="" />
      <div className="linkContainer">
        <Link className="navColor" to="/home">
          Home
        </Link>
        <Link className="navColor" to="/products">
          Products
        </Link>
        <Link className="navColor" to="/services">
          Services
        </Link>
        <Link className="navColor" to="/contact">
          Contact
        </Link>
        <Link className="navColor" to="/login">
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
