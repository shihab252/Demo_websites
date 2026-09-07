import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Sparkles,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
} from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

/* =========================================================
   WEIGHT PLATE
========================================================= */

function Plate({
  position,
  scale = 1,
  rotation = [0, 0, 0],
  speed = 1,
}) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x += 0.0015 * speed;
    ref.current.rotation.y += 0.003 * speed;

    ref.current.position.y =
      position[1] +
      Math.sin(
        state.clock.elapsedTime * speed + position[0]
      ) *
        0.04;
  });

  return (
    <group
      ref={ref}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {/* Main metal plate */}

      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.18, 64]} />

        <meshStandardMaterial
          color="#161616"
          metalness={0.95}
          roughness={0.22}
        />
      </mesh>

      {/* Outer edge */}

      <mesh>
        <torusGeometry
          args={[0.72, 0.035, 16, 64]}
        />

        <meshStandardMaterial
          color="#555555"
          metalness={1}
          roughness={0.18}
        />
      </mesh>

      {/* Inner ring */}

      <mesh position={[0, 0.1, 0]}>
        <torusGeometry
          args={[0.52, 0.04, 16, 64]}
        />

        <meshStandardMaterial
          color="#777777"
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Center hole */}

      <mesh position={[0, 0.1, 0]}>
        <torusGeometry
          args={[0.19, 0.055, 16, 48]}
        />

        <meshStandardMaterial
          color="#050505"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* Green accent ring */}

      <mesh position={[0, 0.105, 0]}>
        <ringGeometry
          args={[0.25, 0.265, 48]}
        />

        <meshBasicMaterial
          color="#d7ff38"
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   FLOATING ROCK
========================================================= */

function Debris({
  position,
  scale = 1,
  speed = 1,
}) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x +=
      0.002 * speed;

    ref.current.rotation.y +=
      0.004 * speed;

    ref.current.rotation.z +=
      0.0015 * speed;

    ref.current.position.y =
      position[1] +
      Math.sin(
        state.clock.elapsedTime * speed +
          position[0]
      ) *
        0.06;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={scale}
      castShadow
    >
      <icosahedronGeometry args={[0.3, 1]} />

      <meshStandardMaterial
        color="#202020"
        roughness={0.9}
        metalness={0.12}
      />
    </mesh>
  );
}

/* =========================================================
   NEON RING
   Enlarged + recentered behind the hero figure so it reads
   as a glowing halo, matching the reference composition.
========================================================= */

function NeonRing({ progress }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;

    ref.current.rotation.z =
      time * 0.16 + progress * 1.8;

    ref.current.rotation.y =
      Math.sin(time * 0.4) * 0.15 +
      progress * 0.35;

    ref.current.scale.setScalar(
      1 + progress * 0.18
    );
  });

  return (
    <group
      ref={ref}
      position={[1.3, 0.55, -1.6]}
      rotation={[Math.PI / 2.3, 0, 0]}
    >
      <mesh>
        <torusGeometry
          args={[3.35, 0.045, 20, 160]}
        />

        <meshBasicMaterial
          color="#d7ff38"
          transparent
          opacity={0.95}
        />
      </mesh>

      <mesh scale={1.06}>
        <torusGeometry
          args={[3.35, 0.014, 12, 160]}
        />

        <meshBasicMaterial
          color="#d7ff38"
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh scale={1.14}>
        <torusGeometry
          args={[3.35, 0.006, 8, 160]}
        />

        <meshBasicMaterial
          color="#d7ff38"
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   CENTRAL PLATFORM
   The jagged rock ledge the figure stands/launches on.
========================================================= */

function Platform({ progress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.z =
      -0.06 + progress * 0.08;

    ref.current.position.y =
      -2.35 + progress * 0.25;

    ref.current.scale.x =
      5.2 + progress * 0.8;
  });

  return (
    <mesh
      ref={ref}
      position={[0.6, -2.35, 0.4]}
      scale={[5.2, 0.6, 1.7]}
      rotation={[0.05, 0.15, -0.06]}
      castShadow
      receiveShadow
    >
      <icosahedronGeometry args={[1, 2]} />

      <meshStandardMaterial
        color="#131313"
        roughness={0.94}
        metalness={0.04}
      />
    </mesh>
  );
}

/* =========================================================
   CAMERA
========================================================= */

