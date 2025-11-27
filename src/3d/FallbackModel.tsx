import { Box, Cylinder } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function FallbackModel() {
  const groupRef = useRef<THREE.Group>(null)

  // Subtle floating animation
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

      {/* Roof - Flat Modern */}
      <Box args={[4.2, 0.2, 3.2]} position={[0, 2.9, 0]} castShadow>
        <meshStandardMaterial color="#2a2a2a" roughness={0.5} metalness={0.3} />
      </Box>

      {/* Rooftop Terrace Wall */}
      <Box args={[4, 0.3, 0.1]} position={[0, 3.15, 1.5]} castShadow>
        <meshStandardMaterial color="#3a3a3a" roughness={0.6} metalness={0.2} />
      </Box>

      {/* Front Windows - Ground Floor */}
      <Box args={[0.8, 1, 0.05]} position={[-1.2, 0.9, 1.53]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
      </Box>
      <Box args={[0.8, 1, 0.05]} position={[0, 0.9, 1.53]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
      </Box>
      <Box args={[0.8, 1, 0.05]} position={[1.2, 0.9, 1.53]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
      </Box>

      {/* Front Windows - Second Floor */}
      <Box args={[1.2, 0.8, 0.05]} position={[-0.9, 2.1, 1.28]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
      </Box>
      <Box args={[1.2, 0.8, 0.05]} position={[0.9, 2.1, 1.28]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
      </Box>

      {/* Side Windows */}
      <Box args={[0.05, 0.8, 0.6]} position={[2.03, 0.9, 0]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
      </Box>
      <Box args={[0.05, 0.8, 0.6]} position={[-2.03, 0.9, 0]} castShadow>
        <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
      </Box>

      {/* Main Door */}
      <Box args={[0.9, 1.4, 0.05]} position={[0, 0.7, 1.53]} castShadow>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.6} />
      </Box>

      {/* Door Handle */}
      <Cylinder args={[0.03, 0.03, 0.15]} position={[0.35, 0.7, 1.6]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </Cylinder>

      {/* Balcony - Second Floor */}
      <Box args={[3.5, 0.1, 0.8]} position={[0, 1.55, 1.65]} castShadow receiveShadow>
        <meshStandardMaterial color="#d0d0d0" roughness={0.6} metalness={0.2} />
      </Box>

      {/* Balcony Railing */}
      <Box args={[3.5, 0.05, 0.05]} position={[0, 1.85, 2]} castShadow>
        <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
      </Box>

      {/* Balcony Vertical Rails */}
      {[-1.5, -0.75, 0, 0.75, 1.5].map((x, i) => (
        <Box key={i} args={[0.03, 0.3, 0.03]} position={[x, 1.7, 2]} castShadow>
          <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
        </Box>
      ))}

      {/* Entrance Steps */}
      <Box args={[1.2, 0.1, 0.3]} position={[0, 0.05, 1.8]} receiveShadow>
        <meshStandardMaterial color="#c0c0c0" roughness={0.8} />
      </Box>
      <Box args={[1.2, 0.1, 0.3]} position={[0, 0.15, 2.0]} receiveShadow>
        <meshStandardMaterial color="#c0c0c0" roughness={0.8} />
      </Box>

      {/* Decorative Columns */}
      <Cylinder args={[0.15, 0.15, 1.5]} position={[-1.8, 0.75, 1.3]} castShadow>
        <meshStandardMaterial color="#e0e0e0" roughness={0.6} metalness={0.1} />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 1.5]} position={[1.8, 0.75, 1.3]} castShadow>
        <meshStandardMaterial color="#e0e0e0" roughness={0.6} metalness={0.1} />
      </Cylinder>

      {/* Chimney */}
      <Box args={[0.4, 0.8, 0.4]} position={[1.5, 3.5, -0.8]} castShadow>
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} />
      </Box>

      {/* AC Unit on Roof */}
      <Box args={[0.6, 0.3, 0.4]} position={[-1.2, 3.15, 0]} castShadow>
        <meshStandardMaterial color="#4a4a4a" metalness={0.5} roughness={0.5} />
      </Box>

      {/* Ground Plane */}
      <Box args={[10, 0.05, 10]} position={[0, -0.025, 0]} receiveShadow>
        <meshStandardMaterial color="#a8a8a8" roughness={0.9} />
      </Box>

      {/* Garden/Lawn */}
      <Box args={[8, 0.02, 8]} position={[0, 0.01, 0]} receiveShadow>
        <meshStandardMaterial color="#7cb342" roughness={1} />
      </Box>

      {/* Driveway */}
      <Box args={[1.5, 0.03, 4]} position={[2.5, 0.015, 2]} receiveShadow>
        <meshStandardMaterial color="#5a5a5a" roughness={0.8} />
      </Box>
    </group>
  )
}
