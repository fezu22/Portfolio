// src/components/About.jsx
import { useEffect, useRef } from 'react'

const highlights = [
  { icon: '⚡', title: 'Fast & Performant', desc: 'Lightning-fast applications with modern optimization techniques' },
  { icon: '🎨', title: 'Pixel Perfect Design', desc: 'Beautiful, intuitive interfaces that users love to interact with' },
  { icon: '🔄', title: 'Clean Architecture', desc: 'Scalable, maintainable code that grows with your business' },
  { icon: '🚀', title: 'Future Ready', desc: 'Built with latest technologies and best practices' },
]

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 px-[6%] bg-[#0C0507] relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(212,160,23,0.25) 0%, transparent 70%)' 
        }} 
      />

      <div className="max-w-5xl mx-auto">
        
        {/* Decorative Top Bar */}
        <div className="reveal flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-[#D4A017] mb-5 justify-center">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#D4A017]" />
          WHO AM I
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#D4A017]" />
        </div>

        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Left - Story */}
          <div className="md:col-span-7">
            <h2 className="reveal font-playfair text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8 text-white">
              Crafting digital<br />
              experiences with <span className="gradient-text-red-gold">passion</span>
            </h2>

            <div className="reveal space-y-6 text-lg leading-relaxed text-white/80">
              <p>
                I'm Faraz, a passionate App&Web developer who turns ideas into 
                beautiful, functional digital products. With a strong eye for design 
                and attention to detail, I create experiences that not only look 
                stunning but also perform exceptionally well.
              </p>
              
              <p>
                My journey began with curiosity — breaking things apart and rebuilding 
                them better. Today, I specialize in modern web & mobile applications 
                using React, React Native, Node.js, and cutting-edge tools.
              </p>
            </div>

            {/* Gold Divider */}
            <div className="reveal flex items-center gap-6 max-w-xs my-10">
              <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4A017]" />
              <span className="text-2xl text-[#D4A017]">✦</span>
              <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4A017]" />
            </div>

            <div className="reveal text-[#D4A017] text-sm tracking-widest uppercase font-medium">
              Currently based in Mingora, Pakistan • Open to exciting opportunities worldwide
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((h, index) => (
                <div
                  key={index}
                  className="reveal group bg-[#1A1010] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-[#D4A017] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4A017]/10 flex flex-col items-center text-center"
                >
                  <div className="text-5xl mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                    {h.icon}
                  </div>
                  <h4 className="font-semibold text-xl text-white mb-3 tracking-tight">
                    {h.title}
                  </h4>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}