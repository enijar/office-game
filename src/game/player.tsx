import React from "react";
import config from "@/game/config.ts";

export default function Player() {
  return (
    <mesh>
      <capsuleGeometry args={[config.player.radius, config.player.length]} />
      <meshBasicMaterial color="crimson" />
    </mesh>
  );
}
