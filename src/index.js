import React from "react";

import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { rootCertificates } from "tls";


const root = ReactDOM.render(document.querySelector("#root"))
root.render(
  <React.StrictMode>
<BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>,  
);