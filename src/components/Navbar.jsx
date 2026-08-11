import { useEffect, useState } from 'react'
import { navSections, profile } from '../data/resume'

const indexLabel = (i) => String(i + 1).padStart(2, '0')

/**
 * Every section lives on the one page now, so these are plain anchors: the
 * browser does the scrolling - smoothly, or instantly for anyone who has asked
 * for less motion, both set in index.css - and back/forward move between
 * sections without a line of script.
 */
export default function Navbar({ active, scrolled }) {
  const [open, setOpen] = useState(false)

  // Close the mobile panel once the section being read has changed, which is
  // the tap having landed.
  useEffect(() => setOpen(false), [active])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-500 ${
        open
          ? 'bg-black/95 backdrop-blur-xl'
          : scrolled
            ? 'bg-black/55 backdrop-blur-md'
            : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-[1340px] px-[15px] py-9 md-tablet:px-[18px] md-tablet:py-[30px] mobile:px-[18px] mobile:py-6">
        <div className="flex items-start justify-between gap-6">
          {/* Left: wordmark + section nav */}
          <div className="flex items-start gap-10 md-tablet:gap-6">
            <a
              href="#home"
              className="nav-link-underline text-xs font-semibold uppercase leading-4 tracking-[-0.12px] text-white"
              data-active={active === 'home'}
            >
              {profile.firstName} {profile.lastName}
            </a>

            <nav aria-label="Sections" className="mobile:hidden">
              <ul className="flex items-start gap-7 md-tablet:gap-4">
                {navSections.map((section, i) => {
                  const current = active === section.id
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        aria-current={current ? 'true' : undefined}
                        className={`role-link flex items-start gap-1.5 transition-opacity duration-300 ${
                          current ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <span className="mt-[1px] text-[8px] font-medium uppercase leading-3 tracking-[-0.08px]">
                          {indexLabel(i)}
                        </span>
                        <span
                          className="nav-link-underline text-xs font-medium uppercase leading-4 tracking-[-0.12px]"
                          data-active={current}
                        >
                          {section.label}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Right: contact + local clock */}
          <div className="flex flex-col items-end gap-1 text-right">
            <a
              href={`mailto:${profile.email}`}
              className="nav-link-underline text-xs font-medium leading-4 tracking-[-0.12px]"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="nav-link-underline hidden text-xs font-medium uppercase leading-4 tracking-[-0.12px] mobile:block"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile panel - grid-rows trick keeps the collapse smooth */}
        <div
          id="mobile-nav"
          className={`hidden overflow-hidden transition-[grid-template-rows] duration-[420ms] ease-[var(--ease-spring)] mobile:grid ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav aria-label="Sections (mobile)" className="pt-10 pb-4">
              <ul className="flex flex-col gap-4">
                {navSections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-2 text-left"
                    >
                      <span className="mt-2 text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] opacity-60">
                        {indexLabel(i)}
                      </span>
                      <span
                        className={`text-[28px] font-medium uppercase leading-8 tracking-[-0.84px] ${
                          active === section.id ? 'opacity-100' : 'opacity-70'
                        }`}
                      >
                        {section.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
