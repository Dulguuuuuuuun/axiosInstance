import "../App.css";
import { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Footer from "../components/Footer";

const Instant = ({ title, text }) => {
  
  return (
    
    <div className="Instant">
      <div className="container">
        <div className="content">
          <h1>{title}</h1>
          <span>{text}</span>

          <div className="searchContainer">
            <input type="text" id="srchInpt" placeholder="Email" />
            <button className="srchBtn">Get early access</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  
  );
};

export default Instant;
