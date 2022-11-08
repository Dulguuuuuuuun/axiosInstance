import "../App.css";
import { useContext } from "react";
import { colorModeContext } from "../App";
import Form from 'react-bootstrap/Form';

const Instant = ({ title, text }) => {
  const { setChecked } = useContext(colorModeContext);
  return (
    
    <div className="Instant">
      <div className="container">
        <div className="content">
          <h1>{title}</h1>
          <span>{text}</span>

          <Form>      
            <Form.Check 
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
  </Form>      
      

          <div className="searchContainer">
            <input type="text" id="srchInpt" placeholder="Email" />
            <button className="srchBtn">Get early access</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Instant;
