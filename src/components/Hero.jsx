import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-[6%] pt-32 pb-16 gap-12 relative overflow-hidden bg-[#0C0507]"
    >
      {/* BG Blobs */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(192,21,42,0.07) 0%, transparent 70%)' }}
      />

      {/* LEFT — Text */}
      <div className="z-10 text-center md:text-left">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-[#D4A017] border border-[#D4A017]/30"
          style={{ background: 'linear-gradient(135deg, rgba(192,21,42,0.08), rgba(212,160,23,0.12))' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0152A] pulse-dot" />
          Available for Work
        </div>

        {/* Name */}
        <h1 className="font-playfair font-black leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}>
          Hello, I'm
          <span className="block gradient-text" style={{ filter: 'drop-shadow(0 2px 8px rgba(212,160,23,0.3))' }}>
            Faraz
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-[white] font-light leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
          A <span className="text-[#C0152A] font-medium not-italic">passionate App&Web Developer</span> who
          crafts clean, elegant code and turns ideas into powerful digital experiences.
        </p>

        {/* CTA */}
        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          <a
            href="#projects"
            className="btn-shimmer relative overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 text-white text-sm font-semibold rounded no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #C0152A, #8B0F1E)',
              boxShadow: '0 4px 20px rgba(192,21,42,0.3)',
            }}
          >
            View My Work ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[#D4A017] text-sm font-semibold rounded border-2 border-[#D4A017] no-underline transition-all duration-300 hover:bg-[#D4A017] hover:text-white hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div className="z-10 flex justify-center items-end order-first md:order-last">
        <div className="relative" style={{ width: '360px', height: '460px' }}>
          
          {/* GLOWING RING SYSTEM */}
          
          {/* Layer 1: Far Ambient Glow */}
          <div
            className="absolute inset-[-25px] glowing-ring-halo-far z-0"
            style={{
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at 40% 35%, rgba(192,21,42,0.35) 0%, rgba(212,160,23,0.15) 50%, transparent 100%)',
            }}
          />
          
          {/* Layer 2: Mid Ambient Glow */}
          <div
            className="absolute inset-[-18px] glowing-ring-halo-mid z-0"
            style={{
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,182,193,0.65) 0%, rgba(212,160,23,0.35) 60%, transparent 85%)',
            }}
          />

          {/* Layer 3: Inner Glow */}
          <div
            className="absolute inset-[-12px] glowing-ring-inner z-0"
            style={{
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(192,21,42,0.85) 0%, rgba(212,160,23,0.55) 50%, transparent 80%)',
            }}
          />

          {/* Layer 4: Main Morphing Ring */}
          <div
            className="absolute inset-[-10px] glowing-morph-ring z-0"
            style={{
              borderRadius: '50%',
              background: 'conic-gradient(from 45deg, #C0152A 0%, #D4A017 20%, #FFB6C1 40%, #FFE88A 50%, #FFB6C1 60%, #D4A017 80%, #C0152A 100%)',
              boxShadow: `
                0 0 40px -6px rgba(192, 21, 42, 1),
                0 0 65px -2px rgba(212, 160, 23, 0.85),
                0 0 90px 4px rgba(255, 182, 193, 0.65),
                0 0 130px 12px rgba(212, 160, 23, 0.45),
                0 0 180px 20px rgba(192, 21, 42, 0.25),
                inset 0 0 25px 0px rgba(212, 160, 23, 0.6),
                inset 0 0 18px -6px rgba(255, 255, 255, 0.5)
              `,
            }}
          />

          {/* Layer 5: Rotating Light Sweep */}
          <div
            className="absolute inset-[-10px] glowing-ring-light-sweep z-0"
            style={{
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, rgba(255,255,255,0) 0deg, rgba(255,255,255,0.9) 90deg, rgba(255,255,255,0.5) 180deg, rgba(255,255,255,0) 360deg)',
              filter: 'blur(3px)',
            }}
          />
          
          {/* Profile Image - FIXED */}
          <img
            src="/profile.png"
            alt="Faraz"
            className="relative z-10 w-full h-full object-cover object-top rounded-full"
            style={{ filter: 'contrast(1.05) brightness(1.02)' }}
          />

          {/* Floating stat cards */}
          <div className="float-anim absolute bottom-10 -left-14 bg-white rounded-xl px-4 py-3 shadow-xl z-20 border-l-4 border-[#C0152A] hidden md:block">
            <span className="block font-playfair text-xl font-bold text-[#C0152A]">2+</span>
            <span className="text-xs font-semibold text-[#1A1010]">Years Experience</span>
          </div>
          <div className="float-anim-delay absolute top-14 -right-10 bg-white rounded-xl px-4 py-3 shadow-xl z-20 border-l-4 border-[#D4A017] hidden md:block">
            <span className="block font-playfair text-xl font-bold text-[#D4A017]">10+</span>
            <span className="text-xs font-semibold text-[#1A1010]">Projects Done</span>
          </div>
        </div>
      </div>
    </section>
  )
}