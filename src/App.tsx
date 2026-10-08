import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowUpRight, MoveUpRight } from 'lucide-react'

const portraitUrl = 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

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

function AnimatedChar({ char, index, total, progress }: { char: string; index: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.2, 1])
  const display = char === ' ' ? '\u00a0' : char

  return (
    <span className="relative inline-block">
      <span className="invisible">{display}</span>
      <motion.span className="absolute inset-0" style={{ opacity }} aria-hidden="true">{display}</motion.span>
    </span>
  )
}

function AnimatedText({ text, className = 'text-[#D7E2EA]' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
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
            return <AnimatedChar key={`${char}-${index}`} char={char} index={index} total={totalCharacters} progress={scrollYProgress} />
          })}
        </span>
      ))}
    </p>
  )
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0C0C0C]" aria-label="Hero">
      <FadeIn className="relative z-20 flex items-center justify-between gap-5 px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]" y={-20}>
        <a href="#about" className="transition-opacity duration-200 hover:opacity-70">About</a>
        <a href="#services" className="transition-opacity duration-200 hover:opacity-70">weapons</a>
        <a href="#projects" className="transition-opacity duration-200 hover:opacity-70">Projects</a>
        <a href="#contact" className="transition-opacity duration-200 hover:opacity-70">Contact</a>
      </FadeIn>

      <div className="relative z-0 mt-8 overflow-hidden sm:mt-6 md:mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="w-full whitespace-normal text-[clamp(4rem,10.6vw,160px)] font-black uppercase leading-[0.78] tracking-tight">
            <span className="hero-heading block">Hi, we are</span>
            <span className="viln-lockup block text-[1.18em]">VILN®</span>
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <Magnet>
          <img src={portraitUrl} alt="VILN 3D creator" className="pointer-events-auto w-full object-contain" />
        </Magnet>
      </FadeIn>

      <div className="mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA]">We don&apos;t just build websites. We build businesses people can&apos;t ignore.</p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
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
    <section ref={sectionRef} className="flex flex-col gap-3 bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40" aria-label="Selected motion work">
      <MarqueeRow images={marqueeImages.slice(0, 11)} direction="right" offset={offset} />
      <MarqueeRow images={marqueeImages.slice(11)} direction="left" offset={offset} />
    </section>
  )
}

function AboutSection() {
  const aboutCopy = 'NOT AN AGENCY.\nNOT A DEVELOPMENT SHOP.\nNOT ANOTHER MARKETING COMPANY.'

  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10" aria-labelledby="about-heading">
      <FadeIn delay={0.1} duration={0.9} x={-80} className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"><img src={aboutImages.moon} alt="Moon shaped 3D icon" /></FadeIn>
      <FadeIn delay={0.25} duration={0.9} x={-80} className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"><img src={aboutImages.object} alt="Abstract 3D object" /></FadeIn>
      <FadeIn delay={0.15} duration={0.9} x={80} className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"><img src={aboutImages.lego} alt="Lego inspired 3D icon" /></FadeIn>
      <FadeIn delay={0.3} duration={0.9} x={80} className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"><img src={aboutImages.group} alt="Abstract 3D group" /></FadeIn>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2 id="about-heading" className="hero-heading text-[clamp(3rem,7.55vw,114px)] font-black uppercase leading-none tracking-tight">who is VILN®</h2>
        </FadeIn>
        <AnimatedText text={aboutCopy} className="text-[#7F0012]" />
        <FadeIn delay={0.2} y={20} className="mt-6 sm:mt-8 md:mt-10">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32" aria-labelledby="services-heading">
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
      <motion.article style={{ scale, top: index * 28 }} className="sticky z-10 flex h-[min(78vh,760px)] min-h-[520px] flex-col rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
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
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32" aria-labelledby="projects-heading">
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
    <main className="overflow-x-clip bg-[#0C0C0C] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
