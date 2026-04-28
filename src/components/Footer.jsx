const socials = [
  { label: 'GitHub',   href: 'https://github.com/fezu22' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/faraz-khan-3358a8327' },
  { label: 'Email',    href: 'mailto:faraz@email.com' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1010] text-white/60 px-[6%] py-8 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap">
      <span className="font-playfair text-2xl font-black gradient-text">MFK.</span>
      
      <div className="flex gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.label !== 'Email' ? '_blank' : undefined}
            rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
            className="text-white/50 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 border border-white/15 rounded-full no-underline transition-all duration-300 hover:text-[#FFE88A] hover:border-[#D4A017]"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  )
}