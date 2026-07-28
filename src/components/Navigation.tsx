import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { BRAND_COLORS } from '../utils/constants'

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isProjectRoute = location.pathname.includes('/project')
  const useDarkText = hasScrolled || isProjectRoute

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setProjectsDropdownOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleContactClick = () => {
    const scrollToContact = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (location.pathname === '/') {
      scrollToContact()
    } else {
      navigate('/', { state: { scrollTarget: 'contact' } })
    }
    setMenuOpen(false)
    setProjectsDropdownOpen(false)
  }

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const scrollToAbout = () => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (location.pathname === '/') {
      scrollToAbout()
    } else {
      navigate('/#about')
      setTimeout(scrollToAbout, 100)
    }
    setMenuOpen(false)
    setProjectsDropdownOpen(false)
  }

  const linkClass = (active = false) =>
    `text-sm font-semibold uppercase tracking-[0.28em] md:tracking-[0.35em] transition-colors duration-300 ${
      active || useDarkText
        ? 'text-black hover:text-[#C3FF1F]'
        : 'text-white/85 hover:text-[#C3FF1F]'
    }`

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 ${
        hasScrolled
          ? 'bg-white/90 backdrop-blur-xl border-black/10 shadow-[0_8px_32px_rgba(15,15,15,0.12)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-base sm:text-xl font-bold tracking-wider transition-colors"
          style={{ color: useDarkText ? '#111111' : BRAND_COLORS.primary }}
        >
          KRAFT STUDIO
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/" className={linkClass(location.pathname === '/')}>
            HOME
          </Link>

          <Link to="/#about" onClick={handleAboutClick} className={linkClass()}>
            ABOUT US
          </Link>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
            onFocus={() => setProjectsDropdownOpen(true)}
            onBlur={() => setProjectsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setProjectsDropdownOpen(false)
                navigate('/projects')
              }}
              className={linkClass(isProjectRoute)}
            >
              PROJECTS
            </button>

            <AnimatePresence>
              {projectsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[min(420px,90vw)] rounded-3xl border border-white/40 bg-black/80 shadow-[0_35px_65px_rgba(0,0,0,0.55)] backdrop-blur-xl px-6 py-5 grid grid-cols-1 gap-3"
                >
                  {[
                    { label: 'Residential', href: '/projects/residential' },
                    { label: 'Hotels & Schools', href: '/projects/hotels-schools' },
                    { label: 'Commercial', href: '/projects/commercial' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setProjectsDropdownOpen(false)}
                      className="group flex items-center justify-between text-xs font-medium uppercase tracking-[0.25em] text-white/80 transition-all hover:text-[#C3FF1F]"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] transition-colors text-white/60 group-hover:text-[#C3FF1F]">↗</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={handleContactClick}
            className="px-5 lg:px-6 py-2 text-sm tracking-wide font-semibold text-black transition-all hover:brightness-95"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            CONTACT
          </button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`w-6 h-0.5 transition-transform duration-300 ${useDarkText || menuOpen ? 'bg-black' : 'bg-white'} ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-opacity duration-300 ${useDarkText || menuOpen ? 'bg-black' : 'bg-white'} ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-transform duration-300 ${useDarkText || menuOpen ? 'bg-black' : 'bg-white'} ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 sm:px-6 py-5 flex flex-col gap-4 max-h-[calc(100dvh-4rem)] overflow-y-auto">
              <Link to="/" className="text-sm tracking-wide text-black py-1" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>

              <Link to="/#about" className="text-sm tracking-wide text-black py-1" onClick={handleAboutClick}>
                ABOUT US
              </Link>

              <div className="flex flex-col gap-2">
                <div className="text-sm tracking-wide text-black font-semibold">PROJECTS</div>
                <Link to="/projects/residential" className="text-sm tracking-wide text-gray-600 py-1 pl-3" onClick={() => setMenuOpen(false)}>
                  Residential
                </Link>
                <Link to="/projects/hotels-schools" className="text-sm tracking-wide text-gray-600 py-1 pl-3" onClick={() => setMenuOpen(false)}>
                  Hotels & Schools
                </Link>
                <Link to="/projects/commercial" className="text-sm tracking-wide text-gray-600 py-1 pl-3" onClick={() => setMenuOpen(false)}>
                  Commercial
                </Link>
              </div>

              <button type="button" onClick={handleContactClick} className="text-left pt-2">
                <span
                  className="inline-block rounded-sm px-4 py-2.5 text-sm font-semibold tracking-wide text-black"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                >
                  CONTACT
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
