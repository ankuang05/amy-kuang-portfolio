import { sections } from '../data/resume'

export const PANEL_MS = 560
export const STAGGER = 80
export const PHASE_MS = PANEL_MS + STAGGER

/**
 * Two stacked panels wipe up over the page, hold the destination label,
 * then retract upward to reveal the new section.
 */
export default function PageTransition({ phase, target }) {
  const active = phase !== 'idle'
  const covering = phase === 'covering'

  const index = sections.findIndex((s) => s.id === target)
  const label = index >= 0 ? sections[index].label : ''
  const number = index >= 0 ? String(index).padStart(2, '0') : '00'

  const panel = (leadingDelay) => ({
    transform: covering ? 'scaleY(1)' : 'scaleY(0)',
    transformOrigin: covering ? 'bottom' : 'top',
    transition: `transform ${PANEL_MS}ms var(--ease-spring)`,
    transitionDelay: `${covering ? leadingDelay : STAGGER - leadingDelay}ms`,
  })

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50"
      style={{ pointerEvents: active ? 'auto' : 'none' }}
    >
      {/* Dark panels: a full-bleed white/pink wipe was punishing to look at */}
      <div
        className="absolute inset-0"
        style={{ background: '#171717', ...panel(0) }}
      />
      <div
        className="absolute inset-0"
        style={{ background: '#000000', ...panel(STAGGER) }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: covering ? 1 : 0,
          transition: covering
            ? 'opacity 320ms ease-out 260ms'
            : 'opacity 140ms ease-in',
        }}
      >
        <span className="flex items-start gap-3 text-white">
          <span
            className="mt-3 text-xs font-medium uppercase leading-4 tracking-[-0.12px] md-tablet:mt-2 mobile:mt-1.5"
            style={{ color: 'var(--accent)' }}
          >
            {number}
          </span>
          <span
            className="text-[clamp(48px,9vw,120px)] font-medium uppercase leading-[81%] tracking-[-0.04em]"
            style={{
              transform: covering ? 'translateY(0)' : 'translateY(24px)',
              transition: 'transform 520ms var(--ease-spring) 220ms',
              display: 'inline-block',
            }}
          >
            {label}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </span>
      </div>
    </div>
  )
}
