import Reveal from './Reveal'
import { heroFacts, profile } from '../data/resume'

export default function Hero({ onNavigate }) {
  return (
    <main className="relative z-[2] h-screen w-full">
      <div className="mx-auto flex h-full w-full max-w-[1340px] flex-col items-end justify-end px-[15px] pt-[190px] md-tablet:px-[18px] md-tablet:pt-[150px] mobile:items-start mobile:px-[18px] mobile:pt-[140px]">
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
              {/* Pinned to the brand pink. It used to track the active focus
                  area, but with the switcher gone a colour that changes on its
                  own just reads as a glitch. */}
              <span style={{ color: 'var(--accent)' }}>.</span>
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

            {/* Degree, school, location — the scan a recruiter does first. */}
            <Reveal
              as="ul"
              variant="right"
              delay={0.06}
              threshold={0.35}
              aria-label="Credentials"
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-medium uppercase leading-4 tracking-[-0.1px] opacity-70"
            >
              {heroFacts.map((fact, i) => (
                <li key={fact} className="flex items-center gap-3">
                  {/* The list stacks one-per-line on mobile, where a leading
                      divider would just hang off the front of each row. */}
                  {i > 0 ? (
                    <span
                      aria-hidden="true"
                      className="block h-3 w-px bg-white/30 mobile:hidden"
                    />
                  ) : null}
                  {fact}
                </li>
              ))}
            </Reveal>

            <Reveal variant="right" delay={0.12} threshold={0.35}>
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
