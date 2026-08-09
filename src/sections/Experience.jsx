import SectionShell, { Bullets, EntryRow, Meta } from '../components/SectionShell'
import { experience } from '../data/resume'

/**
 * A role's quantified results, read as one row under its own bullets — each
 * number next to the work that produced it, with its caption beneath.
 *
 * The columns follow the space actually available rather than the viewport:
 * under the `mobile` breakpoint this row is full-width (756px at an 800px
 * window), so a viewport rule would stack three figures that comfortably fit
 * side by side. `auto-fit` keeps all three on one line wherever they fit —
 * down to ~500px, which covers the narrowest tablet column at ~159px each —
 * and only drops one down on a phone.
 */
function Results({ items }) {
  return (
    <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 md-tablet:gap-4 mobile:gap-5">
      {items.map((metric) => (
        <li key={metric.value} className="border-t border-white/15 pt-4">
          <p className="flex items-baseline gap-2">
            <span className="text-[clamp(22px,2.2vw,28px)] font-medium leading-[0.9] tracking-[-0.035em]">
              {metric.value}
            </span>
            <span className="text-[10px] font-medium uppercase leading-3 tracking-[-0.1px] opacity-55">
              {metric.unit}
            </span>
          </p>
          <p className="mt-2 text-[10px] font-medium leading-3 tracking-[-0.1px] opacity-65">
            {metric.label}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  // No kicker: the roles speak for themselves. SectionShell drops the column
  // entirely when one isn't given.
  return (
    <SectionShell id="experience" eyebrow="Internships">
      <div className="border-b border-white/15">
        {experience.map((job, i) => (
          <EntryRow
            key={job.company}
            index={String(i + 1).padStart(2, '0')}
            delay={i * 0.05}
            meta={
              <>
                {job.period ? <Meta>{job.period}</Meta> : null}
                <Meta>{job.location}</Meta>
                {job.current ? (
                  <span className="mt-2 flex items-center gap-2">
                    <span
                      className="dot-pulse block h-[6px] w-[6px] rounded-full"
                      style={{
                        background: 'var(--accent)',
                        boxShadow: '0 0 10px 2px var(--accent)',
                      }}
                      aria-hidden="true"
                    />
                    <span className="text-[10px] font-medium uppercase leading-3 tracking-[-0.1px]">
                      Current
                    </span>
                  </span>
                ) : null}
              </>
            }
          >
            <h3 className="text-[40px] font-medium uppercase leading-[92%] tracking-[-1.6px] md-tablet:text-[32px] mobile:text-[28px] mobile:tracking-[-1px]">
              {job.role}
            </h3>
            <p className="mt-3 text-sm font-medium uppercase leading-4 tracking-[-0.14px] opacity-60">
              {job.company}
            </p>
            <Bullets items={job.bullets} />
            {job.metrics?.length ? <Results items={job.metrics} /> : null}
          </EntryRow>
        ))}
      </div>
    </SectionShell>
  )
}
