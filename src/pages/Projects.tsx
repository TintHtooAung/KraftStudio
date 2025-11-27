import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function Projects() {
  const residentialProjects = projects.filter(p => p.discipline === 'Residential')
  const [activeProject, setActiveProject] = useState(residentialProjects[0])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showScrollArrow, setShowScrollArrow] = useState(true)
  const [hasUserScrolled, setHasUserScrolled] = useState(false)
  
  // Hero section mouse tracking
  const heroMouseX = useMotionValue(0)
  const heroMouseY = useMotionValue(0)
  const heroSpring = { damping: 50, stiffness: 100 }
  const heroX = useSpring(heroMouseX, heroSpring)
  const heroY = useSpring(heroMouseY, heroSpring)
  const heroBgX = useTransform(heroX, [-0.5, 0.5], [-40, 40])
  const heroBgY = useTransform(heroY, [-0.5, 0.5], [-40, 40])
  const heroContentX = useTransform(heroX, [-0.5, 0.5], [-10, 10])
  const heroContentY = useTransform(heroY, [-0.5, 0.5], [-10, 10])
  const rotateX = useTransform(heroY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(heroX, [-0.5, 0.5], [-5, 5])
  
  // Projects showcase section mouse tracking
  const showcaseMouseX = useMotionValue(0)
  const showcaseMouseY = useMotionValue(0)
  const showcaseSpring = { damping: 50, stiffness: 100 }
  const showcaseX = useSpring(showcaseMouseX, showcaseSpring)
  const showcaseY = useSpring(showcaseMouseY, showcaseSpring)
  const showcaseBgX = useTransform(showcaseX, [-0.5, 0.5], [-30, 30])
  const showcaseBgY = useTransform(showcaseY, [-0.5, 0.5], [-30, 30])
  const showcaseContentX = useTransform(showcaseX, [-0.5, 0.5], [-8, 8])
  const showcaseContentY = useTransform(showcaseY, [-0.5, 0.5], [-8, 8])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const xPos = (e.clientX / innerWidth - 0.5) * 2
      const yPos = (e.clientY / innerHeight - 0.5) * 2
      heroMouseX.set(xPos)
      heroMouseY.set(yPos)
      showcaseMouseX.set(xPos)
      showcaseMouseY.set(yPos)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [heroMouseX, heroMouseY, showcaseMouseX, showcaseMouseY])

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
        setShowScrollArrow(scrollTop + clientHeight < scrollHeight - 10)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll() // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll)
      }
    }
  }, [])

  useEffect(() => {
    // Track if user has scrolled
    const handleInitialScroll = () => {
      if (window.scrollY > 0) {
        setHasUserScrolled(true)
      }
    }

    window.addEventListener('scroll', handleInitialScroll, { once: true })
    return () => window.removeEventListener('scroll', handleInitialScroll)
  }, [])

  useEffect(() => {
    if (!hasUserScrolled) return

    let isScrolling = false
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return
      
      const currentScroll = window.scrollY
      const windowHeight = window.innerHeight
      const isInHero = currentScroll < windowHeight * 0.5
      
      if (e.deltaY > 0 && isInHero) {
        // Scrolling down from hero section
        isScrolling = true
        e.preventDefault()
        window.scrollTo({
          top: windowHeight,
          behavior: 'smooth'
        })
        setTimeout(() => {
          isScrolling = false
        }, 1000)
      } else if (e.deltaY < 0 && currentScroll > windowHeight * 0.5 && currentScroll < windowHeight * 1.5) {
        // Scrolling up from project section
        isScrolling = true
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [hasUserScrolled])

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 200,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#f9f8f3] text-[#0a0a0a] scroll-smooth" style={{ scrollSnapType: 'y mandatory' }}>
      <section className="relative h-screen flex items-center overflow-hidden snap-start snap-always">
        <div className="absolute inset-0 h-full w-full bg-black overflow-hidden">
          <motion.img
            src="/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg"
            alt="Our Residentials"
            className="h-[120%] w-[120%] object-cover"
            style={{
              x: heroBgX,
              y: heroBgY,
              scale: 1.1,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        <div className="relative max-w-6xl mx-auto w-full px-6 text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-4 overflow-visible"
            style={{ 
              x: heroContentX, 
              y: heroContentY,
              rotateX,
              rotateY,
            }}
          >
            <div className="hidden md:block flex-1 h-px bg-white/40" />
            <motion.h1
              initial={{ letterSpacing: '0.12em' }}
              animate={{ letterSpacing: '0.18em' }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="text-4xl md:text-[4.8rem] lg:text-[5.8rem] font-light uppercase whitespace-nowrap tracking-[0.18em]"
            >
              OUR RESIDENTIALS
            </motion.h1>
            <div className="hidden md:block flex-1 h-px bg-white/40" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }}
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

      {/* Projects List Section */}
      <section className="relative h-screen overflow-hidden bg-black snap-start snap-always">
        {/* Full Screen Project Image & Info - Background */}
        <AnimatePresence mode="sync">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 z-0"
          >
            <motion.img
              src={activeProject.image}
              alt={activeProject.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                x: showcaseBgX,
                y: showcaseBgY,
                scale: 1.05,
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/20" />
            
            {/* Project Info Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-20 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                  key={activeProject.id}
                  style={{
                    x: showcaseContentX,
                    y: showcaseContentY,
                  }}
                >
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-block px-4 py-2 bg-black/20 backdrop-blur-md border border-[#c4df34]/30 text-white text-xs tracking-[0.3em] uppercase mb-4"
                  >
                    {activeProject.discipline}
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-light mb-4"
                  >
                    {activeProject.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-white/90 max-w-2xl mb-6 leading-relaxed"
                  >
                    {activeProject.description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-wrap gap-6 text-white/80 text-sm tracking-wider"
                  >
                    <span>{activeProject.location}</span>
                    <span>•</span>
                    <span>{activeProject.year}</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Glass Panel Project List - Right Middle */}
        <div className="relative z-10 min-h-screen flex items-center justify-end px-6 pr-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full"
          >
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="backdrop-blur-xl bg-black/50 border border-[#c4df34]/30 rounded-3xl p-8 shadow-2xl max-h-[85vh] overflow-y-auto scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="divide-y divide-[#c4df34]/20">
                  {residentialProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      onHoverStart={() => setActiveProject(project)}
                      onFocus={() => setActiveProject(project)}
                      className="group cursor-pointer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={`/project/${project.id}`}
                        className="flex items-center gap-4 py-5 transition-all duration-300"
                      >
                        <span className="text-xs uppercase tracking-[0.5em] text-white/40 group-hover:text-[#c4df34] transition-colors duration-300 font-light">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <p className="text-xl md:text-2xl font-light tracking-tight text-white group-hover:text-[#c4df34] transition-colors duration-300">
                            {project.title}
                          </p>
                          <p className="text-xs uppercase tracking-[0.4em] text-white/50 mt-1 group-hover:text-[#c4df34]/80 transition-colors duration-300 font-light">
                            {project.location}
                          </p>
                        </div>
                        <div className="text-xs uppercase tracking-[0.4em] text-white/50 group-hover:text-[#c4df34]/80 transition-colors duration-300 font-light text-right">
                          <span>{project.year}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Down Arrow Button */}
              {showScrollArrow && (
                <motion.button
                  onClick={scrollDown}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-[#c4df34]/40 hover:bg-[#c4df34]/60 border-2 border-[#c4df34] rounded-full transition-all duration-300 group shadow-lg shadow-[#c4df34]/30 hover:shadow-[#c4df34]/50"
                >
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c4df34"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="group-hover:stroke-white transition-colors drop-shadow-sm"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
