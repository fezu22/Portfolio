import { useEffect, useRef } from 'react'

// ── SKILLS ─────────────────────────────────────────────────────────
// cat: 0 = Frontend (#C0152A red)
//      1 = Backend  (#D4A017 gold)
//      2 = Tools    (#E8829A rose-pink)
const SKILL_DATA = [
  { label: 'React',             xf: 0.20, yf: 0.36, cat: 0 },
  { label: 'React Native',      xf: 0.09, yf: 0.58, cat: 0 },
  { label: 'Next.js',           xf: 0.28, yf: 0.18, cat: 0 },
  { label: 'JavaScript',        xf: 0.14, yf: 0.48, cat: 0 },
  { label: 'HTML / CSS',        xf: 0.07, yf: 0.28, cat: 0 },
  { label: 'Tailwind CSS',      xf: 0.26, yf: 0.64, cat: 0 },
  { label: 'Node.js',           xf: 0.62, yf: 0.34, cat: 1 },
  { label: 'Express',           xf: 0.76, yf: 0.46, cat: 1 },
  { label: 'MongoDB',           xf: 0.68, yf: 0.58, cat: 1 },
  { label: 'Firebase',          xf: 0.82, yf: 0.22, cat: 1 },
  { label: 'Python',            xf: 0.56, yf: 0.54, cat: 1 },
  { label: 'C++',               xf: 0.71, yf: 0.14, cat: 1 },
  { label: 'Figma',             xf: 0.44, yf: 0.74, cat: 2 },
  { label: 'Canva',             xf: 0.32, yf: 0.82, cat: 2 },
  { label: 'CapCut',            xf: 0.56, yf: 0.84, cat: 2 },
  { label: 'WordPress',         xf: 0.18, yf: 0.74, cat: 2 },
  { label: 'N8N',               xf: 0.66, yf: 0.74, cat: 2 },
  { label: 'Amazon FBA',        xf: 0.84, yf: 0.66, cat: 2 },
  { label: 'Digital Marketing', xf: 0.48, yf: 0.09, cat: 2 },
]

const EDGES = [
  [0,1],[0,2],[0,3],[0,5],[2,3],[3,4],[4,5],[1,5],
  [6,7],[6,8],[6,9],[7,8],[9,10],[10,11],[10,8],[6,11],
  [12,13],[12,15],[12,18],[13,14],[15,18],[16,17],[17,18],[14,16],[12,16],
  [2,6],[3,6],[0,9],[1,6],[5,10],
  [5,12],[0,12],[8,16],[9,17],[6,18],
]

const PAL = [
  { hex: '#C0152A', rg: 'rgba(192,21,42,'   },
  { hex: '#D4A017', rg: 'rgba(212,160,23,'  },
  { hex: '#E8829A', rg: 'rgba(232,130,154,' },
]

