import Reveal from './Reveal'
import { sections } from '../data/resume'

export default function SectionShell({
  id,
  eyebrow = 'Section',
  kicker,
  children,
  onNavigate,
}) {
  const index = sections.findIndex((s) => s.id === id)
  const label = sections[index]?.label ?? ''
  const next = sections[(index + 1) % sections.length]

  return (
    <main className="relative z-[2] min-h-screen w-full">
      <div className="mx-auto w-full max-w-[1340px] px-[15px] pt-[190px] pb-[120px] md-tablet:px-[18px] md-tablet:pt-[150px] mobile:px-[18px] mobile:pt-[130px] mobile:pb-20">
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
              as="h1"
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

        <Reveal className="mt-24 border-t border-white/15 pt-8 mobile:mt-16">
          <button
            type="button"
            onClick={() => onNavigate(next.id)}
            className="role-link group flex items-baseline gap-3"
          >
            <span className="text-xs font-medium uppercase leading-4 tracking-[-0.12px] opacity-60">
              Next
            </span>
            <span className="nav-link-underline text-[32px] font-medium uppercase leading-8 tracking-[-1px] mobile:text-[24px]">
              {next.label}
            </span>
          </button>
        </Reveal>
      </div>
    </main>
  )
}

/** Shared row scaffold: index · body · right-aligned meta. */
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

      <div className="col-span-7 md-tablet:col-span-8">{children}</div>

      <div className="col-span-4 flex flex-col items-end gap-1 text-right md-tablet:col-span-3 mobile:items-start mobile:text-left">
        {meta}
      </div>
    </Reveal>
  )
}

export function Bullets({ items }) {
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
