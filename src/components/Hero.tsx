import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BRAND_COLORS } from '../utils/constants'

export default function Hero() {
  const [allowParallax, setAllowParallax] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const bgX = useTransform(x, [-0.5, 0.5], [-40, 40])
  const bgY = useTransform(y, [-0.5, 0.5], [-40, 40])
  const contentX = useTransform(x, [-0.5, 0.5], [-10, 10])
  const contentY = useTransform(y, [-0.5, 0.5], [-10, 10])

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)')
    const sync = () => setAllowParallax(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!allowParallax) {
      mouseX.set(0)
      mouseY.set(0)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth - 0.5) * 2)
      mouseY.set((e.clientY / innerHeight - 0.5) * 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [allowParallax, mouseX, mouseY])

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden snap-start pt-28 pb-20 sm:pt-28 sm:pb-24 md:py-28">
      <div className="absolute inset-0 h-full w-full bg-black overflow-hidden">
        <motion.img
          src="/img/kraft-bg.jpeg"
          alt="Kraft Studio"
          className="h-[115%] w-[115%] max-w-none object-cover"
          loading="eager"
          decoding="async"
          style={allowParallax ? { x: bgX, y: bgY, scale: 1.08 } : { scale: 1.05 }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/45" />

        <motion.div
          className="absolute top-20 right-8 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-[#c4df34]/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-24 left-6 md:left-16 w-28 h-28 md:w-40 md:h-40 bg-[#c4df34]/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-white"
            style={allowParallax ? { x: contentX, y: contentY } : undefined}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="inline-block mb-4 md:mb-6"
            >
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#c4df34]">
                Kraft Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-[1.75rem] leading-[1.15] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-4 md:mb-6 text-balance"
            >
              Where Big Ideas Become Bold{' '}
              <span className="font-medium italic font-script" style={{ fontSize: '1.08em' }}>
                Architecture
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-sm sm:text-base md:text-xl text-white/95 mb-4 md:mb-6 max-w-xl leading-relaxed"
            >
              <p>မင်္ဂလာပါ.</p>
              <p>Kraft Studio မှ ကြိုဆိုပါတယ်</p>
              <p className="hidden xs:block">ဒီဇိုင်းများကို ဝင်ကြည့်ဖို့ဖိတ်ခေါ်ပါတယ်.</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="hidden sm:block text-base md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
            >
              Welcome to KRAFT STUDIO! We&apos;re thrilled to have you here. Feel free to wander through our
              creative space, where dreams take shape and ideas find their architectural home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/projects"
                  className="group relative inline-flex w-full xs:w-auto items-center justify-center px-6 sm:px-8 py-3.5 text-black text-xs sm:text-sm tracking-widest overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-[#c4df34]/50"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                >
                  <span className="relative z-10">VIEW PROJECTS</span>
                  <div
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: BRAND_COLORS.dark }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-widest text-xs sm:text-sm">
                    VIEW PROJECTS
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/projects/residential"
                  className="inline-flex w-full xs:w-auto items-center justify-center px-6 sm:px-8 py-3.5 border-2 border-[#c4df34] text-white text-xs sm:text-sm tracking-widest hover:bg-[#c4df34] hover:text-black transition-all duration-300 backdrop-blur-sm"
                >
                  RESIDENTIAL
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden md:flex flex-col gap-6"
          >
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '25', label: 'Design Awards' },
              { value: '12', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 + index * 0.15 }}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 group"
              >
                <div className="pr-10">
                  <div className="text-4xl lg:text-5xl font-light text-white mb-2">{stat.value}</div>
                  <div className="text-sm tracking-widest text-[#c4df34] uppercase">{stat.label}</div>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 pointer-events-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 18L15 12L9 6" stroke="#c4df34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#c4df34] text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-[#c4df34] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#c4df34] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
