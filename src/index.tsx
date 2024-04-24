import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { Reset } from "@/styles/reset.ts";
import App from "@/components/app.tsx";

const root = document.querySelector("#root");

if (root === null) {
  throw new Error("No #root element");
}

ReactDOM.createRoot(root).render(
  <Router>
    <Reset />
    <App />
  </Router>,
);
