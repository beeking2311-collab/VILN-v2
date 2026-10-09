import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useMotionValue, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowUpRight, MoveUpRight } from 'lucide-react'

const heroVideoUrl = '/manus-storage/kling_20261009_VIDEO_show_the_f_1724_0_6f416cde.mp4'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const aboutImages = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

const projects = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
]

const services = [
  ['01', '3D Modeling', 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.'],
  ['02', 'Rendering', 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.'],
  ['03', 'Motion Design', 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.'],
  ['04', 'Branding', 'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.'],
  ['05', 'Web Design', 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.'],
]

const easing = [0.25, 0.1, 0.25, 1] as const

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
}

function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, className = '' }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: easing }}
    >
      {children}
    </motion.div>
  )
}

function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="mailto:hello@jack3d.studio"
      className={`contact-button inline-flex items-center gap-2 rounded-full bg-[linear-gradient(123deg,#2D0008_7%,#FF0019_37%,#8F0013_72%,#FF5A48_100%)] px-8 py-3 text-xs font-medium uppercase tracking-[0.22em] text-white shadow-[0_4px_4px_rgba(255,0,25,0.25),4px_4px_12px_#8F0013_inset] outline outline-2 outline-white -outline-offset-[3px] transition-transform duration-300 hover:-translate-y-1 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      Contact us <ArrowUpRight size={16} strokeWidth={1.6} />
    </a>
  )
}

function LiveProjectButton() {
  return (
    <a
      href="#contact"
      className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#D7E2EA] transition-colors duration-300 hover:bg-[#D7E2EA]/10 sm:px-7 sm:py-3 sm:text-sm"
    >
      Live Project <MoveUpRight size={15} strokeWidth={1.5} />
    </a>
  )
}

function Magnet({ children, padding = 150, strength = 3 }: { children: ReactNode; padding?: number; strength?: number }) {
  const [magnet, setMagnet] = useState({ x: 0, y: 0, active: false })

  return (
    <div
      className="will-change-transform"
      style={{
        transform: `translate3d(${magnet.x}px, ${magnet.y}px, 0)`,
        transition: magnet.active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - (rect.left + rect.width / 2)
        const y = event.clientY - (rect.top + rect.height / 2)
        const within = Math.abs(x) < rect.width / 2 + padding && Math.abs(y) < rect.height / 2 + padding
        setMagnet({ x: within ? x / strength : 0, y: within ? y / strength : 0, active: within })
      }}
      onMouseLeave={() => setMagnet({ x: 0, y: 0, active: false })}
    >
      {children}
    </div>
  )
}

function AnimatedChar({ char, index, total, progress, revealRange }: { char: string; index: number; total: number; progress: MotionValue<number>; revealRange: [number, number] }) {
  const revealStart = revealRange[0] + ((revealRange[1] - revealRange[0]) * index) / total
  const revealEnd = revealRange[0] + ((revealRange[1] - revealRange[0]) * (index + 1)) / total
  const opacity = useTransform(progress, [revealStart, revealEnd], [0.12, 1])
  const y = useTransform(progress, [revealStart, revealEnd], [8, 0])
  const display = char === ' ' ? '\u00a0' : char

  return (
    <span className="relative inline-block">
      <span className="invisible">{display}</span>
      <motion.span className="absolute inset-0" style={{ opacity, y }} aria-hidden="true">{display}</motion.span>
    </span>
  )
}

function AnimatedText({ text, className = 'text-[#D7E2EA]', progress, revealRange = [0, 1] }: { text: string; className?: string; progress?: MotionValue<number>; revealRange?: [number, number] }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress: localProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const activeProgress = progress ?? localProgress
  const lines = text.split('\n')
  const totalCharacters = text.replace(/\n/g, '').length
  let characterIndex = 0

  return (
    <p ref={ref} aria-label={text} className={`max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed ${className}`}>
      {lines.map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`} className="block">
          {line.split('').map((char) => {
            const index = characterIndex
            characterIndex += 1
            return <AnimatedChar key={`${char}-${index}`} char={char} index={index} total={totalCharacters} progress={activeProgress} revealRange={revealRange} />
          })}
        </span>
      ))}
    </p>
  )
}

