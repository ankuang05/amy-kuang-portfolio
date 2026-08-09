import Reveal from './Reveal'
import { bio, profile } from '../data/resume'

export default function Hero({ hinting = true }) {
  // The exclamation mark carries the accent colour, doing the job the pink full
  // stop does on every section title.
  const [greetingHead, ...rest] = bio.greeting.split('!')
  const greetingTail = rest.join('!')

  return (
    <section id="home" aria-label="Home" className="relative h-screen w-full">
      <div className="mx-auto flex h-full w-full max-w-[1340px] flex-col items-end justify-end px-[15px] pt-[190px] md-tablet:px-[18px] md-tablet:pt-[150px] mobile:items-start mobile:px-[18px] mobile:pt-[140px]">
        {/* Name + intro + CTA */}
        <div
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
              <a
                href={`mailto:${profile.email}`}
                className="fill-button inline-flex items-center gap-2 border border-white px-6 py-3 text-xs font-medium leading-4 tracking-[-0.12px]"
              >
                Get In Touch
                {/* Decorative — the link text already says where it goes. */}
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Says "this page goes down" without saying anything: a dot falling
          down a hairline, on a loop. It fades out as soon as the hint has been
          taken, so it never sits there repeating itself over a page someone is
          already scrolling. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-4 flex justify-center transition-opacity duration-700 ${
          hinting ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="scroll-hint" />
      </div>
    </section>
  )
}
