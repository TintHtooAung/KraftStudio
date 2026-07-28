import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import {
  DEFAULT_PROJECT_CATEGORY,
  PROJECT_CATEGORIES,
} from '../utils/constants'

export default function Projects() {
  const { category } = useParams<{ category?: string }>()
  const categoryKey =
    category && PROJECT_CATEGORIES[category] ? category : DEFAULT_PROJECT_CATEGORY
  const categoryMeta = PROJECT_CATEGORIES[categoryKey]

  const filteredProjects = useMemo(
    () => projects.filter((p) => categoryMeta.disciplines.includes(p.discipline)),
    [categoryMeta]
  )

  const [activeProject, setActiveProject] = useState(filteredProjects[0] ?? projects[0])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showScrollArrow, setShowScrollArrow] = useState(true)
  const [allowParallax, setAllowParallax] = useState(false)

  const heroMouseX = useMotionValue(0)
  const heroMouseY = useMotionValue(0)
  const heroSpring = { damping: 50, stiffness: 100 }
  const heroX = useSpring(heroMouseX, heroSpring)
  const heroY = useSpring(heroMouseY, heroSpring)
  const heroBgX = useTransform(heroX, [-0.5, 0.5], [-40, 40])
  const heroBgY = useTransform(heroY, [-0.5, 0.5], [-40, 40])
  const heroContentX = useTransform(heroX, [-0.5, 0.5], [-10, 10])
  const heroContentY = useTransform(heroY, [-0.5, 0.5], [-10, 10])

  const showcaseMouseX = useMotionValue(0)
  const showcaseMouseY = useMotionValue(0)
  const showcaseX = useSpring(showcaseMouseX, heroSpring)
  const showcaseY = useSpring(showcaseMouseY, heroSpring)
  const showcaseBgX = useTransform(showcaseX, [-0.5, 0.5], [-30, 30])
  const showcaseBgY = useTransform(showcaseY, [-0.5, 0.5], [-30, 30])
  const showcaseContentX = useTransform(showcaseX, [-0.5, 0.5], [-8, 8])
  const showcaseContentY = useTransform(showcaseY, [-0.5, 0.5], [-8, 8])

  useEffect(() => {
    setActiveProject(filteredProjects[0] ?? projects[0])
  }, [filteredProjects])

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)')
    const sync = () => setAllowParallax(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!allowParallax) {
      heroMouseX.set(0)
      heroMouseY.set(0)
      showcaseMouseX.set(0)
      showcaseMouseY.set(0)
      return
    }

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
  }, [allowParallax, heroMouseX, heroMouseY, showcaseMouseX, showcaseMouseY])

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
      checkScroll()
    }

    return () => container?.removeEventListener('scroll', checkScroll)
  }, [filteredProjects])

  const scrollDown = () => {
    scrollContainerRef.current?.scrollBy({ top: 200, behavior: 'smooth' })
  }

  const listEmpty = filteredProjects.length === 0

  return (
    <div className="min-h-dvh bg-[#f9f8f3] text-[#0a0a0a]">
      <section className="relative min-h-[70vh] md:min-h-dvh h-auto md:h-dvh flex items-center overflow-hidden pt-24 pb-16 md:py-0">
        <div className="absolute inset-0 h-full w-full bg-black overflow-hidden">
          <motion.img
            src={categoryMeta.heroImage}
            alt={categoryMeta.title}
            className="h-[115%] w-[115%] max-w-none object-cover"
            style={allowParallax ? { x: heroBgX, y: heroBgY, scale: 1.1 } : { scale: 1.05 }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-3 sm:gap-4"
            style={allowParallax ? { x: heroContentX, y: heroContentY } : undefined}
          >
            <div className="hidden md:block flex-1 h-px bg-white/40" />
            <motion.h1
              key={categoryMeta.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.8rem] font-light uppercase text-center tracking-[0.12em] sm:tracking-[0.16em] text-balance leading-tight"
            >
              {categoryMeta.title}
            </motion.h1>
            <div className="hidden md:block flex-1 h-px bg-white/40" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex"
        >
          <button
            type="button"
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[#c4df34] text-xs tracking-widest uppercase group-hover:text-white transition-colors">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-[#c4df34] rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
              <motion.div
                className="w-1 h-2 bg-[#c4df34] rounded-full group-hover:bg-white transition-colors"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
              />
            </div>
          </button>
        </motion.div>
      </section>

      <section className="relative min-h-dvh overflow-hidden bg-black">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeProject?.id ?? 'empty'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 z-0"
          >
            {activeProject && (
              <>
                <motion.img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={allowParallax ? { x: showcaseBgX, y: showcaseBgY, scale: 1.05 } : { scale: 1.02 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/45" />
              </>
            )}

            <div className="absolute inset-0 flex items-end pointer-events-none">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-8 md:pb-20 text-white">
                {activeProject && (
                  <motion.div
                    key={`info-${activeProject.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden lg:block max-w-2xl"
                    style={allowParallax ? { x: showcaseContentX, y: showcaseContentY } : undefined}
                  >
                    <span className="inline-block px-4 py-2 bg-black/20 backdrop-blur-md border border-[#c4df34]/30 text-white text-xs tracking-[0.3em] uppercase mb-4">
                      {activeProject.discipline}
                    </span>
                    <h2 className="text-4xl xl:text-6xl font-light mb-4">{activeProject.title}</h2>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">{activeProject.description}</p>
                    <div className="flex flex-wrap gap-4 text-white/80 text-sm tracking-wider">
                      <span>{activeProject.location}</span>
                      <span>•</span>
                      <span>{activeProject.year}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 min-h-dvh flex items-end lg:items-center justify-center lg:justify-end px-4 sm:px-6 lg:pr-8 py-8 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md lg:max-w-md"
          >
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="backdrop-blur-xl bg-black/55 border border-[#c4df34]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[55vh] lg:max-h-[85vh] overflow-y-auto scrollbar-hide"
              >
                {listEmpty ? (
                  <p className="text-white/70 text-sm tracking-wide py-6 text-center">
                    Projects for this category are coming soon.
                  </p>
                ) : (
                  <div className="divide-y divide-[#c4df34]/20">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        onHoverStart={() => setActiveProject(project)}
                        onFocus={() => setActiveProject(project)}
                        onClick={() => setActiveProject(project)}
                        className={`group cursor-pointer ${
                          activeProject?.id === project.id ? 'bg-white/5' : ''
                        }`}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          to={`/project/${project.id}`}
                          className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 transition-all duration-300"
                        >
                          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.5em] text-white/40 group-hover:text-[#c4df34] transition-colors font-light">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-white group-hover:text-[#c4df34] transition-colors truncate">
                              {project.title}
                            </p>
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/50 mt-1 group-hover:text-[#c4df34]/80 transition-colors font-light truncate">
                              {project.location}
                            </p>
                          </div>
                          <div className="hidden xs:block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-[#c4df34]/80 transition-colors font-light text-right shrink-0">
                            <span>{project.year}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {showScrollArrow && !listEmpty && (
                <motion.button
                  type="button"
                  onClick={scrollDown}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#c4df34]/40 hover:bg-[#c4df34]/60 border-2 border-[#c4df34] rounded-full transition-all duration-300 shadow-lg shadow-[#c4df34]/30"
                  aria-label="Scroll project list"
                >
                  <motion.svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c4df34"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                </motion.button>
              )}
            </div>

            {activeProject && (
              <div className="lg:hidden mt-5 text-white px-1">
                <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#c4df34] mb-2">
                  {activeProject.discipline}
                </span>
                <h2 className="text-2xl font-light mb-2">{activeProject.title}</h2>
                <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
                  {activeProject.description}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
