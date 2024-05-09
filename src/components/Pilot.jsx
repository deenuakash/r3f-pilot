import { useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'

function Pilot() {

    const orbitControlsRef = useRef(null);

    const [count,setCount] = useState(0)

    useFrame((state) => {
        const {x,y} = state.pointer
        // console.log(x,y)
        orbitControlsRef.current.setAzimuthalAngle(-x*(Math.PI/180)*90)
        orbitControlsRef.current.setPolarAngle(y)
    })

    TODO: 
    //learn difference between radian and degree
    // Azimuthal vs Polar angle

    useEffect(() => {
        console.log(orbitControlsRef?.current)
    }, [orbitControlsRef])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 3, 15]} />
            <OrbitControls ref={orbitControlsRef} />
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#0000c9" />
            </mesh>
            <mesh rotation={[-(Math.PI / 180) * 90, 0, 0]}>
                <boxGeometry args={[10, 10, 0.01]} />
                <meshStandardMaterial color="red" />
            </mesh>
            <mesh rotation={[-(Math.PI / 180) * 0, 0, 0]}>
                <torusGeometry args={[3, 0.5, 116, 110]} />
                <meshStandardMaterial color="green" />
            </mesh>

            <ambientLight args={["0xffffff", 1]} />
        </>
    )
}

export default Pilot
