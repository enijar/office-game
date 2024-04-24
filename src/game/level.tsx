import React from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import config from "@/game/config.ts";

export default function Level() {
  const texture = useTexture("./floor.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(config.bounds.x, config.bounds.z);
  texture.anisotropy = useThree((state) => state.gl.capabilities.getMaxAnisotropy());

  return (
    <>
      {/* floor */}
      <mesh rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}>
        <planeGeometry args={[config.bounds.x, config.bounds.z]} />
        <meshBasicMaterial map={texture} color="#555555" />
      </mesh>
      <RigidBody type="fixed" colliders="trimesh">
        {/* bounds */}
        <mesh position={[0, config.bounds.y / 2, 0]}>
          <boxGeometry args={[config.bounds.x, config.bounds.y, config.bounds.z]} />
          <meshBasicMaterial color="#555555" side={THREE.BackSide} transparent opacity={0} />
        </mesh>
        <mesh position={[-1, 0.05, 5]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshBasicMaterial color="#666666" />
        </mesh>
        <mesh position={[-1, 0.2, 5.5]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshBasicMaterial color="#666666" />
        </mesh>
        <mesh position={[-1, 0.35, 6]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshBasicMaterial color="#666666" />
        </mesh>
      </RigidBody>
    </>
  );
}
