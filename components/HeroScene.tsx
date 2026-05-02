"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sparkles, Sphere } from "@react-three/drei";
import * as THREE from "three";

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      mouse.x * 0.4,
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      mouse.y * 0.3,
      0.05
    );
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.8, 128, 128]}>
        <MeshDistortMaterial
          color="#6366f1"
          distort={0.45}
          speed={2.5}
          roughness={0}
          metalness={0.2}
          transparent
          opacity={0.92}
        />
      </Sphere>

      {/* Inner core glow */}
      <Sphere args={[1.2, 64, 64]}>
        <meshBasicMaterial color="#818cf8" transparent opacity={0.08} />
      </Sphere>

      {/* Sparkle particles */}
      <Sparkles
        count={80}
        scale={5}
        size={2}
        speed={0.4}
        color="#22d3ee"
        opacity={0.7}
      />
      <Sparkles
        count={40}
        scale={7}
        size={1.5}
        speed={0.2}
        color="#a78bfa"
        opacity={0.5}
      />
    </Float>
  );
}

function RingOrbit() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = Math.PI / 2.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.6, 0.012, 16, 120]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
    </mesh>
  );
}

function RingOrbit2() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = Math.PI / 3 + Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    ringRef.current.rotation.z = -state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.1, 0.008, 16, 120]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.2} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={3} color="#6366f1" />
      <pointLight position={[-5, -5, 3]} intensity={2} color="#22d3ee" />
      <pointLight position={[0, 8, -5]} intensity={1.5} color="#a78bfa" />
      <GlowingSphere />
      <RingOrbit />
      <RingOrbit2 />
    </Canvas>
  );
}
