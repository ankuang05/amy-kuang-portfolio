import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoBackground from './components/VideoBackground'
import PageTransition, { PHASE_MS } from './components/PageTransition'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import { profile, sections } from './data/resume'

const VIEWS = {
  experience: Experience,
  education: Education,
  projects: Projects,
  skills: Skills,
  contact: Contact,
}

/** How long the panels sit fully closed before the new view is swapped in. */
const HOLD_MS = 140

const validView = (id) => (sections.some((s) => s.id === id) ? id : 'home')
const hashView = () =>
  validView(decodeURIComponent(window.location.hash.replace(/^#/, '')))

export default function App() {
  const [view, setView] = useState(hashView)
  const [target, setTarget] = useState(view)
  const [phase, setPhase] = useState('idle')
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const timers = useRef([])
  const busy = useRef(false)
  const viewRef = useRef(view)

  useEffect(() => {
    viewRef.current = view
  }, [view])

  // Tearing down pending timers must also release the guard, otherwise an
  // interrupted transition would leave navigation permanently blocked.
  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
      busy.current = false
    },
    []
  )

  const navigate = useCallback((next, { push = true } = {}) => {
    const id = validView(next)
    if (busy.current || id === viewRef.current) return

    busy.current = true
    setTarget(id)
    setPhase('covering')

    if (push) {
      window.history.pushState({ view: id }, '', `#${id}`)
    }

    timers.current.push(
      setTimeout(() => {
        setView(id)
        window.scrollTo(0, 0)
        setPhase('revealing')

        timers.current.push(
          setTimeout(() => {
            setPhase('idle')
            busy.current = false
          }, PHASE_MS)
        )
      }, PHASE_MS + HOLD_MS)
    )
  }, [])

  // Back / forward buttons replay the transition without re-pushing history.
  useEffect(() => {
    const onPopState = () => navigate(hashView(), { push: false })
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [navigate])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const label = sections.find((s) => s.id === view)?.label
    document.title =
      view === 'home'
        ? `${profile.firstName} ${profile.lastName} — ${profile.title}`
        : `${label} — ${profile.firstName} ${profile.lastName}`
  }, [view])

  const Section = VIEWS[view]

  return (
    <div className="relative min-h-screen w-full">
      <VideoBackground
        activeIndex={activeIndex}
        overlay={view === 'home' ? 'bg-black/20' : 'bg-black/[0.88]'}
        scrim={view === 'home'}
        blur={view !== 'home'}
      />

      <Navbar view={view} onNavigate={navigate} scrolled={scrolled} />

      {view === 'home' ? (
        <Hero
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          onNavigate={navigate}
        />
      ) : (
        <Section onNavigate={navigate} />
      )}

      <PageTransition phase={phase} target={target} />
    </div>
  )
}
