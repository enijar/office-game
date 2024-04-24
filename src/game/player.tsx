import React from "react";
import * as THREE from "three";
import config from "@/game/config.ts";

export default function Player() {
  const groupRef = React.useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <mesh>
        <capsuleGeometry args={[config.player.radius, config.player.length]} />
        <meshBasicMaterial color="crimson" />
      </mesh>
    </group>
  );
}