function ScrollGlyph({ char, index, total, progress, typeRange, eraseRange, className = '' }: { char: string; index: number; total: number; progress: MotionValue<number>; typeRange: [number, number]; eraseRange?: [number, number]; className?: string }) {
  const typeStart = typeRange[0] + ((typeRange[1] - typeRange[0]) * index) / total
  const typeEnd = typeRange[0] + ((typeRange[1] - typeRange[0]) * (index + 1)) / total
  const eraseStart = eraseRange ? eraseRange[0] + ((eraseRange[1] - eraseRange[0]) * (total - index - 1)) / total : undefined
  const eraseEnd = eraseRange ? eraseRange[0] + ((eraseRange[1] - eraseRange[0]) * (total - index)) / total : undefined
  const inputRange = eraseStart !== undefined && eraseEnd !== undefined ? [typeStart, typeEnd, eraseStart, eraseEnd] : [typeStart, typeEnd]
  const outputRange = eraseStart !== undefined && eraseEnd !== undefined ? [0, 1, 1, 0] : [0, 1]
  const opacity = useTransform(progress, inputRange, outputRange)
  const y = useTransform(progress, [typeStart, typeEnd], [12, 0])
  const display = char === ' ' ? '\u00a0' : char

  const isRegistered = char === '®'

  return (
    <span className={`relative inline-block ${isRegistered ? 'registered-glyph' : ''}`}>
      <span className="invisible">{display}</span>
      <motion.span className={`absolute inset-0 ${className}`} style={{ opacity, y }} aria-hidden="true">{display}</motion.span>
    </span>
  )
}

function ScrollTypedLine({ text, progress, typeRange, eraseRange, className = '', wrap = false }: { text: string; progress: MotionValue<number>; typeRange: [number, number]; eraseRange?: [number, number]; className?: string; wrap?: boolean }) {
  return (
    <span className={`block ${wrap ? 'whitespace-normal' : 'whitespace-pre'}`}>
      {text.split('').map((char, index) => <ScrollGlyph key={`${char}-${index}`} char={char} index={index} total={text.length} progress={progress} typeRange={typeRange} eraseRange={eraseRange} className={className} />)}
    </span>
  )
}

