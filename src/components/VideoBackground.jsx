import { useEffect, useState } from 'react'
import { VIDEOS } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const withAdded = (set, value) => (set.has(value) ? set : new Set(set).add(value))

/** Start buffering the next clip once the current one is this far through. */
const PREFETCH_AT = 0.4

/**
 * Three looping clips stacked with an opacity crossfade.
 *
 * Only the first clip is given a src on load. When cycling, the next clip is
 * attached partway through the current one so it is buffered by the time it is
 * needed; otherwise a clip is attached the first time someone selects it. A
 * newly attached clip is not faded in until it reports `canplay`, which keeps
 * the previous one on screen instead of flashing black.
 */
export default function VideoBackground({
  activeIndex,
  onCycle,
  autoCycle = false,
  overlay = 'bg-black/10',
  scrim = false,
  blur = false,
}) {
  const [attached, setAttached] = useState(() => new Set([0]))
  const [ready, setReady] = useState(() => new Set())
  const [shown, setShown] = useState(0)

  // An abrupt scene change is motion; honour the same preference the CSS does.
  const reducedMotion = usePrefersReducedMotion()
  const cycling = autoCycle && !reducedMotion

  useEffect(() => {
    setAttached((prev) => withAdded(prev, activeIndex))
  }, [activeIndex])

  useEffect(() => {
    if (ready.has(activeIndex)) setShown(activeIndex)
  }, [activeIndex, ready])

  const prefetchNext = (i, el) => {
    if (!cycling || i !== shown || !el.duration) return
    if (el.currentTime / el.duration < PREFETCH_AT) return
    setAttached((prev) => withAdded(prev, (i + 1) % VIDEOS.length))
  }

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {VIDEOS.map((src, i) => (
        <video
          key={i}
          src={attached.has(i) ? src : undefined}
          autoPlay
          muted
          playsInline
          // While cycling, a clip must be allowed to end so it can hand over.
          loop={!cycling}
          preload={i === 0 ? 'auto' : 'none'}
          aria-hidden="true"
          onCanPlay={() => setReady((prev) => withAdded(prev, i))}
          onTimeUpdate={(e) => prefetchNext(i, e.currentTarget)}
          onEnded={() => {
            if (cycling && i === shown) onCycle?.()
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,filter,transform] duration-[1200ms] ease-in-out ${
            i === shown ? 'opacity-100' : 'opacity-0'
          } ${blur ? 'scale-110 blur-[10px]' : 'scale-100 blur-0'}`}
        />
      ))}

      <div className={`absolute inset-0 z-[1] ${overlay}`} />

      {/* Keeps white type legible over bright footage without flattening it */}
      {scrim ? (
        <>
          <div className="absolute inset-x-0 top-0 z-[1] h-[240px] bg-gradient-to-b from-black/80 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-[1] h-[64%] bg-gradient-to-t from-black/92 via-black/50 to-transparent" />
        </>
      ) : null}
    </div>
  )
}