export default function Skills() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W, H, animId
    let mx = -9999, my = -9999

    const nodes = SKILL_DATA.map(d => ({
      ...d,
      x: 0, y: 0, ox: 0, oy: 0,
      phase:      Math.random() * Math.PI * 2,
      driftR:     14 + Math.random() * 9,
      driftSpeed: 0.17 + Math.random() * 0.11,
      ringAngle:  Math.random() * Math.PI * 2,
      r: 36, glow: 0, dim: 0,
    }))

    const pulses = []
    let lastSpawn = 0

    function spawnPulse(edgeIdx, depth = 0) {
      if (depth > 3 || !EDGES[edgeIdx]) return
      pulses.push({ edgeIdx, t: 0, speed: 0.005 + Math.random() * 0.007, dir: Math.random() > 0.5, depth })
    }

    function resize() {
      const rect = canvas.getBoundingClientRect()
      W = canvas.width  = rect.width
      H = canvas.height = rect.height
      nodes.forEach(n => { n.ox = n.xf * W; n.oy = n.yf * H })
    }

    const onMove  = e => { const r = canvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top }
    const onLeave = () => { mx = -9999; my = -9999 }
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', resize)
    resize()

    const lerp = (a, b, t) => a + (b - a) * t
    let prevT = 0, hoveredIdx = -1

    function frame(ts) {
      animId = requestAnimationFrame(frame)
      const dt  = Math.min((ts - prevT) / 1000, 0.05)
      prevT     = ts
      const sec = ts / 1000

      ctx.clearRect(0, 0, W, H)

      ctx.fillStyle = '#0C0507'
      ctx.fillRect(0, 0, W, H)

      const nb = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W * 0.55)
      nb.addColorStop(0, 'rgba(90,10,18,0.28)')
      nb.addColorStop(0.5, 'rgba(60,25,5,0.12)')
      nb.addColorStop(1, 'transparent')
      ctx.fillStyle = nb; ctx.fillRect(0, 0, W, H)

      const tr = ctx.createRadialGradient(W, 0, 0, W, 0, W * 0.45)
      tr.addColorStop(0, 'rgba(192,21,42,0.07)'); tr.addColorStop(1, 'transparent')
      ctx.fillStyle = tr; ctx.fillRect(0, 0, W, H)

      const bl = ctx.createRadialGradient(0, H, 0, 0, H, W * 0.4)
      bl.addColorStop(0, 'rgba(212,160,23,0.05)'); bl.addColorStop(1, 'transparent')
      ctx.fillStyle = bl; ctx.fillRect(0, 0, W, H)

      ctx.strokeStyle = 'rgba(192,21,42,0.055)'; ctx.lineWidth = 0.5
      const gs = 66
      for (let x = 0; x < W; x += gs) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke() }
      for (let y = 0; y < H; y += gs) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke() }

      hoveredIdx = -1
      let minDist = Infinity
      nodes.forEach((n, i) => {
        n.x = n.ox + Math.sin(sec * n.driftSpeed + n.phase) * n.driftR
        n.y = n.oy + Math.cos(sec * n.driftSpeed * 0.77 + n.phase + 1) * n.driftR * 0.7
        n.ringAngle += dt * 0.42
        const d = Math.hypot(n.x - mx, n.y - my)
        if (d < n.r + 16 && d < minDist) { minDist = d; hoveredIdx = i }
      })

      const connNodes = new Set(); const connEdges = new Set()
      if (hoveredIdx >= 0) {
        connNodes.add(hoveredIdx)
        EDGES.forEach(([a, b], i) => {
          if (a === hoveredIdx || b === hoveredIdx) { connNodes.add(a); connNodes.add(b); connEdges.add(i) }
        })
      }

      nodes.forEach((n, i) => {
        n.glow += ((hoveredIdx < 0 ? 0 : i === hoveredIdx ? 1 : 0) - n.glow) * 0.1
        n.dim  += ((hoveredIdx < 0 ? 0 : connNodes.has(i) ? 0 : 1) - n.dim)  * 0.1
      })

      EDGES.forEach(([ai, bi], ei) => {
        const a = nodes[ai], b = nodes[bi]
        const conn  = hoveredIdx < 0 || connEdges.has(ei)
        const alpha = hoveredIdx < 0 ? 0.13 : conn ? 0.55 : 0.022
        const lw    = hoveredIdx < 0 ? 0.7  : conn ? 1.5  : 0.3
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = PAL[a.cat].hex === PAL[b.cat].hex
          ? `${PAL[a.cat].rg}${alpha})` : `rgba(200,120,80,${alpha})`
        ctx.lineWidth = lw; ctx.stroke()
      })

      if (ts - lastSpawn > 860) { spawnPulse(Math.floor(Math.random() * EDGES.length)); lastSpawn = ts }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]; p.t += p.speed
        if (p.t >= 1) {
          const arrival = p.dir ? EDGES[p.edgeIdx][1] : EDGES[p.edgeIdx][0]
          if (Math.random() < 0.42) {
            const nexts = EDGES.map((_, idx) => idx).filter(idx => idx !== p.edgeIdx && EDGES[idx].includes(arrival))
            if (nexts.length) spawnPulse(nexts[Math.floor(Math.random() * nexts.length)], p.depth + 1)
          }
          pulses.splice(i, 1); continue
        }
        const [ai, bi] = EDGES[p.edgeIdx]
        const a = nodes[p.dir ? ai : bi], b = nodes[p.dir ? bi : ai]
        const px = lerp(a.x, b.x, p.t), py = lerp(a.y, b.y, p.t)
        for (let k = 1; k <= 14; k++) {
          const tf = Math.max(0, p.t - k * 0.016), fac = 1 - k / 14
          ctx.fillStyle = `rgba(255,220,140,${fac * 0.3})`
          ctx.beginPath(); ctx.arc(lerp(a.x,b.x,tf), lerp(a.y,b.y,tf), fac * 3.2, 0, Math.PI*2); ctx.fill()
        }
        const pg = ctx.createRadialGradient(px,py,0,px,py,15)
        pg.addColorStop(0,'rgba(255,235,180,0.9)'); pg.addColorStop(0.4,'rgba(212,160,23,0.35)'); pg.addColorStop(1,'transparent')
        ctx.fillStyle = pg; ctx.beginPath(); ctx.arc(px,py,15,0,Math.PI*2); ctx.fill()
        ctx.fillStyle = '#fff8e8'; ctx.beginPath(); ctx.arc(px,py,2.5,0,Math.PI*2); ctx.fill()
      }

      nodes.forEach(n => {
        const pal = PAL[n.cat], g = n.glow, da = 1 - n.dim * 0.78
        ctx.save(); ctx.globalAlpha = da
        const br = n.r + 50 + g * 30
        const bloom = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,br)
        bloom.addColorStop(0, pal.rg + (0.07 + g * 0.26) + ')'); bloom.addColorStop(1,'transparent')
        ctx.fillStyle = bloom; ctx.beginPath(); ctx.arc(n.x,n.y,br,0,Math.PI*2); ctx.fill()

        ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2)
        ctx.fillStyle = 'rgba(18,5,8,0.93)'; ctx.fill()

        ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2)
        ctx.strokeStyle = pal.hex; ctx.globalAlpha = da * (0.3 + g * 0.7); ctx.lineWidth = 0.9 + g * 1.5; ctx.stroke()

        ctx.save(); ctx.translate(n.x,n.y); ctx.rotate(n.ringAngle)
        ctx.beginPath(); ctx.arc(0,0,n.r-9,0,Math.PI*2); ctx.setLineDash([5,11])
        ctx.strokeStyle = pal.hex; ctx.globalAlpha = da * (0.1 + g * 0.26); ctx.lineWidth = 0.7
        ctx.stroke(); ctx.setLineDash([]); ctx.restore()

        ctx.save(); ctx.translate(n.x,n.y); ctx.rotate(-n.ringAngle * 1.4)
        ctx.beginPath(); ctx.arc(0,0,n.r-17,0,Math.PI*2); ctx.setLineDash([3,14])
        ctx.strokeStyle = pal.hex; ctx.globalAlpha = da * (0.06 + g * 0.15); ctx.lineWidth = 0.6
        ctx.stroke(); ctx.setLineDash([]); ctx.restore()

        ctx.globalAlpha = da * (0.7 + g * 0.3)
        ctx.fillStyle = g > 0.45 ? '#fff8e8' : pal.hex
        ctx.font = `${g > 0.45 ? 600 : 400} ${10 + g * 2}px 'DM Sans', system-ui`
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillText(n.label, n.x, n.y); ctx.restore()
      })
    }

    animId = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      style={{ background: '#0C0507', borderTop: '1px solid rgba(192,21,42,0.18)', borderBottom: '1px solid rgba(192,21,42,0.18)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(12,5,7,0.95), transparent)' }} />

      <div className="max-w-6xl mx-auto px-[6%] relative z-10">

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#D4A017] mb-3 justify-center">
            <span className="w-8 h-0.5" style={{ background: 'linear-gradient(to right, #C0152A, #D4A017)' }} />
            Tech Stack
            <span className="w-8 h-0.5" style={{ background: 'linear-gradient(to right, #D4A017, #C0152A)' }} />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-black tracking-tight mb-3 text-white">
            My <em className="not-italic gradient-text-red-gold">Skills</em>
          </h2>
          <p className="max-w-sm mx-auto text-sm leading-relaxed" style={{ color: 'rgba(255,240,243,0.38)' }}>
            Hover any node to illuminate its connections across my stack.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(192,21,42,0.22)', boxShadow: '0 0 60px rgba(192,21,42,0.08), 0 0 120px rgba(212,160,23,0.04)' }}>
          <canvas ref={canvasRef} className="w-full block" style={{ height: '580px' }} />
          <div className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(12,5,7,0.55) 100%)' }} />
        </div>

        <div className="flex items-center justify-center gap-8 mt-6 flex-wrap">
          {[
            { color: '#C0152A', label: 'Frontend'      },
            { color: '#D4A017', label: 'Backend'       },
            { color: '#E8829A', label: 'Tools & Other' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
              <span className="text-[11px] tracking-widest uppercase font-medium"
                style={{ color, opacity: 0.6 }}>{label}</span>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(12,5,7,0.95), transparent)' }} />
    </section>
  )
}