const lerp = (from: number, to: number, amount: number) => from + (to - from) * Math.min(1, Math.max(0, amount))

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const syncVideo = (value: number) => {
      const video = videoRef.current
      if (!video || video.readyState < 1) return
      const fullDuration = Number.isFinite(video.duration) ? video.duration : 8.041667
      const finalFrame = Math.max(0, fullDuration - 0.04)
      const videoTime = value < 0.32
        ? lerp(0.1, 1.25, value / 0.32)
        : value < 0.4
          ? lerp(1.25, 2.35, (value - 0.32) / 0.08)
          : value < 0.5
            ? lerp(2.35, 3, (value - 0.4) / 0.1)
            : value < 0.64
              ? lerp(3, 5.2, (value - 0.5) / 0.14)
              : value < 0.83
                ? lerp(5.2, 6.5, (value - 0.64) / 0.19)
                : value < 0.93
                  ? lerp(6.5, finalFrame, (value - 0.83) / 0.1)
                  : finalFrame
      video.pause()
      if (Math.abs(video.currentTime - videoTime) > 0.015) video.currentTime = videoTime
    }

    const updateProgress = () => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      const range = Math.max(1, rect.height - window.innerHeight)
      const value = Math.min(1, Math.max(0, -rect.top / range))
      scrollProgress.set(value)
      syncVideo(value)
    }

    const video = videoRef.current
    const onMetadata = () => syncVideo(scrollProgress.get())
    video?.addEventListener('loadedmetadata', onMetadata)
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      video?.removeEventListener('loadedmetadata', onMetadata)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [scrollProgress])

  const endCopyOpacity = useTransform(scrollProgress, [0.92, 0.95], [0, 1])

  return (
    <section ref={sectionRef} className="relative h-[520vh] bg-[#000000]" aria-label="Pinned VILN hero sequence">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#000000]">
        <video ref={videoRef} className="absolute inset-0 mt-[47px] h-full w-full scale-[0.86] object-contain" muted playsInline preload="auto" aria-label="VILN character expression and mask sequence">
          <source src={heroVideoUrl} type="video/mp4" />
        </video>

        <FadeIn className="relative z-30 flex items-center justify-between gap-5 px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]" y={-20}>
          <a href="#about" className="transition-opacity duration-200 hover:opacity-70">About</a>
          <a href="#services" className="transition-opacity duration-200 hover:opacity-70">weapons</a>
          <a href="#projects" className="transition-opacity duration-200 hover:opacity-70">Projects</a>
          <a href="#contact" className="transition-opacity duration-200 hover:opacity-70">Contact</a>
        </FadeIn>

        <div className="pointer-events-none absolute left-5 top-[13%] z-20 w-[min(68vw,620px)] text-left md:left-10 md:top-[15%]">
          <h1 className="text-[clamp(2rem,4.6vw,5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em]">
            <ScrollTypedLine text="HI, WE ARE" progress={scrollProgress} typeRange={[0.05, 0.18]} className="hero-heading" />
            <ScrollTypedLine text="A WEBSITE DESIG" progress={scrollProgress} typeRange={[0.22, 0.38]} eraseRange={[0.5, 0.64]} className="hero-heading" />
          </h1>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[30%] z-20 text-center">
          <h2 className="whitespace-nowrap text-[clamp(5rem,34vw,36rem)] uppercase leading-[0.58] tracking-[-0.16em]">
            <ScrollTypedLine text="VILN®" progress={scrollProgress} typeRange={[0.68, 0.83]} className="viln-lockup human-type" />
          </h2>
        </div>

        <div className="absolute bottom-7 left-6 right-6 z-20 flex items-end justify-between gap-6 sm:bottom-8 md:bottom-10 md:left-10 md:right-10">
          <motion.p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]" style={{ opacity: endCopyOpacity }} aria-label="We don't just build websites. We build businesses people can't ignore.">
            <ScrollTypedLine text="WE DON'T JUST BUILD WEBSITES. WE BUILD BUSINESSES PEOPLE CAN'T IGNORE." progress={scrollProgress} typeRange={[0.95, 0.995]} className="text-[#D7E2EA]" wrap />
          </motion.p>
          <ContactButton />
        </div>
      </div>
    </section>
  )
}

function MarqueeRow({ images, direction, offset }: { images: string[]; direction: 'left' | 'right'; offset: number }) {
  const repeated = [...images, ...images, ...images]
  const travel = direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div className="hide-scrollbar overflow-hidden">
      <div className="marquee-track" style={{ transform: `translate3d(${travel}px, 0, 0)` }}>
        {repeated.map((src, index) => <img key={`${src}-${index}`} src={src} alt="" loading="lazy" className="rounded-2xl" />)}
      </div>
    </div>
  )
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const sectionTop = sectionRef.current?.getBoundingClientRect().top ?? 0
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="flex flex-col gap-3 bg-[#000000] pb-10 pt-24 sm:pt-32 md:pt-40" aria-label="Selected motion work">
      <MarqueeRow images={marqueeImages.slice(0, 11)} direction="right" offset={offset} />
      <MarqueeRow images={marqueeImages.slice(11)} direction="left" offset={offset} />
    </section>
  )
}

