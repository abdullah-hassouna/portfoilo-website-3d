import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import HackerRoom from '../components/HackerRoom'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constans'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Ring from '../components/Ring'
import HeroCam from '../components/HeroCam'
import Button from '../components/Button'

function Hero() {

    // const controls = useControls("HackerRoom", {
    //     positionX: {
    //         value: 0.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: -10,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: -3.9,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationX: {
    //         value: 0.1,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationY: {
    //         value: -3.1,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationZ: {
    //         value: 6.3,
    //         min: -10,
    //         max: 10,
    //     },
    //     scale: {
    //         value: 0.1,
    //         min: 0.1,
    //         max: 10,
    //     }
    // })

    const isSmMobile = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmMobile, isMobile, isTablet);

    return (
        <section className='min-h-screen w-full relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Welcome to <span className='rainbow-text'>Glow Up</span> <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCam isMobile={isMobile}>
                            <HackerRoom position={[0, -2, -3.9]} rotation={[0.5, 9, 6.3]} scale={sizes.deskScale} />
                        </HeroCam>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Ring position={sizes.ringPosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href="#contact" className='w-fit'>
                    <Button name="Lets work togather" isBeam containerClass={"sm:w-fit w-full sm:min-w-9"} />
                </a>
            </div>
        </section>
    )
}

export default Hero