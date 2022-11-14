// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./Pages/App/App";
// import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


//=========================
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);