function GrowthDiagram({ progress }: { progress: MotionValue<number> }) {
  const systemOpacity = useTransform(progress, [0.93, 0.965], [0, 1])
  const trunk = useTransform(progress, [0.95, 0.975], [0, 1])
  const branches = useTransform(progress, [0.97, 0.99], [0, 1])
  const outputs = useTransform(progress, [0.985, 0.998], [0, 1])
  const advantage = useTransform(progress, [0.995, 1], [0, 1])

  return (
    <motion.div className="absolute inset-x-4 bottom-8 top-24 flex flex-col items-center justify-center text-center sm:inset-x-8 sm:top-28" style={{ opacity: systemOpacity }} aria-label="VILN growth system diagram">
      <div className="pixel-type text-[clamp(0.75rem,2vw,1.4rem)] tracking-[0.14em] text-[#D7E2EA]">VILN®</div>
      <motion.div className="growth-line h-10 w-px origin-top sm:h-14" style={{ scaleY: trunk }} />
      <div className="relative w-full max-w-4xl">
        <motion.div className="growth-line absolute left-[16.66%] right-[16.66%] top-0 h-px origin-center" style={{ scaleX: branches }} />
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {[
            ['BUILD', 'WEBSITE, ANIMATIONS & 3D MODELS', ''],
            ['GROW', 'TRAFFIC [SEO, GEO, SMM]', 'visibility that compounds. content that lasts.'],
            ['AUTOMATE', 'SYSTEMS & WORKFLOWS', 'less manual, more momentum'],
          ].map(([label, output, note]) => (
            <div key={label} className="flex flex-col items-center">
              <motion.div className="growth-line h-8 w-px origin-top sm:h-12" style={{ scaleY: branches }} />
              <motion.div className="pixel-type text-[clamp(0.55rem,1.3vw,0.9rem)] tracking-[0.08em] text-[#D7E2EA]" style={{ opacity: branches }}>{label}</motion.div>
              <motion.div className="growth-line h-6 w-px origin-top sm:h-10" style={{ scaleY: outputs }} />
              <motion.div className="pixel-type max-w-[10rem] text-[clamp(0.45rem,1vw,0.7rem)] leading-[1.5] tracking-[0.05em] text-[#7F0012]" style={{ opacity: outputs }}>{output}</motion.div>
              {note && <motion.div className="mt-3 max-w-[12rem] text-[clamp(0.55rem,0.9vw,0.78rem)] font-light leading-[1.35] tracking-normal text-[#D7E2EA]/70" style={{ opacity: outputs }}>{note}</motion.div>}
              <motion.div className="growth-line h-6 w-px origin-top sm:h-10" style={{ scaleY: outputs }} />
            </div>
          ))}
        </div>
        <motion.div className="growth-line absolute bottom-[-2.5rem] left-[16.66%] right-[16.66%] h-px origin-center sm:bottom-[-3.5rem]" style={{ scaleX: advantage }} />
      </div>
      <motion.div className="growth-line mt-10 h-8 w-px origin-top sm:mt-14 sm:h-12" style={{ scaleY: advantage }} />
      <motion.div className="pixel-type mt-2 text-[clamp(0.5rem,1.3vw,0.85rem)] tracking-[0.12em] text-[#D7E2EA]" style={{ opacity: advantage }}>WE CREATE UNFAIR ADVANTAGE</motion.div>
    </motion.div>
  )
}

