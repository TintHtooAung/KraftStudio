import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BRAND_COLORS } from '../utils/constants'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 50, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5])
  const scale = useTransform(x, [-0.5, 0.5], [1, 1.05])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPos = (clientX / innerWidth - 0.5) * 2
      const yPos = (clientY / innerHeight - 0.5) * 2
      
      mouseX.set(xPos)
      mouseY.set(yPos)
      setMousePosition({ x: xPos, y: yPos })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen h-screen py-16 flex items-center justify-center overflow-hidden snap-start">
      {/* Animated Background Image with Parallax */}
      <div className="absolute inset-0 h-full w-full bg-black overflow-hidden">
        <motion.img
          src="/img/kraft-bg.jpeg"
          alt="Kraft Studio"
          className="h-[120%] w-[120%] object-cover"
          loading="eager"
          style={{
            x: useTransform(x, [-0.5, 0.5], [-40, 40]),
            y: useTransform(y, [-0.5, 0.5], [-40, 40]),
            scale: 1.1,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        
        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-[#c4df34]/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-40 h-40 bg-[#c4df34]/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content Layer with Subtle Parallax */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        style={{
          rotateX,
          rotateY,
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white"
            style={{
              x: useTransform(x, [-0.5, 0.5], [-10, 10]),
              y: useTransform(y, [-0.5, 0.5], [-10, 10]),
            }}
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-[0.3em] uppercase text-[#c4df34]">
                Kraft Studio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight"
            >
              Where Big Ideas Become Bold{' '}
              <span
                className="font-medium italic"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.08em' }}
              >
                Architecture
              </span>
            </motion.h1>

            {/* Burmese Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-white/95 mb-8 max-w-xl leading-relaxed"
            >
              <p className="mb-2">မင်္ဂလာပါ.</p>
              <p className="mb-2">Kraft Studio မှ ကြိုဆိုပါတယ်</p>
              <p>ဒီဇိုင်းများကို ဝင်ကြည့်ဖို့ဖိတ်ခေါ်ပါတယ်.</p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
            >
              Welcome to KRAFT STUDIO! We're thrilled to have you here. Feel free to wander through our creative space, where dreams take shape and ideas find their architectural home. Let's embark on a journey to transform your visions into extraordinary spaces together!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="group relative px-8 py-4 text-black text-sm tracking-widest overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-[#c4df34]/50"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                >
                  <span className="relative z-10">VIEW PROJECTS</span>
                  <div
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: BRAND_COLORS.dark }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-widest text-sm">
                    VIEW PROJECTS
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects/residential"
                  className="px-8 py-4 border-2 border-[#c4df34] text-white text-sm tracking-widest hover:bg-[#c4df34] hover:text-black hover:shadow-lg hover:shadow-[#c4df34]/50 transition-all duration-300 backdrop-blur-sm"
                >
                  RESIDENTIAL
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats/Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:flex flex-col gap-6"
          >
            {/* Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 group"
            >
              <div className="pr-10">
                <div className="text-5xl font-light text-white mb-2">150+</div>
                <div className="text-sm tracking-widest text-[#c4df34] uppercase">Projects Completed</div>
              </div>
              {/* Green Arrow on Hover */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#c4df34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 group"
            >
              <div className="pr-10">
                <div className="text-5xl font-light text-white mb-2">25</div>
                <div className="text-sm tracking-widest text-[#c4df34] uppercase">Design Awards</div>
              </div>
              {/* Green Arrow on Hover */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#c4df34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 group"
            >
              <div className="pr-10">
                <div className="text-5xl font-light text-white mb-2">12</div>
                <div className="text-sm tracking-widest text-[#c4df34] uppercase">Years Experience</div>
              </div>
              {/* Green Arrow on Hover */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#c4df34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-[#c4df34] text-xs tracking-widest uppercase group-hover:text-white transition-colors">Scroll</span>
          <div className="w-6 h-10 border-2 border-[#c4df34] rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
            <motion.div 
              className="w-1 h-2 bg-[#c4df34] rounded-full group-hover:bg-white transition-colors"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}
