// src/components/Contact.jsx
import { useEffect, useRef } from 'react'

const contacts = [
  { 
    icon: '✉️', 
    title: 'Email', 
    value: 'faraz@email.com', 
    href: 'mailto:faraz@email.com',
    desc: 'Best way to reach me'
  },
  { 
    icon: '🐙', 
    title: 'GitHub', 
    value: 'github.com/fezu22', 
    href: 'https://github.com/fezu22',
    desc: 'My code & projects'
  },
  { 
    icon: '💼', 
    title: 'LinkedIn', 
    value: 'linkedin.com/in/faraz', 
    href: 'https://www.linkedin.com/in/faraz-khan-3358a8327',
    desc: 'Professional profile'
  },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 px-[6%] bg-[#0C0507] text-white relative overflow-hidden"
    >
      {/* Background Accents - Enhanced */}
      <div className="absolute top-[-150px] right-[-150px] w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle at 30% 20%, rgba(212,160,23,0.35) 0%, transparent 65%)' 
        }} 
      />
      <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle at 70% 80%, rgba(192,21,42,0.25) 0%, transparent 70%)' 
        }} 
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Top Decorative Bar */}
        <div className="reveal inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-[#D4A017] mb-5">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#D4A017]" />
          LET'S CONNECT
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#D4A017]" />
        </div>

        <h2 className="reveal font-playfair text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-none">
          Ready to build something<br />
          <span className="gradient-text-red-gold">extraordinary</span> together?
        </h2>

        <p className="reveal text-xl text-white/70 max-w-md mx-auto mb-12 leading-relaxed">
          Whether you have a project in mind, want to collaborate, 
          or just want to say hello — I'm always excited to hear from you.
        </p>

        {/* Gold Divider */}
        <div className="reveal flex items-center gap-6 max-w-xs mx-auto mb-14">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4A017]" />
          <span className="text-2xl text-[#D4A017]">✦</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4A017]" />
        </div>

        {/* Contact Cards - Improved */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {contacts.map((c, index) => (
            <a
              key={index}
              href={c.href}
              target={c.title !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              className="group block bg-[#1A1010] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-[#D4A017] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#D4A017]/20 active:scale-[0.98]"
            >
              <div className="text-5xl mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                {c.icon}
              </div>
              
              <h4 className="text-2xl font-semibold mb-1 text-white tracking-tight">
                {c.title}
              </h4>
              
              <p className="text-[#D4A017] font-medium mb-3 text-sm tracking-widest">
                {c.value}
              </p>
              
              <p className="text-white/60 text-sm leading-relaxed">
                {c.desc}
              </p>
            </a>
          ))}
        </div>

        {/* Big CTA Button - Enhanced */}
        <div className="reveal">
          <a
            href="mailto:faraz@email.com"
            className="btn-shimmer group relative inline-flex items-center gap-4 px-14 py-7 text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #C0152A, #8B0F1E)',
              boxShadow: '0 15px 50px rgba(192, 21, 42, 0.45)',
            }}
          >
            <span>Send me a message</span>
            <span className="text-3xl group-hover:rotate-45 transition-transform duration-300">↗</span>
          </a>
        </div>

        <p className="reveal mt-10 text-white/40 text-sm tracking-wide">
          I usually reply within 24 hours
        </p>
      </div>
    </section>
  )
}