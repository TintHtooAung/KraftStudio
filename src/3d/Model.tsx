import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import FallbackModel from './FallbackModel'

interface ModelProps {
  modelPath?: string
}

export default function Model({ modelPath = '/models/house.glb' }: ModelProps) {
  try {
    const { scene } = useGLTF(modelPath)

    useEffect(() => {
      // Traverse the scene and set materials
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }, [scene])

    return <primitive object={scene} scale={1.5} />
  } catch (err) {
    console.warn('Model not found, using fallback:', err)
    return <FallbackModel />
  }
}

// Try to preload the model, fallback if not found
try {
  useGLTF.preload('/models/house.glb')
} catch (err) {
  console.warn('Model preload failed, will use fallback')
}
