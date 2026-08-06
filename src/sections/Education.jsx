import SectionShell, { EntryRow, Meta } from '../components/SectionShell'
import { education } from '../data/resume'

export default function Education({ onNavigate }) {
  return (
    <SectionShell
      id="education"
      eyebrow="Degrees"
      onNavigate={onNavigate}
      kicker="A mechanical engineering foundation focused on manufacturing, now specialising in autonomous and intelligent machines at the graduate level."
    >
      <div className="border-b border-white/15">
        {education.map((school, i) => (
          <EntryRow
            key={school.school}
            index={String(i + 1).padStart(2, '0')}
            delay={i * 0.05}
            meta={
              <>
                <Meta>{school.period}</Meta>
                <Meta>{school.location}</Meta>
              </>
            }
          >
            <h2 className="text-[40px] font-medium uppercase leading-[92%] tracking-[-1.6px] md-tablet:text-[32px] mobile:text-[28px] mobile:tracking-[-1px]">
              {school.school}
            </h2>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] opacity-80">
              {school.degree}
            </p>

            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
              {school.details.map((detail) => (
                <div key={detail.label} className="flex flex-col gap-1">
                  <dt className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] opacity-60">
                    {detail.label}
                  </dt>
                  <dd className="text-sm font-medium leading-5 tracking-[-0.14px]">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </EntryRow>
        ))}
      </div>
    </SectionShell>
  )
}
