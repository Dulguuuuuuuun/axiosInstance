import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Blogger } from "./components/Blogger";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import GetAccess from "./pages/GetAccess";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import Services from "./pages/Service";
import Comments from "./components/Comments";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";



function App() {


  return (
    <div className="app">

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/getAccess" element={<GetAccess />} />
          </Routes>
        </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;

// function TypesExample() {
//   return(
//     <Container>
//       <Row>
//         <Col  bg={"primary"} md={8} xs={12} >xs=6, md=8</Col>
//         <Col md={4} xs={6}>xs=6, md=4</Col>
//       </Row>
//       <Row>
//         <Col md={4} xs={6} >xs=6, md=4</Col>
//         <Col md={4} xs={6} >xs=6, md=4</Col>
//         <Col md={4} xs={6} >xs=6, md=4</Col>
//       </Row>
//       <Row>
//         <Col  xs={6} >xs=6</Col>
//         <Col xs={6} >xs=6</Col>
//       </Row>
//     </Container>

//   )

// }

// export default TypesExample;

// function App() {

//     // const [timer, setTimer] = useState(0);
//     // const [control, setControl] = useState("stop");
//     // const [show, setShow] = useState("");

//     // useEffect(() => {
//     //     if (control === "running") {
//     //         setTimeout(() => {
//     //             setTimer((timer) => timer + 1);
//     //             // setTimer(timer);
//     //         }, 10);
//     //     }
//     //     else if (control === "stop") setTimer(0);

//     //     toHHMMSS(timer);
//     // }, [timer, control]);

//     // const toHHMMSS = (sec) => {
//     //     let sec_num = parseInt(sec, 10);
//     //     let hours = Math.floor(sec_num / 3600);
//     //     let minutes = Math.floor((sec_num - hours * 3600) / 60);
//     //     let seconds = sec_num - hours * 3600 - minutes * 60;

//     //     if (hours < 10) {
//     //         hours = "0" + hours;
//     //     }
//     //     if (minutes < 10) {
//     //         minutes = "0" + minutes;
//     //     }
//     //     if (seconds < 10) {
//     //         seconds = "0" + seconds;
//     //     }
//     //     setShow(hours + ":" + minutes + ":" + seconds);
//     // };

//     // return (
//     //     <div className="parent">
//     //         <h1>Stopwatch</h1>
//     //         <div className="section">
//     //             {show}
//     //             <button
//     //                 className="button"
//     //                 onClick={() => {
//     //                     setControl("running");
//     //                 }}
//     //             >
//     //                 start
//     //             </button>
//     //         </div>
//     //         <div className="res">
//     //             <button
//     //                 className="reset"
//     //                 onClick={() => {
//     //                     setControl("stop");
//     //                     setTimer(0);
//     //                     // setControl("running");
//     //                 }}
//     //             >
//     //                 reset
//     //             </button>
//     //             <button
//     //                 className="stop"
//     //                 onClick={() => {
//     //                     setControl("pause");
//     //                     // setControl("running");
//     //                     if (setControl == "pause") {
//     //                         setControl("running")
//     //                     }
//     //                 }}
//     //             >
//     //                 stop
//     //             </button>
//     //         </div>
//     //     </div>
//     // );
// }
// export default App;
