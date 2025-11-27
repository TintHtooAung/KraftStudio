import { Box, Cylinder } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function MinimalistApartment() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main Building - 3 Floors */}
      <Box args={[5, 1.2, 3]} position={[0, 0.6, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#fafafa" roughness={0.7} metalness={0.1} />
      </Box>
      <Box args={[5, 1.2, 3]} position={[0, 1.8, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#f5f5f5" roughness={0.7} metalness={0.1} />
      </Box>
      <Box args={[5, 1.2, 3]} position={[0, 3.0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#f0f0f0" roughness={0.7} metalness={0.1} />
      </Box>

      {/* Flat Roof */}
      <Box args={[5.2, 0.15, 3.2]} position={[0, 3.7, 0]} castShadow>
        <meshStandardMaterial color="#2a2a2a" roughness={0.5} metalness={0.3} />
      </Box>

      {/* Windows - Floor 1 */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <Box key={`f1-${i}`} args={[0.9, 0.8, 0.05]} position={[x, 0.6, 1.53]} castShadow>
          <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
        </Box>
      ))}

      {/* Windows - Floor 2 */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <Box key={`f2-${i}`} args={[0.9, 0.8, 0.05]} position={[x, 1.8, 1.53]} castShadow>
          <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
        </Box>
      ))}

      {/* Windows - Floor 3 */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <Box key={`f3-${i}`} args={[0.9, 0.8, 0.05]} position={[x, 3.0, 1.53]} castShadow>
          <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
        </Box>
      ))}

      {/* Balconies */}
      {[1.25, 2.45].map((y, i) => (
        <Box key={`balcony-${i}`} args={[1.2, 0.08, 0.5]} position={[1.5, y, 1.75]} castShadow receiveShadow>
          <meshStandardMaterial color="#d0d0d0" roughness={0.6} metalness={0.2} />
        </Box>
      ))}

      {/* Balcony Railings */}
      {[1.25, 2.45].map((y, i) => (
        <Box key={`railing-${i}`} args={[1.2, 0.4, 0.03]} position={[1.5, y + 0.2, 2]} castShadow>
          <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.3} />
        </Box>
      ))}

      {/* Entrance */}
      <Box args={[1.2, 1.0, 0.05]} position={[-1.5, 0.5, 1.53]} castShadow>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.6} />
      </Box>

      {/* Entrance Canopy */}
      <Box args={[1.5, 0.08, 0.8]} position={[-1.5, 1.1, 1.9]} castShadow>
        <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.4} />
      </Box>

      {/* Side Windows */}
      {[0.6, 1.8, 3.0].map((y, i) => (
        <Box key={`side-${i}`} args={[0.05, 0.6, 0.8]} position={[2.53, y, 0]} castShadow>
          <meshStandardMaterial color="#4a90e2" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
        </Box>
      ))}

      {/* Ground */}
      <Box args={[10, 0.05, 10]} position={[0, -0.025, 0]} receiveShadow>
        <meshStandardMaterial color="#a8a8a8" roughness={0.9} />
      </Box>

      {/* Garden Area */}
      <Box args={[8, 0.02, 8]} position={[0, 0.01, 0]} receiveShadow>
        <meshStandardMaterial color="#7cb342" roughness={1} />
      </Box>

      {/* Parking Area */}
      <Box args={[2, 0.03, 3]} position={[-3, 0.015, 2]} receiveShadow>
        <meshStandardMaterial color="#5a5a5a" roughness={0.8} />
      </Box>

      {/* Trees (simple cylinders) */}
      <Cylinder args={[0.15, 0.15, 1.5]} position={[3, 0.75, 3]} castShadow>
        <meshStandardMaterial color="#8b4513" roughness={0.9} />
      </Cylinder>
      <Cylinder args={[0.6, 0.3, 1]} position={[3, 1.8, 3]} castShadow>
        <meshStandardMaterial color="#4caf50" roughness={0.8} />
      </Cylinder>
    </group>
  )
}
