import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home.tsx";
import Play from "@/pages/play.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  );
}
