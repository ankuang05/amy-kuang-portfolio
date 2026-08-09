import SectionShell, { EntryRow } from '../components/SectionShell'
import { skills } from '../data/resume'

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      kicker="The tools, methods, and working habits behind the projects — from CAD and CFD through to the shop floor."
    >
      <div className="border-b border-white/15">
        {skills.map((group, i) => (
          <EntryRow
            key={group.group}
            index={String(i + 1).padStart(2, '0')}
            delay={i * 0.05}
          >
            <h3 className="text-[40px] font-medium uppercase leading-[92%] tracking-[-1.6px] md-tablet:text-[32px] mobile:text-[28px] mobile:tracking-[-1px]">
              {group.group}
            </h3>

            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-white/20 px-3.5 py-2 text-xs font-medium uppercase leading-4 tracking-[-0.12px] transition-colors duration-300 hover:border-white/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </EntryRow>
        ))}
      </div>
    </SectionShell>
  )
}
