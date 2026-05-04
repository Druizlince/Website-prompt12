"use client";

import { useRef, useMemo } from "react";
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
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.4, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.3, 0.05);
  });
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.8, 128, 128]}>
        <MeshDistortMaterial color="#6366f1" distort={0.5} speed={2.8} roughness={0} metalness={0.3} transparent opacity={0.92} />
      </Sphere>
      <Sphere args={[1.2, 64, 64]}>
        <meshBasicMaterial color="#818cf8" transparent opacity={0.07} />
      </Sphere>
      <Sparkles count={100} scale={5} size={2.2} speed={0.5} color="#22d3ee" opacity={0.8} />
      <Sparkles count={50}  scale={8} size={1.5} speed={0.2} color="#a78bfa" opacity={0.5} />
    </Float>
  );
}

function WireframeShell() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.07;
    ref.current.rotation.z = state.clock.elapsedTime * 0.04;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.9, 1]} />
      <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function Ring({ radius, thickness, color, speedZ, tilt }: {
  radius: number; thickness: number; color: string; speedZ: number; tilt: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = tilt + Math.sin(state.clock.elapsedTime * 0.25) * 0.06;
    ref.current.rotation.z = state.clock.elapsedTime * speedZ;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 16, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.28} />
    </mesh>
  );
}

function OrbitalNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(() => Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    return { x: Math.cos(angle) * 3.2, y: Math.sin(angle * 0.5) * 0.8, z: Math.sin(angle) * 3.2, color: i % 2 === 0 ? "#22d3ee" : "#a78bfa" };
  }), []);
  useFrame((state) => { if (groupRef.current) groupRef.current.rotation.y = state.clock.elapsedTime * 0.18; });
  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <mesh key={i} position={[n.x, n.y, n.z]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshBasicMaterial color={n.color} />
        </mesh>
      ))}
    </group>
  );
}

function DataLines() {
  const ref = useRef<THREE.LineSegments>(null);
  const geo = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < 12; i++) {
      const a1 = (i / 12) * Math.PI * 2;
      const a2 = ((i + 3) / 12) * Math.PI * 2;
      pts.push(Math.cos(a1) * 3.2, Math.sin(a1 * 0.5) * 0.8, Math.sin(a1) * 3.2);
      pts.push(Math.cos(a2) * 3.2, Math.sin(a2 * 0.5) * 0.8, Math.sin(a2) * 3.2);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pts), 3));
    return g;
  }, []);
  useFrame((state) => { if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.18; });
  return (
    <lineSegments ref={ref} geometry={geo}>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.15} />
    </lineSegments>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 42 }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }} dpr={[1, 2]}>
      <ambientLight intensity={0.25} />
      <pointLight position={[5,  5,  5]} intensity={4}   color="#6366f1" />
      <pointLight position={[-5,-5,  3]} intensity={2.5} color="#22d3ee" />
      <pointLight position={[0,  8, -5]} intensity={2}   color="#a78bfa" />
      <pointLight position={[3, -3,  4]} intensity={1.5} color="#06b6d4" />
      <GlowingSphere />
      <WireframeShell />
      <Ring radius={2.6} thickness={0.012} color="#22d3ee" speedZ={0.15}  tilt={Math.PI / 2.5} />
      <Ring radius={3.1} thickness={0.008} color="#6366f1" speedZ={-0.10} tilt={Math.PI / 3}   />
      <Ring radius={3.6} thickness={0.006} color="#a78bfa" speedZ={0.06}  tilt={Math.PI / 1.8} />
      <OrbitalNodes />
      <DataLines />
    </Canvas>
  );
}