function SceneCamera({
  progress,
  mouseX,
  mouseY,
}) {
  const camera = useRef();

  useFrame(() => {
    if (!camera.current) return;

    const targetZ = THREE.MathUtils.lerp(
      9,
      4.2,
      progress
    );

    const targetX = THREE.MathUtils.lerp(
      0,
      0.65,
      progress
    );

    const targetY = THREE.MathUtils.lerp(
      0.15,
      -0.35,
      progress
    );

    camera.current.position.x =
      THREE.MathUtils.lerp(
        camera.current.position.x,
        targetX + mouseX * 0.5,
        0.055
      );

    camera.current.position.y =
      THREE.MathUtils.lerp(
        camera.current.position.y,
        targetY + mouseY * 0.35,
        0.055
      );

    camera.current.position.z =
      THREE.MathUtils.lerp(
        camera.current.position.z,
        targetZ,
        0.055
      );

    camera.current.rotation.z =
      THREE.MathUtils.lerp(
        camera.current.rotation.z,
        mouseX * -0.025,
        0.04
      );

    camera.current.lookAt(
      0.35,
      -0.15,
      0
    );
  });

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault
      position={[0, 0.15, 9]}
      fov={43}
    />
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene({
  progress,
  mouseX,
  mouseY,
}) {
  return (
    <>
      <SceneCamera
        progress={progress}
        mouseX={mouseX}
        mouseY={mouseY}
      />

      {/* Environment */}

      <color
        attach="background"
        args={["#080909"]}
      />

      <fog
        attach="fog"
        args={["#080909", 5, 15]}
      />

      {/* Lighting */}

      <ambientLight intensity={0.24} />

      <directionalLight
        position={[4, 7, 6]}
        intensity={3.5}
        castShadow
      />

      <spotLight
        position={[0, 7, 5]}
        intensity={14}
        angle={0.38}
        penumbra={1}
        distance={14}
        castShadow
      />

      {/* Green light */}

      <pointLight
        position={[1.5, 0.6, 1.5]}
        intensity={22}
        distance={9}
        color="#d7ff38"
      />

      {/* White rim light */}

      <pointLight
        position={[-4, 2, 3]}
        intensity={9}
        distance={8}
      />

      <Environment preset="warehouse" />

      {/* Platform */}

      <Platform progress={progress} />

      {/* Neon ring */}

      <NeonRing progress={progress} />

      {/* =================================================
          WEIGHTS
      ================================================= */}

      <Plate
        position={[3.45, 1.65, -0.7]}
        scale={1.05}
        rotation={[0.4, 0.7, 0.45]}
        speed={1.2}
      />

      <Plate
        position={[-3.55, 1.8, -1.8]}
        scale={0.78}
        rotation={[0.7, 0.2, -0.5]}
        speed={0.8}
      />

      <Plate
        position={[3.75, -1.1, -0.2]}
        scale={0.9}
        rotation={[0.3, 0.9, 0.3]}
        speed={1.4}
      />

      <Plate
        position={[-3.2, -1.55, -1.3]}
        scale={0.5}
        rotation={[0.6, 0.2, 0.8]}
        speed={1}
      />

      {/* =================================================
          ROCKS
      ================================================= */}

      <Debris
        position={[-3.8, 0.2, 0]}
        scale={1.1}
      />

      <Debris
        position={[4.1, 0.45, -1]}
        scale={0.8}
      />

      <Debris
        position={[-2.8, -2, -0.4]}
        scale={0.65}
      />

      <Debris
        position={[3, -2, -0.5]}
        scale={1}
      />

      <Debris
        position={[0.2, 2.7, -2]}
        scale={0.4}
      />

      <Debris
        position={[-4.2, 2.4, -2]}
        scale={0.45}
      />

      <Debris
        position={[4.5, 2.5, -2]}
        scale={0.35}
      />

      {/* =================================================
          PARTICLES
      ================================================= */}

      <Sparkles
        count={280}
        scale={[11, 8, 8]}
        size={2}
        speed={0.3}
        noise={1}
        color="#d7ff38"
      />

      <Sparkles
        count={150}
        scale={[10, 6, 7]}
        size={1.1}
        speed={0.12}
        noise={0.7}
        color="#ffffff"
      />

      {/* Floating ring */}

      <Float
        speed={1.3}
        rotationIntensity={0.15}
        floatIntensity={0.3}
      >
        <mesh
          position={[0, -1.2, 1]}
        >
          <torusGeometry
            args={[1.2, 0.012, 12, 100]}
          />

          <meshBasicMaterial
            color="#d7ff38"
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      {/* Post processing */}

      <EffectComposer>
        <Bloom
          intensity={1.15}
          luminanceThreshold={0.35}
          luminanceSmoothing={0.8}
          mipmapBlur
        />

        <Vignette
          darkness={0.8}
          eskil={false}
        />
      </EffectComposer>
    </>
  );
}

/* =========================================================
   CANVAS
========================================================= */

export default function ForgeScene({
  scrollProgress,
  mouse,
}) {
  /*
    Framer Motion values have .get().
    Convert them into normal numbers before
    sending them into the Three.js scene.
  */

  const progress =
    typeof scrollProgress?.get === "function"
      ? scrollProgress.get()
      : Number(scrollProgress) || 0;

  const mouseX =
    typeof mouse?.x?.get === "function"
      ? mouse.x.get()
      : Number(mouse?.x) || 0;

  const mouseY =
    typeof mouse?.y?.get === "function"
      ? mouse.y.get()
      : Number(mouse?.y) || 0;

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      camera={{
        position: [0, 0.15, 9],
        fov: 43,
      }}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Scene
        progress={progress}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    </Canvas>
  );
}