import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const clientLogos = [
  { name: 'Vision Collective', src: '/img/kraft-client-1.avif' },
  { name: 'Atlas Living', src: '/img/kraft-client-2.avif' },
  { name: 'Horizon Estates', src: '/img/kraft-client-3.avif' },
  { name: 'Studio 88', src: '/img/kraft-client-4.avif' },
  { name: 'Neoteric', src: '/img/kraft-client-5.avif' },
  { name: 'Linea', src: '/img/kraf-client-6.avif' },
  { name: 'Nordic Form', src: '/img/kraft-client-7.avif' },
  { name: 'Equinox', src: '/img/kraft-client-8.avif' },
  { name: 'Modulor', src: '/img/kraft-client-9.avif' }
]

export default function Home() {
  const location = useLocation()
  const [showEnglish, setShowEnglish] = useState(false)
  const ctaMouseX = useMotionValue(0)
  const ctaMouseY = useMotionValue(0)
  const ctaSpringConfig = { damping: 40, stiffness: 90 }
  const ctaX = useSpring(ctaMouseX, ctaSpringConfig)
  const ctaY = useSpring(ctaMouseY, ctaSpringConfig)
  const ctaBgX = useTransform(ctaX, [-1, 1], [-40, 40])
  const ctaBgY = useTransform(ctaY, [-1, 1], [-40, 40])
  const ctaGlowX = useTransform(ctaX, [-1, 1], [-80, 80])
  const ctaGlowY = useTransform(ctaY, [-1, 1], [-40, 40])
  const ctaContentX = useTransform(ctaX, [-1, 1], [-12, 12])
  const ctaContentY = useTransform(ctaY, [-1, 1], [-8, 8])

  useEffect(() => {
    const target =
      (location.state as { scrollTarget?: string } | null)?.scrollTarget ||
      (location.hash === '#contact' ? 'contact' : undefined)

    if (target === 'contact') {
      requestAnimationFrame(() => {
        const el = document.getElementById('contact')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    }
  }, [location])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const xPos = (e.clientX / innerWidth - 0.5) * 2
      const yPos = (e.clientY / innerHeight - 0.5) * 2
      ctaMouseX.set(xPos)
      ctaMouseY.set(yPos)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [ctaMouseX, ctaMouseY])

  return (
    <div className="min-h-screen bg-black">
      <Hero />

      {/* About Us Scroll Section */}
      <section id="about" className="relative py-32 px-6 snap-start min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/img/IMG_7183_edited.jpg"
            alt="Kraft Studio Architecture"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            style={{ 
              imageRendering: 'high-quality'
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 -mt-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-[#C3FF1F]/10 border border-[#C3FF1F]/30 text-[#C3FF1F] text-xs tracking-[0.4em] uppercase mb-4 rounded-full backdrop-blur-sm"
            >
              Our Story
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
              About Us
            </h2>
            <div className="w-24 h-0.5 bg-[#C3FF1F] mx-auto mb-8"></div>
            
            {/* Language Toggle */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => setShowEnglish(false)}
                className={`px-8 py-3 text-sm tracking-[0.3em] uppercase rounded-full transition-all duration-300 font-medium ${
                  !showEnglish 
                    ? 'bg-[#C3FF1F] text-black shadow-lg shadow-[#C3FF1F]/30 scale-105' 
                    : 'bg-white/5 text-white/60 border border-white/20 hover:bg-white/10 hover:text-white hover:border-white/40'
                }`}
              >
                Burmese
              </button>
              <button
                type="button"
                onClick={() => setShowEnglish(true)}
                className={`px-8 py-3 text-sm tracking-[0.3em] uppercase rounded-full transition-all duration-300 font-medium ${
                  showEnglish 
                    ? 'bg-[#C3FF1F] text-black shadow-lg shadow-[#C3FF1F]/30 scale-105' 
                    : 'bg-white/5 text-white/60 border border-white/20 hover:bg-white/10 hover:text-white hover:border-white/40'
                }`}
              >
                English
              </button>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div 
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl"
              initial={{ backdropFilter: 'blur(0px)' }}
              whileInView={{ backdropFilter: 'blur(24px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative min-h-[350px]">
                <AnimatePresence mode="wait">
                  {!showEnglish ? (
                    <motion.div
                      key="burmese"
                      initial={{ opacity: 0, x: -30, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 30, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed"
                    >
                      <div className="space-y-6 text-center md:text-left">
                        <p>
                          Kraft Studio ကို အမေရိကန်တွင် စွယ်စုံထူးချွန်ဆု (Salutatorian) ဖြင့် ဗိသုကာပညာဘွဲ့ ရရှိသော <span className="text-[#C3FF1F] font-medium">Ei Khin Khin</span> မှ
                          တည်ထောင်ထားပါသည်။ <span className="text-[#C3FF1F] font-medium">Ei Khin Khin</span> သည် အမေရိကန် ဗိသုကာအသင်း (<span className="text-[#C3FF1F] font-medium">AIA</span>) ၏ နိုင်ငံတကာအဖွဲ့ဝင် တစ်ဦးဖြစ်သည်။
                        </p>
                        <p>
                          ၂၀၁၅ ခုနှစ်တွင် မြန်မာနိုင်ငံသို့ ပြန်လာကာ မြန်မာနိုင်ငံ လူမှုအသိုင်းအဝိုင်း၏ နေထိုင်မှုအဆင့်မြှင့်တင်ရန်
                          ရည်ရွယ်ချက်ဖြင့် Kraft Studio ကို စတင်ထူထောင်ခဲ့ပါသည်။
                        </p>
                        <p>
                          ကျွန်ုပ်တို့၏ အဖွဲ့သည် ဒေသခံဗိသုကာပညာရှင်များ နိုင်ငံတကာမှ ထူးချွန်သော ပညာရှင်များ နှင့်ပူးပေါင်း၍ နေအိမ်များ၊ ဟိုတယ်များ၊ ရုံးခန်းများ၊ အစားအသောက်ဆိုင်များ အစရှိသည့် ပရောဂျက်များတွင် အောင်မြင်စွာ ပံ့ပိုးဆောင်ရွက်ပေးလျှက်ရှိသည်။
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="english"
                      initial={{ opacity: 0, x: 30, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -30, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed"
                    >
                      <p className="text-2xl md:text-3xl font-light mb-8 text-center text-white">
                        Our <span className="text-[#C3FF1F] font-normal">Story</span>
                      </p>
                      <div className="space-y-6 text-center md:text-left">
                        <p>
                          Founded by <span className="text-[#C3FF1F] font-medium">Ei Khin Khin</span>, a U.S. architecture graduate and Salutatorian, our firm combines global
                          expertise with local insight. <span className="text-[#C3FF1F] font-medium">Ei Khin Khin</span>, an international associate of the <span className="text-[#C3FF1F] font-medium">American Institute of
                          Architects</span>, returned to Myanmar in 2014 with a mission—to elevate the lifestyles of the local
                          community.
                        </p>
                        <p>
                          Collaborating with local architects and international talents, our team has successfully
                          contributed to a variety of projects, including residential spaces, hotels, offices, and restaurants.
                        </p>
                        <p>
                          We take pride in our unique approach: listening attentively to your narratives and translating them into
                          functional, harmonious spaces that truly reflect your vision. At our firm, <span className="text-[#C3FF1F] font-medium italic">your story shapes the
                          architecture.</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section with immersive layout */}
      <section className="relative py-32 px-6 overflow-hidden snap-start min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url(/img/expertise-bg.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#C3FF1F]/10 border border-[#C3FF1F]/30 text-[#C3FF1F] text-xs tracking-[0.4em] uppercase mb-6 rounded-full backdrop-blur-sm"
            >
              services
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-white">
              Our Expertise
            </h2>
            <p className="text-white/80 tracking-wide text-lg max-w-2xl mx-auto">
              Comprehensive design and consulting support that carries your project from initial idea to crafted reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Architectural Design',
                desc:
                  'We offer comprehensive architectural services, guiding projects from initial concept development to final construction. Our expertise lies in crafting innovative, sustainable designs for residential, commercial, and institutional projects. Our services include architectural planning, 3D modeling, interior design, site analysis, feasibility studies, construction documentation, and project management.',
                image: '/img/ef9022_33eab8b4e92345d68513e80861f09354~mv2.jpeg'
              },
              {
                title: 'Interior Design',
                desc:
                  "Our interior design services transform spaces by seamlessly combining style and functionality. With a deep understanding of each client's preferences and lifestyle, our designers craft tailored layouts, color palettes, furniture sourcing and curated décor that elevate the atmosphere while reflecting personal identity.",
                image: '/img/ef9022_1ae970a33a4f492ebbceb51085c22265~mv2.jpeg'
              },
              {
                title: 'Consultation & Management',
                desc:
                  'During the bidding and negotiation phase, we review competitive bids and help prepare contracts with contractors. Throughout construction and contract administration, we remain on-site as needed—conducting regular visits, consulting teams, and verifying that craftsmanship, materials, and timelines remain aligned with the original design intent.',
                image: '/img/ef9022_8cc7ad3c8ee04d83a2febb155710cf82~mv2.jpeg'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 flex flex-col gap-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[4/3] group/image">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      service.title === 'Architectural Design' || service.title === 'Interior Design' || service.title === 'Consultation & Management'
                        ? 'brightness-110 contrast-110 saturate-110 group-hover/image:brightness-125 group-hover/image:scale-105' 
                        : 'group-hover/image:scale-105'
                    }`} 
                  />
                  {service.title === 'Architectural Design' ? (
                    <>
                      {/* Elegant lighting overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                      {/* Spotlight effect */}
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 opacity-60 blur-2xl"
                        style={{
                          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
                        }}
                      />
                      {/* Subtle glow */}
                      <div className="absolute inset-0 ring-2 ring-white/10 group-hover/image:ring-[#C3FF1F]/30 transition-all duration-500" />
                      {/* Additional brightness overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
                    </>
                  ) : service.title === 'Interior Design' ? (
                    <>
                      {/* Elegant lighting overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                      {/* Spotlight effect */}
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 opacity-60 blur-2xl"
                        style={{
                          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
                        }}
                      />
                      {/* Subtle glow */}
                      <div className="absolute inset-0 ring-2 ring-white/10 group-hover/image:ring-[#C3FF1F]/30 transition-all duration-500" />
                      {/* Additional brightness overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
                    </>
                  ) : service.title === 'Consultation & Management' ? (
                    <>
                      {/* Elegant lighting overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                      {/* Spotlight effect */}
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 opacity-60 blur-2xl"
                        style={{
                          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
                        }}
                      />
                      {/* Subtle glow */}
                      <div className="absolute inset-0 ring-2 ring-white/10 group-hover/image:ring-[#C3FF1F]/30 transition-all duration-500" />
                      {/* Additional brightness overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-3">
                    <span
                      className={`${
                        ['Architectural Design', 'Interior Design', 'Consultation & Management'].includes(service.title)
                          ? 'text-[#C3FF1F]'
                          : 'text-white'
                      }`}
                    >
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              to="/projects"
              className="inline-block px-10 py-4 border-2 border-[#c4df34] text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW OUR WORK
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section 
        className="py-20 px-6 bg-white snap-start relative overflow-hidden"
        style={{
          backgroundImage: `url('/img/kraft%20logo%20%5BConverted%5D.png')`,
          backgroundSize: 'min(520px, 55vw)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-center"
            >
              <img
                src="/img/kraft%20logo%20%5BConverted%5D.png"
                alt="Kraft Studio Logo"
                className="h-12 w-auto object-contain"
              />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 text-gray-900">Our Clients</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              We are proud to collaborate with visionary brands and institutions who trust us to craft modern, human-centered spaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-nowrap justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4"
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="flex items-center justify-center h-20 flex-shrink-0"
              >
                <img 
                  src={client.src} 
                  alt={client.name} 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-100 brightness-110 hover:grayscale transition-all duration-300" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black px-6 py-24 text-white snap-start min-h-screen flex items-center">
        <div className="mx-auto max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-[#C3FF1F]/40 bg-[#C3FF1F]/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#C3FF1F]">
              contact us
            </span>
            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Let&apos;s choreograph your next space.
            </h2>
            <p className="mt-4 text-white/70">
              Share your project vision and our team will schedule a workshop within 48 hours.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 rounded-3xl border border-white/15 bg-white/5 p-10 backdrop-blur"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Studio</p>
                <h3 className="mt-3 text-2xl font-light">Kraft Studio Yangon</h3>
                <p className="mt-2 text-white/70">
                  125 Merchant Street, Level 12 <br />
                  Yangon, Myanmar
                </p>
              </div>

              <div className="space-y-4 text-white/80">
                <p>
                  <span className="text-white">Call:</span> +95 9 123 456 789
                </p>
                <p>
                  <span className="text-white">Email:</span> hello@kraftstudio.mm
                </p>
                <p>
                  <span className="text-white">Hours:</span> Mon - Fri · 9:00 - 18:00
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Follow</p>
                <div className="flex gap-4 text-white/70">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
                    Instagram
                  </a>
                  <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-white">
                    Behance
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-white/15 bg-white/5 p-10 backdrop-blur"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <label className="text-sm uppercase tracking-[0.3em] text-white/70">
                  Name
                  <input
                    type="text"
                    className="mt-2 w-full border border-white/20 bg-black/20 px-4 py-3 text-white focus:border-[#C3FF1F] focus:outline-none"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm uppercase tracking-[0.3em] text-white/70">
                  Email
                  <input
                    type="email"
                    className="mt-2 w-full border border-white/20 bg-black/20 px-4 py-3 text-white focus:border-[#C3FF1F] focus:outline-none"
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <label className="mt-6 block text-sm uppercase tracking-[0.3em] text-white/70">
                Project Type
                <input
                  type="text"
                  className="mt-2 w-full border border-white/20 bg-black/20 px-4 py-3 text-white focus:border-[#C3FF1F] focus:outline-none"
                  placeholder="Residential, Hospitality..."
                />
              </label>
              <label className="mt-6 block text-sm uppercase tracking-[0.3em] text-white/70">
                Message
                <textarea
                  className="mt-2 h-32 w-full border border-white/20 bg-black/20 px-4 py-3 text-white focus:border-[#C3FF1F] focus:outline-none"
                  placeholder="Tell us about your vision"
                />
              </label>
              <button
                type="submit"
                className="mt-8 w-full rounded-full border border-white/20 bg-white text-black py-4 text-sm uppercase tracking-[0.4em] hover:bg-[#C3FF1F] transition-colors"
              >
                Send Request
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-32 px-6 overflow-hidden snap-start min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="/img/ef9022_c000642b4c1645a5b9c45ef0289a7057~mv2.jpeg"
            alt="Modern architecture exterior"
            className="h-[120%] w-[120%] object-cover opacity-90"
            style={{
              x: ctaBgX,
              y: ctaBgY,
              scale: 1.05,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />
          <motion.div
            className="absolute inset-auto -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C3FF1F]/10 blur-3xl rounded-full pointer-events-none"
            style={{
              x: ctaGlowX,
              y: ctaGlowY,
            }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              x: ctaContentX,
              y: ctaContentY,
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-white leading-tight">
              Ready to Transform
              <br />
              Your Vision?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Let's create something extraordinary together. Experience your designs in immersive 3D.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="px-10 py-4 bg-white text-black text-sm tracking-widest hover:bg-gray-100 transition-all duration-300"
              >
                VIEW ALL PROJECTS
              </Link>
              <Link
                to="/projects/residential"
                className="px-10 py-4 border-2 border-[#c4df34] text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                RESIDENTIAL
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

