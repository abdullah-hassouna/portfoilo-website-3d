import { Float, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from 'three';
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constans";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Ring from "../components/Ring";
import HeroCam from "../components/HeroCam";
import Button from "../components/Button";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function GradientBackground() {
  const { scene } = useThree();
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#010103'); // Dark at top
    gradient.addColorStop(1, '#0a0a0a'); // Slightly lighter at bottom
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    scene.background = new THREE.CanvasTexture(canvas);
  }, [scene]);
  return null;
}

function Hero() {
  const isSmMobile = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmMobile, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Welcome to <span className="rainbow-text">Glow Up</span>{" "}
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <GradientBackground />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
              <HeroCam isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.1, -Math.PI, 0]}
                />
              </HeroCam>
            </Float>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              {/* <Ring position={sizes.ringPosition} /> */}
              <Cube position={sizes.cubePosition} />
            </group>

            <Stars saturation={0} count={400} speed={0.5} />
            <EffectComposer>
              <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
            </EffectComposer>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
