import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb({ position, color, speed = 1, distort = 0.3 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 100; i++) {
      const t = i / 100;
      const angle = t * Math.PI * 4;
      pts.push(new THREE.Vector3(
        Math.cos(angle) * 0.5,
        t * 4 - 2,
        Math.sin(angle) * 0.5
      ));
    }
    return pts;
  }, []);

  const points2 = useMemo(() => {
    return points.map(p => new THREE.Vector3(-p.x, p.y, -p.z));
  }, [points]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const curve2 = useMemo(() => new THREE.CatmullRomCurve3(points2), [points2]);

  return (
    <group ref={groupRef} position={[3, 0, -2]}>
      <mesh>
        <tubeGeometry args={[curve, 100, 0.05, 8, false]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh>
        <tubeGeometry args={[curve2, 100, 0.05, 8, false]} />
        <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} />
      </mesh>
      {points.filter((_, i) => i % 10 === 0).map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#a855f7" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Torus ref={meshRef} args={[0.8, 0.2, 16, 100]} position={position}>
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </Torus>
    </Float>
  );
}

function Particles({ count = 50 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.055;
        colors[i * 3 + 1] = 0.647;
        colors[i * 3 + 2] = 0.914;
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.078;
        colors[i * 3 + 1] = 0.722;
        colors[i * 3 + 2] = 0.651;
      } else {
        colors[i * 3] = 0.659;
        colors[i * 3 + 1] = 0.333;
        colors[i * 3 + 2] = 0.969;
      }
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
        <pointLight position={[10, -10, 5]} intensity={0.5} color="#14b8a6" />
        
        <FloatingOrb position={[-4, 1, -2]} color="#0ea5e9" speed={0.8} distort={0.4} />
        <FloatingOrb position={[4, -1, -3]} color="#14b8a6" speed={1.2} distort={0.3} />
        <FloatingOrb position={[-2, -2, -1]} color="#a855f7" speed={1} distort={0.5} />
        
        <DNAHelix />
        
        <FloatingTorus position={[-3.5, -1.5, -1]} />
        
        <Particles count={80} />
      </Canvas>
    </div>
  );
}
