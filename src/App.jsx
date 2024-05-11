import './App.css'
import Pilot from './components/Pilot'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <Canvas id="canvas" shadows>
      <Pilot/>
    </Canvas>
  )
}

export default App
