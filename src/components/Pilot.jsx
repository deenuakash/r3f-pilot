import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function Pilot() {

    const orbitControlsRef = useRef(null);

    const [count, setCount] = useState(0)

    useFrame((state) => {
        const { x, y } = state.pointer
        // console.log(x,y)
        orbitControlsRef.current.setAzimuthalAngle(-x * (Math.PI))
        orbitControlsRef.current.setPolarAngle(y * (Math.PI))
        orbitControlsRef.current.update()
    })

    TODO:
    //learn difference between radian and degree
    // Azimuthal vs Polar angle

    // useEffect(() => {
    //     console.log(orbitControlsRef?.current)
    // }, [orbitControlsRef])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 3, 15]} />
            <OrbitControls ref={orbitControlsRef} />
            <mesh castShadow position={[0, 1, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#0000c9" />
            </mesh>
            <mesh rotation={[-(Math.PI / 180) * 90, 0, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="red" />
            </mesh>
            <mesh rotation={[-(Math.PI / 180) * 0, 0, 0]} castShadow>
                <torusGeometry args={[3, 0.5, 116, 110]} />
                <meshStandardMaterial color="green" />
            </mesh>

            <ambientLight args={["0xffffff", 0.75]} />
            <directionalLight args={["0xffffff", 2, 25, (Math.PI / 180) * 50, 0.6]} position={[-3, 1, 0]} castShadow />

            <Environment background>
                <mesh>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshBasicMaterial color="pink" side={THREE.BackSide}/>
                </mesh>
            </Environment>
        </>
    )
}

export default Pilot
