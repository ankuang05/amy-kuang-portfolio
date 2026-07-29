import Reveal from './Reveal'
import { focusAreas, profile } from '../data/resume'

export default function Hero({ activeIndex, onSelect, onNavigate }) {
  const accent = focusAreas[activeIndex].accent

  return (
    <main className="relative z-[2] h-screen w-full">
      <div className="mx-auto flex h-full w-full max-w-[1340px] flex-col items-end justify-end gap-[150px] px-[15px] pt-[190px] md-tablet:gap-[100px] md-tablet:px-[18px] md-tablet:pt-[150px] mobile:items-start mobile:gap-[72px] mobile:px-[18px] mobile:pt-[140px]">
        {/* Focus-area switcher + availability */}
        <section
          aria-label="Focus areas"
          className="flex w-full items-end mobile:flex-col mobile:items-start mobile:gap-7"
        >
          <div className="flex-[4]">
            <ul className="flex flex-col gap-1.5">
              {focusAreas.map((area, i) => {
                const active = i === activeIndex
                return (
                  <li key={area.label}>
                    <button
                      type="button"
                      onClick={() => onSelect(i)}
                      aria-label={`${area.label} background`}
                      aria-pressed={active}
                      className={`role-link flex items-start gap-1.5 ${
                        active ? 'opacity-100' : 'opacity-55 hover:opacity-75'
                      }`}
                    >
                      <span className="mt-[1px] text-[8px] font-medium uppercase leading-3 tracking-[-0.08px]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-medium uppercase leading-4 tracking-[-0.12px]">
                        {area.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex flex-1 items-center gap-2.5">
            <span
              className="dot-pulse block h-[7px] w-[7px] shrink-0 rounded-full"
              style={{
                background: accent,
                boxShadow: `0 0 12px 2px ${accent}`,
              }}
              aria-hidden="true"
            />
            <span
              role="status"
              className="text-xs font-medium uppercase leading-4 tracking-[-0.12px]"
            >
              {profile.availability}
            </span>
          </div>
        </section>

        {/* Name + intro + CTA */}
        <section
          aria-label="Introduction"
          className="flex w-full items-end pb-[60px] md-tablet:gap-7 md-tablet:pb-[52px] mobile:flex-col mobile:items-start mobile:gap-8 mobile:pb-11"
        >
          <div className="flex-[2]">
            <Reveal
              as="h1"
              variant="up"
              threshold={0.35}
              className="text-[clamp(140px,15vw,240px)] font-medium uppercase leading-[81%] tracking-[-8px] md-tablet:text-[129.6px] md-tablet:leading-[113.4px] md-tablet:tracking-[-7.7px] mobile:text-[clamp(68px,21vw,80px)] mobile:leading-[96px] mobile:tracking-[-4.8px]"
            >
              {profile.firstName}
              <span
                style={{ color: accent, transition: 'color 900ms ease-in-out' }}
              >
                .
              </span>
            </Reveal>
          </div>

          <div className="flex flex-1 flex-col items-start gap-6 pl-[50px] md-tablet:pl-6 mobile:pl-0">
            <Reveal
              as="p"
              variant="right"
              threshold={0.35}
              className="text-base font-medium leading-6 tracking-[-0.16px] mobile:max-w-[420px]"
            >
              {profile.intro}
            </Reveal>

            <Reveal variant="right" delay={0.08} threshold={0.35}>
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="fill-button border border-white px-6 py-3 text-xs font-medium lowercase leading-4 tracking-[-0.12px]"
              >
                view my work
              </button>
            </Reveal>
          </div>
        </section>
      </div>
    </main>
  )
}
