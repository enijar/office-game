import React from "react";
import { Link } from "react-router-dom";
import * as Style from "@/styles/home.ts";

export default function Home() {
  return (
    <Style.HomeWrapper>
      <h1>Home</h1>
      <Link to="/play">Play Now!</Link>
    </Style.HomeWrapper>
  );
}
