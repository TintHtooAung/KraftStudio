import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera, ContactShadows, Sky, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import ModernVilla from './ModernVilla'
import UrbanOffice from './UrbanOffice'
import MinimalistApartment from './MinimalistApartment'
import Loader from '../components/Loader'

interface SceneProps {
  modelId?: string
}

// Real 3D Model Component
function RealModel({ path, scale = 1, position = [0, 0, 0] }: { path: string; scale?: number; position?: [number, number, number] }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} scale={scale} position={position} />
}

export default function Scene({ modelId = '1' }: SceneProps) {
  // Select model based on ID - mix of real models and procedural
  const ModelComponent = () => {
    switch (modelId) {
      case '1':
        return <ModernVilla />
      case '2':
        // Multi-story school building - Real architectural model
        return <RealModel path="/models/multi-story-school.glb" scale={0.5} position={[0, 0, 0]} />
      case '3':
        return <MinimalistApartment />
      case '4':
        // City scene
        return <RealModel path="/models/city.glb" scale={0.01} position={[0, 0, 0]} />
      case '5':
        return <UrbanOffice />
      case '6':
        // Box demo
        return <RealModel path="/models/box.glb" scale={1} position={[0, 1, 0]} />
      default:
        return <ModernVilla />
    }
  }

  // Adjust camera based on model
  const getCameraPosition = (): [number, number, number] => {
    switch (modelId) {
      case '2':
        return [10, 6, 10]
      case '4':
        return [5, 3, 5]
      case '5':
        return [8, 5, 8]
      case '6':
        return [3, 2, 3]
      default:
        return [8, 5, 8]
    }
  }

  return (
    <Canvas shadows className="w-full h-full">
      <PerspectiveCamera makeDefault position={getCameraPosition()} fov={50} />
      
      {/* Sky Background */}
      <Sky sunPosition={[100, 20, 100]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 15, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-5, 8, -5]} intensity={0.4} />
      <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.6} penumbra={1} castShadow />

      {/* Environment */}
      <Environment preset="sunset" />

      {/* Model - Dynamic based on ID */}
      <Suspense fallback={<Loader />}>
        <ModelComponent />
        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.5}
          scale={15}
          blur={2.5}
          far={4}
        />
      </Suspense>

      {/* Grid Helper for Reference */}
      <gridHelper args={[20, 20, '#888888', '#cccccc']} position={[0, 0, 0]} />

      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={3}
        maxDistance={25}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, modelId === '4' ? 0 : 1.5, 0]}
      />
    </Canvas>
  )
}
