const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.62 3.5-3.62.7 0 1.62.12 1.62.12v2.2h-.91c-.9 0-1.18.56-1.18 1.13v1.36h2.01l-.32 2.9h-1.69V22c4.78-.8 8.44-4.94 8.44-9.93Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5.02 4.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 11.98 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 11.98 10.5Zm4.77-3.8a1 1 0 1 1-.99.99 1 1 0 0 1 .99-.99Z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M21 8.5a5.3 5.3 0 0 1-4.46-2.4v6.12a4.79 4.79 0 1 1-4.86-4.79h.12v2.65a2.15 2.15 0 1 0 1.55 2.06V2h3.31a5.17 5.17 0 0 0 4.34 2.26Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 sm:py-14 snap-start flex items-center border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center gap-6 sm:gap-8">
        <div className="flex gap-3 sm:gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#C3FF1F] transition-colors shadow-lg shadow-black/40"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="w-full max-w-3xl border-t border-white/10" />

        <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-white/60 text-center px-2">
          © {new Date().getFullYear()} Kraft Studio — Designed by Nova Hub
        </p>
      </div>
    </footer>
  )
}
