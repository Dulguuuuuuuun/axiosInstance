// import { createContext, useEffect, useState } from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Blogger } from "./components/Blogger";
// import Header from "./components/Hx  eader";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
// import GetAccess from "./pages/GetAccess";
// import Home from "./pages/Home";
// import Login from "./pages/LogIn";
// import Services from "./pages/Service";
// import Comments from "./components/Comments";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./components/Footer";
// import axios from "axios";
// import Card from "./components/Card";
// import Products from "./components/Products";
// import axios from "axios";

// function App() {
// const [data, setData] = useState([]);
// const [value, setValue] = useState();

// const request = () => {
//   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//     setData(res.data);
//   });
// };

// useEffect(() => {
//   request();
// }, []);

// const [data, setData] = useState({});
// const [id, setId] = useState(1);

// const instance = axios.create({
//   baseURL: "https://dummyapi.io/data/v1/",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//     "app-id": "63104c3120f6e665ecf628ba",
//   },
// });

// const getData = async () => {
//   const rosponse = await instance.get(`user`);
//   console.log(rosponse);
//   setData(rosponse.data);
// };

// return (
//   <div>
//     <input type="number" onChange={(e) => setId(e.target.value)}></input>
//     <button onClick={getData}>Get</button>
//     <button onClick={postData}>Post</button>
//     <button onClick={deleteData}>Delete</button>
//     <button onClick={updateData}>Update</button>
{
  /* Hereglegchdin medeelel-g bugdin end haruulna
      firstName
      lastName
      picture
      title */
}

{
  /* Hereglegch burtguuleh
        firstName, lastName, email zaawal oruulna
      */
}

{
  /* Hereglegch update hiih
        firstName, lastName
      */
}

{
  /* Hereglegch ustgah
   */
}
// </div>

// <>
//   <div>
//     <input
//       className="form-control"
//       type="text"
//       placeholder="Search"
//       aria-label="Search"
//       onChange={(e) => setValue(e.target.value)}
//     />
//   </div>
//   <div style={{ display: "flex" }}>
//     {data.map((el) => {
//       return el.name.includes(value) && <Card data={el} />;
//     })}
//   </div>
// </>

// <div className="app">

//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/getAccess" element={<GetAccess />} />
//       </Routes>
//     </BrowserRouter>
//   <Footer></Footer>
// </div>
// );
// }

// export default App;

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

/* eslint-disable import/first */
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./some.css";
import UserBox from "./components/UserBox";
  
export default function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
    // headers: {
    //   "Content-type": "application/json; charset=UTF-8",
    //   "app-id": "63104c3120f6e665ecf628ba",
    // },
  });

  //hereglegchdin data awj bga

  const getData = async () => {
    const response = await instance.get(`/products`);
    console.log(response);

    setData(response.data.products);
  };

  const getDataById = async () => {
    const rosponse = await instance.get(`products/${id}`);
    const result = data.filter((el) => Number(el.id) === Number(id));
    setData(result);
    setData([rosponse.data]);
  };

  const deleteData = async () => {
    const rosponse = await instance.delete(`user/${id}`);
    setData(
      data.filter((e) => {
        return e.id !== id;
      })
    );
  };

  const postData = async () => {
    const rosponse = await instance.delete(`user/${id}`);
    setData(
      data.filter((e) => {
        return;
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="">
        <Form.Control
          type="text"
          placeholder="Search Here ..."
          onChange={(e) => setId(e.target.value)}
        />
        <Button onClick={getDataById} variant="primary">
          Get
        </Button>{" "}
        <Button onClick={getDataById} variant="primary">
          Post
        </Button>{" "}
        <Button onClick={getDataById} variant="primary">
          Patch
        </Button>{" "}
        <Button onClick={deleteData} variant="primary">
          Delete
        </Button>{" "}
      </div>

      {data &&
        data.map((user) => {
          return <UserBox user={user} />;
        })}
    </div>
  );
}
