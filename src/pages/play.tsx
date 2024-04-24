import React from "react";
import * as Style from "@/styles/play.ts";
import Game from "@/game/game.tsx";

export default function Play() {
  return (
    <Style.PlayWrapper>
      <Game />
    </Style.PlayWrapper>
  );
}