function AboutSection() {
  const aboutCopy = 'NOT AN AGENCY.\nNOT A DEVELOPMENT SHOP.\nNOT ANOTHER MARKETING COMPANY.'
  const sectionRef = useRef<HTMLElement>(null)
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const updateProgress = () => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      const range = Math.max(1, rect.height - window.innerHeight)
      scrollProgress.set(Math.min(1, Math.max(0, -rect.top / range)))
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [scrollProgress])

  const introOpacity = useTransform(scrollProgress, [0.08, 0.34, 0.46], [1, 1, 0])
  const introScale = useTransform(scrollProgress, [0.34, 0.46], [1, 0.96])
  const questionOpacity = useTransform(scrollProgress, [0.46, 0.55, 0.62, 0.64], [0, 1, 1, 0])
  const questionY = useTransform(scrollProgress, [0.46, 0.56], [24, 0])
  const cursorOpacity = useTransform(scrollProgress, [0.63, 0.7, 0.74], [0, 1, 0])
  const answerOpacity = useTransform(scrollProgress, [0.76, 0.8, 0.84], [0, 1, 0])
  const answerY = useTransform(scrollProgress, [0.7, 0.77], [30, 0])
  const audienceOpacity = useTransform(scrollProgress, [0.83, 0.87, 0.93], [0, 1, 0])
  const audienceY = useTransform(scrollProgress, [0.83, 0.87], [24, 0])
  const moonY = useTransform(scrollProgress, [0, 0.46], [0, -520])
  const moonRotate = useTransform(scrollProgress, [0, 0.46], [0, -22])
  const objectY = useTransform(scrollProgress, [0, 0.46], [0, -400])
  const objectRotate = useTransform(scrollProgress, [0, 0.46], [0, 26])
  const legoY = useTransform(scrollProgress, [0, 0.46], [0, -480])
  const legoRotate = useTransform(scrollProgress, [0, 0.46], [0, 19])
  const groupY = useTransform(scrollProgress, [0, 0.46], [0, -340])
  const groupRotate = useTransform(scrollProgress, [0, 0.46], [0, -28])

  return (
    <section id="about" ref={sectionRef} className="relative h-[700vh] bg-[#000000]" aria-labelledby="about-heading">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#000000]">
        <div className="absolute right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-3 sm:right-8">
          <span className="pixel-type text-[0.45rem] tracking-[0.12em] text-[#7F0012]">SCROLL</span>
          <div className="h-40 w-px overflow-hidden bg-white/10 sm:h-52">
            <motion.div className="h-full w-full origin-top bg-[#7F0012]" style={{ scaleY: scrollProgress }} />
          </div>
          <motion.span className="pixel-type text-[0.45rem] tracking-[0.12em] text-[#D7E2EA]" style={{ opacity: scrollProgress }}>VILN</motion.span>
        </div>

        <motion.div className="absolute inset-0" style={{ opacity: introOpacity, scale: introScale }}>
          <motion.div className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]" style={{ y: moonY, rotate: moonRotate }}><img src={aboutImages.moon} alt="Moon shaped 3D icon" /></motion.div>
          <motion.div className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]" style={{ y: objectY, rotate: objectRotate }}><img src={aboutImages.object} alt="Abstract 3D object" /></motion.div>
          <motion.div className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]" style={{ y: legoY, rotate: legoRotate }}><img src={aboutImages.lego} alt="Lego inspired 3D icon" /></motion.div>
          <motion.div className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]" style={{ y: groupY, rotate: groupRotate }}><img src={aboutImages.group} alt="Abstract 3D group" /></motion.div>

          <div className="relative z-10 flex h-screen flex-col items-center justify-center gap-10 px-5 text-center sm:gap-14 md:gap-16">
            <FadeIn y={40}>
              <h2 id="about-heading" className="hero-heading text-[clamp(3rem,7.55vw,114px)] font-black uppercase leading-none tracking-tight">who is VILN®</h2>
            </FadeIn>
            <AnimatedText text={aboutCopy} className="text-[#7F0012]" progress={scrollProgress} revealRange={[0.08, 0.32]} />
            <FadeIn delay={0.2} y={20} className="mt-6 sm:mt-8 md:mt-10">
              <ContactButton />
            </FadeIn>
          </div>
        </motion.div>

        <motion.div className="pixel-type absolute inset-x-5 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center text-center text-[clamp(0.75rem,2.2vw,1.4rem)] leading-[2] tracking-[0.12em] text-[#D7E2EA]" style={{ opacity: questionOpacity, y: questionY }}>
          <span>SO WHAT ARE YOU?</span>
        </motion.div>

        <motion.div className="pixel-type absolute inset-x-5 top-1/2 z-20 -translate-y-1/2 text-center text-[clamp(1rem,2.5vw,1.55rem)] leading-[2] tracking-[0.12em] text-[#7F0012]" style={{ opacity: cursorOpacity }} aria-label="Thinking">
          <span className="cinematic-cursor">_</span>
        </motion.div>

        <motion.div className="pixel-type absolute inset-x-5 top-1/2 z-20 -translate-y-1/2 text-center text-[clamp(0.75rem,2.2vw,1.4rem)] leading-[2] tracking-[0.12em] text-[#D7E2EA]" style={{ opacity: answerOpacity, y: answerY }}>
          A GROWTH SYSTEM.
        </motion.div>

        <motion.div className="pixel-type absolute inset-x-5 top-1/2 z-20 -translate-y-1/2 text-center text-[clamp(0.75rem,2.2vw,1.4rem)] leading-[2] tracking-[0.12em] text-[#D7E2EA]" style={{ opacity: audienceOpacity, y: audienceY }}>
          FOR PEOPLE BUILDING SOMETHING WORTH GROWING
        </motion.div>

        <GrowthDiagram progress={scrollProgress} />
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#000000] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32" aria-labelledby="services-heading">
      <FadeIn y={40}>
        <h2 id="services-heading" className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">Services</h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {services.map(([number, name, description], index) => (
          <FadeIn key={number} delay={index * 0.1} y={20}>
            <article className="grid grid-cols-[30%_70%] items-start gap-4 border-t border-[rgba(12,12,12,0.15)] py-8 sm:grid-cols-[28%_72%] sm:gap-6 sm:py-10 md:grid-cols-[25%_75%] md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.8]">{number}</span>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">{name}</h3>
                <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60 sm:mt-4">{description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'start start'] })
  const targetScale = 1 - (projects.length - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={cardRef} className="relative h-[85vh]">
      <motion.article style={{ scale, top: index * 28 }} className="sticky z-10 flex h-[min(78vh,760px)] min-h-[520px] flex-col rounded-[40px] border-2 border-[#D7E2EA] bg-[#000000] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
        <div className="flex items-start justify-between gap-4 pb-5 sm:pb-7">
          <div className="flex min-w-0 items-start gap-4 sm:gap-6">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.7] tracking-tight">{project.number}</span>
            <div className="pt-1 sm:pt-2">
              <p className="mb-1 text-[0.65rem] font-light uppercase tracking-[0.22em] text-[#D7E2EA]/60 sm:text-xs">{project.category}</p>
              <h3 className="max-w-[190px] text-[clamp(1.2rem,3vw,2.7rem)] font-medium uppercase leading-[0.95] sm:max-w-[340px]">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[40%_60%] gap-2 sm:gap-3">
          <div className="grid min-h-0 grid-rows-[clamp(130px,16vw,230px)_1fr] gap-2 sm:gap-3">
            <div className="project-image rounded-[32px] sm:rounded-[42px] md:rounded-[52px]"><img src={project.images[0]} alt={`${project.name} detail one`} loading="lazy" /></div>
            <div className="project-image rounded-[32px] sm:rounded-[42px] md:rounded-[52px]"><img src={project.images[1]} alt={`${project.name} detail two`} loading="lazy" /></div>
          </div>
          <div className="project-image rounded-[32px] sm:rounded-[42px] md:rounded-[52px]"><img src={project.images[2]} alt={`${project.name} hero detail`} loading="lazy" /></div>
        </div>
      </motion.article>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#000000] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32" aria-labelledby="projects-heading">
      <FadeIn y={40}>
        <h2 id="projects-heading" className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">Project</h2>
      </FadeIn>
      <div className="mx-auto max-w-6xl">
        {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
      </div>
      <div id="contact" className="mx-auto flex max-w-6xl flex-col items-center gap-8 border-t border-[#D7E2EA]/20 pt-20 text-center sm:pt-28 md:pt-36">
        <p className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/60">Have a world to build?</p>
        <h2 className="hero-heading max-w-4xl text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tight">Let&apos;s make it unforgettable.</h2>
        <ContactButton />
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="overflow-x-clip bg-[#000000] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
