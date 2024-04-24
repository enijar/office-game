import React from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Ecctrl from "ecctrl";
import config from "@/game/config.ts";
import Player from "@/game/player.tsx";
import Level from "@/game/level.tsx";

const padding = config.player.radius * 0.25;

export default function Game() {
  return (
    <Canvas gl={{ alpha: false }}>
      <ambientLight />
      <color args={["black"]} attach="background" />
      <Physics debug={true}>
        <React.Suspense fallback={<></>}>
          <KeyboardControls map={config.keyboardMap}>
            <Ecctrl
              capsuleRadius={config.player.radius + padding}
              capsuleHalfHeight={config.player.length / 2}
              floatHeight={0}
              maxVelLimit={5}
              lockRotations={true}
              type="dynamic"
            >
              <Player />
            </Ecctrl>
          </KeyboardControls>
          <Level />
        </React.Suspense>
      </Physics>
    </Canvas>
  );
}
