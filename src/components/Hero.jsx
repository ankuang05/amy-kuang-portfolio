import Reveal from './Reveal'
import { bio } from '../data/resume'

export default function Hero({ onNavigate }) {
  // The exclamation mark carries the accent colour, doing the job the pink full
  // stop does on every section title.
  const [greetingHead, ...rest] = bio.greeting.split('!')
  const greetingTail = rest.join('!')

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
              className="text-[clamp(64px,10.5vw,160px)] font-medium uppercase leading-[0.86] tracking-[-0.045em]"
            >
              {greetingHead}
              {greetingTail ? (
                <span style={{ color: 'var(--accent)' }}>!</span>
              ) : null}
              {greetingTail}
            </Reveal>
          </div>

          <div className="flex flex-1 flex-col items-start gap-6 pl-[50px] md-tablet:pl-6 mobile:pl-0">
            <Reveal
              variant="right"
              threshold={0.35}
              className="flex flex-col gap-2.5 mobile:max-w-[420px]"
            >
              {bio.lines.map((line) => (
                <p
                  key={line.lead}
                  className="text-base font-medium leading-6 tracking-[-0.16px]"
                >
                  <strong className="font-bold">{line.lead}</strong> {line.rest}
                </p>
              ))}
            </Reveal>

            <Reveal variant="right" delay={0.06} threshold={0.35}>
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
