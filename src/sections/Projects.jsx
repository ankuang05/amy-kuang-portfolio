import SectionShell, { Bullets, EntryRow, Meta } from '../components/SectionShell'
import { projects } from '../data/resume'

/**
 * One picture and its caption.
 *
 * Every frame is the same 4:3 box, so figures sharing a row are the same size
 * whatever their contents. That shape is the poster's own, which is why
 * `contain` fills it edge to edge here rather than letterboxing — the setting
 * is kept as insurance, so a poster is never cropped if its proportions turn
 * out not to match. Only a `cover` figure grows on hover; there is nothing to
 * reveal inside a picture that is already whole.
 */
function Figure({ figure }) {
  const { src, alt, caption, fit = 'cover', href } = figure
  const contain = fit === 'contain'

  const frame = (
    <div className="aspect-[4/3] w-full overflow-hidden border border-white/12 bg-white/[0.04]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          contain ? 'object-contain' : 'object-cover group-hover:scale-[1.04]'
        }`}
      />
    </div>
  )

  return (
    <figure className="group">
      {href ? (
        <a href={href} target="_blank" rel="noreferrer noopener" className="block">
          {frame}
        </a>
      ) : (
        frame
      )}
      {caption ? (
        <figcaption className="mt-3 text-[10px] font-medium uppercase leading-3 tracking-[-0.1px] opacity-60">
          {caption}
          {href ? <span aria-hidden="true"> ↗</span> : null}
        </figcaption>
      ) : null}
    </figure>
  )
}

/**
 * Project artwork. Until a file is dropped into `public/projects/` and wired up
 * in `resume.js`, this draws a numbered plate — a deliberate placeholder rather
 * than a gap, so the layout is already the right shape when the picture lands.
 *
 * One figure is held to the width a single picture wants; a pair opens up to
 * the full column so neither half ends up a stamp.
 *
 * The pair splits on the space actually there rather than on the viewport —
 * under the `mobile` breakpoint this row is still 754px wide at an 800px
 * window, room enough for two, so a viewport rule would stack pictures that sit
 * side by side comfortably. `auto-fit` keeps them paired down to ~540px and
 * drops to a stack only on a phone, and any third figure wraps by itself.
 */
function Media({ figures, index }) {
  if (!figures?.length) {
    return (
      <div className="mt-7 flex aspect-[16/9] w-full max-w-[560px] items-end border border-white/12 bg-white/[0.04] p-5">
        <span
          aria-hidden="true"
          className="text-[clamp(44px,7vw,76px)] font-medium leading-[0.8] tracking-[-0.04em] text-white/12"
        >
          {index}
        </span>
      </div>
    )
  }

  const single = figures.length === 1

  return (
    <div
      className={`mt-7 grid gap-5 ${
        single
          ? 'max-w-[560px] grid-cols-1'
          : 'grid-cols-[repeat(auto-fit,minmax(260px,1fr))]'
      }`}
    >
      {figures.map((figure) => (
        <Figure key={figure.src} figure={figure} />
      ))}
    </div>
  )
}

/**
 * A longer note in Amy's own voice, under the bullets. Set narrower than the
 * column: prose wants a shorter measure than a bulleted line does.
 */
function Summary({ paragraphs }) {
  if (!paragraphs?.length) return null

  return (
    <div className="mt-7 flex max-w-[620px] flex-col gap-4">
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className="text-sm font-normal leading-6 tracking-[-0.14px] opacity-75"
        >
          {text}
        </p>
      ))}
    </div>
  )
}

function Links({ items }) {
  if (!items?.length) return null

  return (
    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
      {items.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="nav-link-underline inline-flex items-baseline gap-1.5 text-xs font-medium uppercase leading-4 tracking-[-0.12px]"
          >
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Projects({ onNavigate }) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Selected work"
      onNavigate={onNavigate}
      kicker="A folder of things I've worked on, some for school and some on my own."
    >
      <div className="border-b border-white/15">
        {projects.map((project, i) => {
          const index = String(i + 1).padStart(2, '0')

          return (
            <EntryRow
              key={project.title}
              index={index}
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

              <Media figures={project.figures} index={index} />

              <Bullets items={project.bullets} />
              <Summary paragraphs={project.summary} />
              <Links items={project.links} />
            </EntryRow>
          )
        })}
      </div>
    </SectionShell>
  )
}
