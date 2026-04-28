import { useState, useEffect } from 'react'

const navLinks = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[6%] py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0507]/90 backdrop-blur-xl shadow-sm border-b border-[#C0152A]/40'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <span className="font-playfair text-2xl font-black gradient-text">MFK.</span>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="nav-link-hover text-[#D4A017]/70 hover:text-[#D4A017] text-sm font-medium tracking-widest uppercase transition-colors duration-300 no-underline"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Buttons */}
      <div className="hidden md:flex gap-3">
        <a
          href="https://github.com/fezu22"
          target="_blank"
          rel="noreferrer"
          className="text-[#D4A017] text-xs font-semibold tracking-wider px-4 py-2 border border-[#D4A017]/50 rounded-full transition-all duration-300 no-underline hover:bg-gradient-to-r hover:from-[#C0152A] hover:to-[#D4A017] hover:text-white hover:border-transparent"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#D4A017] text-xs font-semibold tracking-wider px-4 py-2 border border-[#D4A017]/50 rounded-full transition-all duration-300 no-underline hover:bg-gradient-to-r hover:from-[#C0152A] hover:to-[#D4A017] hover:text-white hover:border-transparent"
        >
          LinkedIn
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#C0152A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#D4A017] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#C0152A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0C0507]/95 backdrop-blur-xl border-b border-[#C0152A]/40 py-6 px-[6%] flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-[#E8C1CB] font-medium text-lg no-underline hover:text-[#D4A017] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
