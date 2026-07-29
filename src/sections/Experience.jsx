import SectionShell, { Bullets, EntryRow, Meta } from '../components/SectionShell'
import Reveal from '../components/Reveal'
import { experience, metrics } from '../data/resume'

export default function Experience({ onNavigate }) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Internships"
      onNavigate={onNavigate}
      kicker="Manufacturing and design roles where the work had to hold up on a real production line — changeover time, tolerances, compliance records, and sourcing decisions."
    >
      {/* Results first: the numbers a recruiter is scanning for, before the
          bullets that explain how they were reached. */}
      <ul className="mb-16 grid grid-cols-3 gap-8 md-tablet:gap-6 mobile:mb-12 mobile:grid-cols-1 mobile:gap-8">
        {metrics.map((metric, i) => (
          <Reveal
            as="li"
            key={metric.label}
            variant="up"
            delay={i * 0.08}
            className="border-t border-white/15 pt-5"
          >
            <p className="flex items-baseline gap-2">
              <span className="text-[clamp(34px,4.4vw,54px)] font-medium leading-[0.9] tracking-[-0.035em]">
                {metric.value}
              </span>
              <span className="text-[10px] font-medium uppercase leading-3 tracking-[-0.1px] opacity-55">
                {metric.unit}
              </span>
            </p>
            <p className="mt-3 max-w-[260px] text-xs font-medium leading-4 tracking-[-0.12px] opacity-65">
              {metric.label}
            </p>
          </Reveal>
        ))}
      </ul>

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
            <h2 className="text-[40px] font-medium uppercase leading-[92%] tracking-[-1.6px] md-tablet:text-[32px] mobile:text-[28px] mobile:tracking-[-1px]">
              {job.role}
            </h2>
            <p className="mt-3 text-sm font-medium uppercase leading-4 tracking-[-0.14px] opacity-60">
              {job.company}
            </p>
            <Bullets items={job.bullets} />
          </EntryRow>
        ))}
      </div>
    </SectionShell>
  )
}
