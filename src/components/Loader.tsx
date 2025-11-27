import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()
  
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-1 bg-gray-800/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-white text-sm tracking-widest">
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  )
}
