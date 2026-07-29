import SectionShell, { Bullets, EntryRow, Meta } from '../components/SectionShell'
import { experience } from '../data/resume'

export default function Experience({ onNavigate }) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Internships"
      onNavigate={onNavigate}
      kicker="Manufacturing and design roles where the work had to hold up on a real production line — changeover time, tolerances, compliance records, and sourcing decisions."
    >
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
