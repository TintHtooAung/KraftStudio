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

  // Close dropdown when clicking outside
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
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = () => {
    const scrollToContact = () => {
      const el = document.getElementById('contact')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
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
      const el = document.getElementById('about')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 ${
        hasScrolled
          ? 'bg-white/15 backdrop-blur-xl border-white/30 shadow-[0_8px_32px_rgba(15,15,15,0.35)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-wider transition-colors"
          style={{ color: hasScrolled ? '#000000' : BRAND_COLORS.primary }}
        >
          KRAFT STUDIO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-semibold uppercase tracking-[0.35em] transition-colors duration-300 ${
              location.pathname === '/'
                ? hasScrolled
                  ? 'text-black hover:text-[#C3FF1F]'
                  : 'text-white hover:text-[#C3FF1F]'
                : location.pathname.includes('/project')
                  ? 'text-black hover:text-[#C3FF1F]'
                  : hasScrolled
                    ? 'text-gray-700 hover:text-[#C3FF1F]'
                    : 'text-white/80 hover:text-[#C3FF1F]'
            }`}
          >
            HOME
          </Link>

          <Link
            to="/#about"
            onClick={handleAboutClick}
            className={`text-sm font-semibold uppercase tracking-[0.35em] transition-colors duration-300 ${
              location.pathname.includes('/project')
                ? 'text-black hover:text-[#C3FF1F]'
                : location.hash === '#about'
                  ? hasScrolled
                    ? 'text-black hover:text-[#C3FF1F]'
                    : 'text-white hover:text-[#C3FF1F]'
                  : hasScrolled
                    ? 'text-black hover:text-[#C3FF1F]'
                    : 'text-white/80 hover:text-[#C3FF1F]'
            }`}
          >
            ABOUT US
          </Link>

          {/* Projects Hover Panel */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
            onFocus={() => setProjectsDropdownOpen(true)}
            onBlur={() => setProjectsDropdownOpen(false)}
          >
            <button
              onClick={() => {
                setProjectsDropdownOpen(false)
                navigate('/projects')
              }}
              className={`text-sm font-semibold uppercase tracking-[0.35em] transition-colors duration-300 flex items-center gap-1 ${
                location.pathname.includes('/project')
                  ? 'text-black hover:text-[#C3FF1F]'
                  : hasScrolled
                    ? 'text-[#c4df34] hover:text-gray-500'
                    : 'text-white/80 hover:text-[#C3FF1F]'
              }`}
            >
              PROJECTS
            </button>

            {/* Hover Reveal */}
            <AnimatePresence>
              {projectsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[420px] rounded-3xl border border-white/40 bg-black/70 shadow-[0_35px_65px_rgba(0,0,0,0.55)] backdrop-blur-xl px-6 py-5 grid grid-cols-1 gap-3"
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
                      <span className="text-[10px] transition-colors text-white/60 group-hover:text-[#C3FF1F]">
                        ↗
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={handleContactClick}
            className={`px-6 py-2 text-sm tracking-wide font-semibold transition-all ${
              hasScrolled ? 'text-black hover:brightness-90' : 'text-white hover:brightness-110'
            }`}
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-6 h-0.5 transition-transform ${hasScrolled ? 'bg-black' : 'bg-white'} ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-opacity ${hasScrolled ? 'bg-black' : 'bg-white'} ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-transform ${hasScrolled ? 'bg-black' : 'bg-white'} ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4"
        >
          <Link to="/" className="text-sm tracking-wide text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          
          <Link to="/#about" className="text-sm tracking-wide text-black hover:text-gray-600" onClick={handleAboutClick}>
            ABOUT US
          </Link>
          
          {/* Mobile Projects Submenu */}
          <div className="flex flex-col gap-2">
            <div className="text-sm tracking-wide text-black font-semibold">PROJECTS</div>
            <Link to="/projects/residential" className="text-sm tracking-wide text-gray-600 hover:text-black pl-4" onClick={() => setMenuOpen(false)}>
              Residential
            </Link>
            <Link to="/projects/hotels-schools" className="text-sm tracking-wide text-gray-600 hover:text-black pl-4" onClick={() => setMenuOpen(false)}>
              Hotels & Schools
            </Link>
            <Link to="/projects/commercial" className="text-sm tracking-wide text-gray-600 hover:text-black pl-4" onClick={() => setMenuOpen(false)}>
              Commercial
            </Link>
          </div>

          <button
            type="button"
            onClick={handleContactClick}
            className="text-sm tracking-wide text-black"
          >
            <span
              className="inline-block rounded-sm px-4 py-2 text-sm font-semibold tracking-wide text-black transition-all hover:brightness-90"
              style={{ backgroundColor: BRAND_COLORS.primary }}
            >
              CONTACT
            </span>
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
