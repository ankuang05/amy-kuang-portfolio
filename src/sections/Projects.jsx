import SectionShell, { Bullets, EntryRow, Meta } from '../components/SectionShell'
import { projects } from '../data/resume'

/**
 * One picture and its caption. `frame` decides how the picture meets its box:
 *
 *   'ratio'   — a fixed 4:3 box, so figures sharing a row come out the same
 *               size whatever their contents. 4:3 is the poster's own shape,
 *               which is why a `contain` figure fills it edge to edge rather
 *               than letterboxing; the setting is kept as insurance so a poster
 *               is never cropped if its proportions turn out not to match.
 *   'natural' — no box at all; the picture keeps its own proportions. For
 *               diagrams and plots, where a crop would take out an axis or a
 *               colour bar and there is nothing to gain by matching a
 *               neighbour's height.
 *   'fill'    — natural until the collage splits at 640px, then takes the
 *               height of the column beside it and centres the picture inside.
 *               For a column holding one picture against a stack of two.
 *
 * Only a picture that is being cropped anyway grows on hover; there is nothing
 * to reveal inside one that is already whole.
 */
function Figure({ figure, frame = 'ratio', className = '' }) {
  const { src, alt, caption, fit = 'cover', href } = figure
  const contain = frame !== 'ratio' || fit === 'contain'

  const box = (
    <div
      className={`w-full overflow-hidden border border-white/12 bg-white/[0.04] ${
        { ratio: 'aspect-[4/3]', natural: '', fill: 'min-h-0 flex-1' }[frame]
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          { ratio: 'h-full', natural: 'h-auto', fill: 'h-auto sm:h-full' }[frame]
        } ${contain ? 'object-contain' : 'object-cover group-hover:scale-[1.04]'}`}
      />
    </div>
  )

  return (
    <figure className={`group flex flex-col ${className}`}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="flex min-h-0 flex-1 flex-col"
        >
          {box}
        </a>
      ) : (
        box
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
 *
 * `layout: 'collage'` builds two stacked columns instead: the last two pictures
 * on the right, everything before them on the left. It splits at 640px, wide
 * enough that four pictures are still worth looking at and narrow enough to
 * hold through the 800px window `auto-fit` was chosen to survive. Below that
 * they simply stack in order, left column first.
 *
 * Every picture keeps its own proportions — these are CAD views and plots,
 * where a crop takes out a colour bar or an axis. Nothing is forced to a shared
 * height, so the columns are levelled by their widths instead: see
 * `figureColumns` in resume.js, which is tuned to the pictures it sits with. A
 * column holding a single picture takes the other's height and mats it, since
 * width alone cannot always level a lone wide picture against a tall stack
 * without shrinking that stack past reading size.
 */
function Collage({ figures, columns = '1fr 1fr' }) {
  const split = Math.max(1, figures.length - 2)
  const sides = [figures.slice(0, split), figures.slice(split)]

  return (
    <div
      className="mt-7 grid gap-5 sm:grid-cols-[var(--figure-columns)]"
      style={{ '--figure-columns': columns }}
    >
      {sides.map((side, i) => (
        <div key={i} className="flex flex-col gap-5">
          {side.map((figure) => (
            <Figure
              key={figure.src}
              figure={figure}
              frame={side.length === 1 ? 'fill' : 'natural'}
              className={side.length === 1 ? 'flex-1' : ''}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function Media({ figures, index, layout, columns }) {
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

  if (layout === 'collage' && figures.length > 2) {
    return <Collage figures={figures} columns={columns} />
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

              <Media
                figures={project.figures}
                layout={project.figureLayout}
                columns={project.figureColumns}
                index={index}
              />

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
