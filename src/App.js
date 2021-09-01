import "./App.css";
import Router from "./routers";
import { Helmet } from "react-helmet";
import "react-datepicker/dist/react-datepicker.css";
// import React, { useState, useEffect } from "react";
function App() {
  // const [link, setLink] = useState("");
  // useEffect(() => {
  //   console.log("new Link", link);
  // }, [link]);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
