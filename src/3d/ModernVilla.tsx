import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function ModernVilla() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Ground Floor - Main Building */}
      <Box args={[4, 1.5, 3]} position={[0, 0.75, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#f5f5f5" roughness={0.7} metalness={0.1} />
      </Box>

      {/* Second Floor */}
      <Box args={[3.5, 1.2, 2.5]} position={[0, 2.1, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#e8e8e8" roughness={0.7} metalness={0.1} />
      </Box>

      {/* Flat Roof */}
      <Box args={[4.2, 0.2, 3.2]} position={[0, 2.9, 0]} castShadow>
        <meshStandardMaterial color="#2a2a2a" roughness={0.5} metalness={0.3} />
      </Box>

      {/* Large Glass Windows - Ground Floor */}
      <Box args={[3.5, 1.2, 0.05]} position={[0, 0.9, 1.53]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.6} />
      </Box>

      {/* Glass Windows - Second Floor */}
      <Box args={[3, 0.9, 0.05]} position={[0, 2.1, 1.28]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.6} />
      </Box>

      {/* Main Door */}
      <Box args={[1, 1.4, 0.05]} position={[-1.5, 0.7, 1.53]} castShadow>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.6} />
      </Box>

      {/* Balcony */}
      <Box args={[3.5, 0.1, 0.8]} position={[0, 1.55, 1.65]} castShadow receiveShadow>
        <meshStandardMaterial color="#d0d0d0" roughness={0.6} metalness={0.2} />
      </Box>

      {/* Pool */}
      <Box args={[2.5, 0.3, 1.5]} position={[0, 0.15, 3.5]} receiveShadow>
        <meshStandardMaterial color="#1e88e5" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
      </Box>

      {/* Ground */}
      <Box args={[10, 0.05, 10]} position={[0, -0.025, 0]} receiveShadow>
        <meshStandardMaterial color="#a8a8a8" roughness={0.9} />
      </Box>

      {/* Lawn */}
      <Box args={[8, 0.02, 8]} position={[0, 0.01, 0]} receiveShadow>
        <meshStandardMaterial color="#7cb342" roughness={1} />
      </Box>
    </group>
  )
}
