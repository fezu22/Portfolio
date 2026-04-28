import { useEffect, useRef, useState } from 'react'

const gridProjects = [
  {
    thumb: '/projects/devscan-ai.jpg',
    name: 'DevScan AI — Code Security Scanner',
    desc: 'An AI-powered code security and quality scanner with GitHub integration, real-time vulnerability detection, holographic 3D visualization, and an intelligent dashboard for deep code analysis.',
    stack: ['React', 'Node.js', 'OpenAI', 'GitHub API', 'Tailwind'],
    live: '#',
    github: '#',
  },
  {
    thumb: '/projects/monkey-vpn.png',
    name: 'Monkey VPN',
    desc: 'Secure, fast VPN app with military-grade encryption, global servers, no-logs policy, and a kill switch. Available on mobile & web.',
    stack: ['React Native', 'Node.js', 'Firebase'],
    live: '#',
    github: '#',
  },
  {
    thumb: '/projects/fixerhub.png',
    name: 'FixerHub',
    desc: 'One platform for rides, deliveries, and home services with live tracking, fast booking, and trusted provider listings.',
    stack: ['React', 'MongoDB', 'Node.js', 'Maps API'],
    live: '#',
    github: '#',
  },
  {
    thumb: '/projects/hunger-hub.png',
    name: 'Hunger Hub',
    desc: 'Food delivery platform connecting restaurants and customers with real-time tracking, live menu browsing, and fast ordering.',
    stack: ['Next.js', 'Firebase', 'Tailwind', 'Stripe'],
    live: '#',
    github: '#',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const [flipped, setFlipped] = useState({})

  const toggleFlip = (projectName) => {
    setFlipped((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        }),
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-[6%] bg-[#0C0507]">
      {/* Heading */}
      <div className="reveal text-center mb-14">
        <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#D4A017] mb-3 justify-center">
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#C0152A] to-[#D4A017]" />
          My Work
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#D4A017] to-[#C0152A]" />
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl font-black tracking-tight">
          Featured <em className="not-italic gradient-text-red-gold">Projects</em>
        </h2>
      </div>

      <div className="w-full mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-4 gap-3">
          {gridProjects.map((p) => (
            <div
              key={p.name}
              className="reveal relative overflow-hidden bg-white rounded-2xl border border-[#FFD6DF] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C0152A]/08 hover:border-[#D4A017]/40 h-96 cursor-pointer"
              style={{
                perspective: '1000px',
              }}
              onClick={() => toggleFlip(p.name)}
            >
              {/* Flip Container */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transform: flipped[p.name] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.6s',
                }}
              >
                {/* Front - Thumbnail */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    src={p.thumb}
                    alt={p.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    style={{
                      imageRendering: 'high-quality',
                      WebkitOptimizeContrast: true,
                    }}
                  />
                </div>

                {/* Back - Details */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  className="p-6 flex flex-col justify-between bg-white"
                >
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#1A1010] mb-2">{p.name}</h3>
                    <p className="text-sm text-[#7A6060] leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-nowrap gap-1.5 mb-4 overflow-x-auto">
                      {p.stack.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 bg-[#FFF0F3] border border-[#FFD6DF] rounded-full text-[#7A6060] whitespace-nowrap">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href={p.live} className="text-xs font-bold text-[#C0152A] no-underline hover:underline">↗ Demo</a>
                    <a href={p.github} className="text-xs font-bold text-[#D4A017] no-underline hover:underline">⌥ Code</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
