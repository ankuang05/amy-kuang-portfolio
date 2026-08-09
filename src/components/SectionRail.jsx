import { useEffect, useState } from 'react'
import { navSections } from '../data/resume'

/** How long a section's name stays up after you arrive in it. */
const NAME_MS = 1900

/**
 * A reading position marker pinned to the right edge: one rule per section,
 * the one being read drawn long and in the accent colour with its name beside
 * it. Everything else stays a stub, so the rail reads as a progress bar broken
 * into chapters rather than a second navigation.
 *
 * It is absent on the hero and blends in on the way out of it, which is the
 * point at which someone has committed to scrolling and might want to know
 * where they have got to. The name fades up on arrival and fades out again a
 * couple of seconds later, so what stays on screen is five short rules.
 *
 * The rules are links as well as markers — hovering one names it — so the rail
 * doubles as a way to jump without ever showing more than one word at a time.
 *
 * Hidden below 640px: a phone has no spare gutter to give it, and the menu is
 * a thumb's reach away there anyway. Sections carry a matching right padding
 * above that width so the rail never sits over anything.
 */
export default function SectionRail({ active, visible }) {
  const [naming, setNaming] = useState(false)

  // The name announces the arrival and then gets out of the way. Left up, it
  // would sit over the right edge of whatever is being read for as long as the
  // section lasts; the rules alone stay inside their gutter.
  useEffect(() => {
    setNaming(true)
    const id = setTimeout(() => setNaming(false), NAME_MS)
    return () => clearTimeout(id)
  }, [active])

  return (
    <div className="fixed right-0 top-1/2 z-20 hidden -translate-y-1/2 sm:block">
      <nav
        aria-label="Reading position"
        className={`flex flex-col items-end gap-4 pr-3 transition-[opacity,transform] duration-700 ease-[var(--ease-spring)] ${
          visible
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-4 opacity-0'
        }`}
      >
        {navSections.map((section, i) => {
          const current = active === section.id

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={current ? 'true' : undefined}
              className="group flex items-center justify-end gap-2.5"
            >
              <span
                className={`whitespace-nowrap text-[9px] font-medium uppercase leading-3 tracking-[-0.09px] transition-[opacity,transform] duration-500 ease-[var(--ease-spring)] group-hover:translate-x-0 group-hover:opacity-60 ${
                  current && naming
                    ? 'translate-x-0 opacity-80'
                    : 'translate-x-2 opacity-0'
                }`}
              >
                {String(i + 1).padStart(2, '0')} {section.label}
              </span>

              <span
                aria-hidden="true"
                className={`h-px transition-all duration-500 ease-[var(--ease-spring)] ${
                  current
                    ? 'w-7'
                    : 'w-2.5 bg-white/35 group-hover:w-4 group-hover:bg-white/70'
                }`}
                style={current ? { background: 'var(--accent)' } : undefined}
              />
            </a>
          )
        })}
      </nav>
    </div>
  )
}
