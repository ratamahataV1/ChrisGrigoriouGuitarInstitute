// src/GuitarAnimation.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GuitarString() {
  const stringRef = useRef();

  // Animate the string to vibrate slightly
  useFrame(() => {
    if (stringRef.current) {
      stringRef.current.rotation.z += 0.01;
      stringRef.current.position.x = Math.sin(Date.now() * 0.005) * 0.05;
    }
  });

  return (
    <mesh ref={stringRef} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.02, 0.02, 5, 32]} />
      <meshStandardMaterial color="#ff6600" />
    </mesh>
  );
}

export default function GuitarAnimation() {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6600" />
      <GuitarString />
    </Canvas>
  );
}
