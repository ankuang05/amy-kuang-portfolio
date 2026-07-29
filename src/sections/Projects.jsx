import SectionShell, { Bullets, EntryRow, Meta } from '../components/SectionShell'
import { projects } from '../data/resume'

export default function Projects({ onNavigate }) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Selected work"
      onNavigate={onNavigate}
      kicker="Research and design work spanning directed energy deposition, multiphase CFD, structural optimization, and closed-loop control."
    >
      <div className="border-b border-white/15">
        {projects.map((project, i) => (
          <EntryRow
            key={project.title}
            index={String(i + 1).padStart(2, '0')}
            delay={i * 0.04}
            meta={
              <>
                <Meta>{project.period}</Meta>
                {project.location ? <Meta>{project.location}</Meta> : null}
                <ul className="mt-3 flex flex-wrap justify-end gap-2 mobile:justify-start">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-white/25 px-2.5 py-1 text-[10px] font-medium uppercase leading-3 tracking-[-0.1px] opacity-80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </>
            }
          >
            <h2 className="max-w-[620px] text-[34px] font-medium uppercase leading-[96%] tracking-[-1.3px] md-tablet:text-[28px] mobile:text-[24px] mobile:tracking-[-0.8px]">
              {project.title}
            </h2>
            <p className="mt-4 text-sm font-medium leading-5 tracking-[-0.14px] opacity-70">
              {project.context}
            </p>
            {project.sponsor ? (
              <p className="mt-1 text-xs font-medium leading-4 tracking-[-0.12px] opacity-50">
                {project.sponsor}
              </p>
            ) : null}
            <Bullets items={project.bullets} />
          </EntryRow>
        ))}
      </div>
    </SectionShell>
  )
}
