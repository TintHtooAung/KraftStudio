import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function UrbanOffice() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main Tower */}
      <Box args={[3, 8, 3]} position={[0, 4, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#e0e0e0" roughness={0.6} metalness={0.2} />
      </Box>

      {/* Glass Facade - Front */}
      {[0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5].map((y, i) => (
        <Box key={`front-${i}`} args={[2.8, 0.7, 0.05]} position={[0, y, 1.53]} castShadow>
          <meshStandardMaterial 
            color="#4a90e2" 
            metalness={0.95} 
            roughness={0.05} 
            transparent 
            opacity={0.7} 
          />
        </Box>
      ))}

      {/* Glass Facade - Side */}
      {[0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5].map((y, i) => (
        <Box key={`side-${i}`} args={[0.05, 0.7, 2.8]} position={[1.53, y, 0]} castShadow>
          <meshStandardMaterial 
            color="#4a90e2" 
            metalness={0.95} 
            roughness={0.05} 
            transparent 
            opacity={0.7} 
          />
        </Box>
      ))}

      {/* Entrance Canopy */}
      <Box args={[3.5, 0.1, 1.5]} position={[0, 1.2, 2.5]} castShadow>
        <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.4} />
      </Box>

      {/* Entrance Pillars */}
      <Box args={[0.3, 1.2, 0.3]} position={[-1.2, 0.6, 2]} castShadow>
        <meshStandardMaterial color="#3a3a3a" roughness={0.6} />
      </Box>
      <Box args={[0.3, 1.2, 0.3]} position={[1.2, 0.6, 2]} castShadow>
        <meshStandardMaterial color="#3a3a3a" roughness={0.6} />
      </Box>

      {/* Rooftop Structure */}
      <Box args={[1.5, 0.8, 1.5]} position={[0, 8.4, 0]} castShadow>
        <meshStandardMaterial color="#4a4a4a" metalness={0.4} roughness={0.5} />
      </Box>

      {/* Ground Plaza */}
      <Box args={[8, 0.05, 8]} position={[0, -0.025, 0]} receiveShadow>
        <meshStandardMaterial color="#8a8a8a" roughness={0.8} />
      </Box>

      {/* Landscaping */}
      <Box args={[1.5, 0.02, 1.5]} position={[-3, 0.01, -3]} receiveShadow>
        <meshStandardMaterial color="#7cb342" roughness={1} />
      </Box>
      <Box args={[1.5, 0.02, 1.5]} position={[3, 0.01, -3]} receiveShadow>
        <meshStandardMaterial color="#7cb342" roughness={1} />
      </Box>
    </group>
  )
}
