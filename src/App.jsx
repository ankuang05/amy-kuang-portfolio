import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoBackground from './components/VideoBackground'
import SectionRail from './components/SectionRail'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import { profile, sections, VIDEOS } from './data/resume'

/**
 * How far down the hero the background gives way. Two thresholds rather than
 * one: the footage darkens a third of the way through the hero and only
 * brightens again near the very top, so a scroll parked on the line cannot
 * flicker the two states against each other.
 */
const DARKEN_AT = 0.3
const BRIGHTEN_AT = 0.15

/** Roughly the navbar's height — where a section counts as the one being read. */
const READING_LINE = 140

export default function App() {
  const [active, setActive] = useState(sections[0].id)
  const [atHero, setAtHero] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Mirrors `atHero` for the hysteresis test above, which has to read the
  // current value during a scroll frame rather than the one this render closed
  // over.
  const heroRef = useRef(true)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const y = window.scrollY
      const vh = window.innerHeight

      setScrolled(y > 24)

      const wasHero = heroRef.current
      const nowHero = y < vh * (wasHero ? DARKEN_AT : BRIGHTEN_AT)
      if (nowHero !== wasHero) {
        heroRef.current = nowHero
        setAtHero(nowHero)
      }

      // The section being read is the last one whose top has passed under the
      // navbar — not the one taking up the most screen, which would skip a
      // short section entirely on a fast scroll.
      const line = y + READING_LINE
      let current = sections[0].id
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top + y <= line) {
          current = section.id
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Opening the page on #projects: the browser looks for that anchor before
  // React has drawn anything and gives up. Once the sections exist, jump again.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ''))
    if (!sections.some((s) => s.id === id)) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
  }, [])

  useEffect(() => {
    const label = sections.find((s) => s.id === active)?.label
    document.title =
      active === 'home'
        ? `${profile.firstName} ${profile.lastName} — ${profile.title}`
        : `${label} — ${profile.firstName} ${profile.lastName}`
  }, [active])

  return (
    <div className="relative w-full">
      <VideoBackground
        activeIndex={activeIndex}
        autoCycle={atHero}
        onCycle={() =>
          setActiveIndex((current) => (current + 1) % VIDEOS.length)
        }
        overlay={atHero ? 'bg-black/20' : 'bg-black/[0.88]'}
        scrim={atHero}
        blur={!atHero}
      />

      <Navbar active={active} scrolled={scrolled} />
      <SectionRail active={active} visible={!atHero} />

      <main className="relative z-[2] w-full">
        <Hero hinting={atHero} />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
