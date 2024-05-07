import { Canvas } from '@react-three/fiber'
import './App.css'
import { DragControls, FlyControls, OrbitControls, PerspectiveCamera, TrackballControls } from '@react-three/drei'

function App() {

  return (
    <Canvas id="canvas">
      <PerspectiveCamera makeDefault position={[0,3,15]}/>
      <TrackballControls />
      <mesh>
        <sphereGeometry args={[1,32,32]}/>
        <meshStandardMaterial color="#0000c9" />
      </mesh>
      <mesh rotation={[-(Math.PI/180)*90,0,0]}>
        <boxGeometry args={[10,10,0.01]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh rotation={[-(Math.PI/180)*0,0,0]}>
        <torusGeometry args={[3,0.5,116,110]}/>
        <meshStandardMaterial color="green" />
      </mesh>

      <ambientLight args={["0x404040", 1]}/>
    </Canvas>
  )
}

export default App
