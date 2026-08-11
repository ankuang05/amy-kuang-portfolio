import Reveal from './Reveal'
import { sections } from '../data/resume'

/**
 * The frame every section shares: its number and eyebrow, the big title, an
 * optional kicker beside it, then the section's own rows.
 *
 * All six sections are stacked in one scrolling document, so the space between
 * them lives here - padding above and below each one rather than a screen-height
 * minimum. A minimum would leave a short section, Education or Contact, sitting
 * in a pool of empty page.
 *
 * `id` doubles as the anchor the navbar links to. The top padding is deeper
 * than the navbar is tall, so landing on a section leaves the eyebrow clear of
 * it instead of tucked underneath.
 *
 * The gutters sit inside the centred column, not outside it, so a section's
 * first character lines up with the navbar's - which is centred the same way.
 * The right one is wider from 640px up: that is the reading rail's lane, and
 * it is written as `pr` on its own because a `px` shorthand in the max-width
 * variants would win the cascade and hand the lane straight back.
 */
export default function SectionShell({
  id,
  eyebrow = 'Section',
  kicker,
  children,
}) {
  const index = sections.findIndex((s) => s.id === id)
  const label = sections[index]?.label ?? ''

  return (
    <section
      id={id}
      aria-label={label}
      className="w-full pt-[140px] pb-20 md-tablet:pt-[128px] md-tablet:pb-[72px] mobile:pt-[104px] mobile:pb-14"
    >
      <div className="mx-auto w-full max-w-[1340px] pl-[15px] pr-[15px] sm:pr-14 md-tablet:pl-[18px] mobile:pl-[18px]">
        <header className="flex w-full items-end pb-16 md-tablet:pb-12 mobile:flex-col mobile:items-start mobile:gap-6 mobile:pb-10">
          <div className="flex-[2]">
            <Reveal
              variant="fade"
              className="mb-5 flex items-start gap-1.5 mobile:mb-3"
            >
              <span className="mt-[1px] text-[8px] font-medium uppercase leading-3 tracking-[-0.08px]">
                {String(index).padStart(2, '0')}
              </span>
              <span className="text-xs font-medium uppercase leading-4 tracking-[-0.12px] opacity-70">
                {eyebrow}
              </span>
            </Reveal>

            <Reveal
              as="h2"
              variant="up"
              className="text-[clamp(56px,9vw,150px)] font-medium uppercase leading-[81%] tracking-[-0.045em] mobile:tracking-[-0.03em]"
            >
              {label}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </Reveal>
          </div>

          {kicker ? (
            <div className="flex flex-1 items-end pl-[50px] md-tablet:pl-6 mobile:pl-0">
              <Reveal
                as="p"
                variant="right"
                className="text-base font-medium leading-6 tracking-[-0.16px] opacity-80 mobile:max-w-[420px]"
              >
                {kicker}
              </Reveal>
            </div>
          ) : null}
        </header>

        {children}
      </div>
    </section>
  )
}

/**
 * Shared row scaffold: index · body · right-aligned meta.
 *
 * A row with nothing in its meta column gives the space back to the body
 * rather than leaving a third of the width empty - Skills, whose chips read
 * better across a wide measure, is the case that needs it.
 */
export function EntryRow({ index, meta, children, delay = 0 }) {
  return (
    <Reveal
      variant="fade"
      delay={delay}
      threshold={0.12}
      className="grid grid-cols-12 gap-8 border-t border-white/15 py-10 md-tablet:gap-5 mobile:flex mobile:flex-col mobile:gap-4 mobile:py-8"
    >
      <div className="col-span-1 mobile:hidden">
        <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] opacity-60">
          {index}
        </span>
      </div>

      <div
        className={meta ? 'col-span-7 md-tablet:col-span-8' : 'col-span-11'}
      >
        {children}
      </div>

      {meta ? (
        <div className="col-span-4 flex flex-col items-end gap-1 text-right md-tablet:col-span-3 mobile:items-start mobile:text-left">
          {meta}
        </div>
      ) : null}
    </Reveal>
  )
}

export function Bullets({ items }) {
  // An entry can carry no bullets at all; render nothing rather than an empty
  // list, which would still push its top margin into whatever follows.
  if (!items?.length) return null

  return (
    <ul className="mt-5 flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-white/50"
            aria-hidden="true"
          />
          <span className="text-sm font-normal leading-6 tracking-[-0.14px] opacity-80">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function Meta({ children }) {
  return (
    <span className="text-xs font-medium uppercase leading-4 tracking-[-0.12px] opacity-60">
      {children}
    </span>
  )
}
