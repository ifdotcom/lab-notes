import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import { LabNotesApp } from "./LabNotesApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LabNotesApp />
    </BrowserRouter>
  </React.StrictMode>
);
