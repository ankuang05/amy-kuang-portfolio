import { useEffect, useState } from 'react'
import { VIDEOS } from '../data/resume'

const withAdded = (set, value) => (set.has(value) ? set : new Set(set).add(value))

/**
 * Three looping clips stacked with an opacity crossfade.
 *
 * Only the first clip is given a src on load; the others are attached the first
 * time someone selects them, so a visit costs one streaming video rather than
 * all three up front. A newly attached clip is not faded in until it reports
 * `canplay`, which keeps the previous one on screen instead of flashing black.
 */
export default function VideoBackground({
  activeIndex,
  overlay = 'bg-black/10',
  scrim = false,
  blur = false,
}) {
  const [attached, setAttached] = useState(() => new Set([0]))
  const [ready, setReady] = useState(() => new Set())
  const [shown, setShown] = useState(0)

  useEffect(() => {
    setAttached((prev) => withAdded(prev, activeIndex))
  }, [activeIndex])

  useEffect(() => {
    if (ready.has(activeIndex)) setShown(activeIndex)
  }, [activeIndex, ready])

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {VIDEOS.map((src, i) => (
        <video
          key={i}
          src={attached.has(i) ? src : undefined}
          autoPlay
          muted
          loop
          playsInline
          preload={i === 0 ? 'auto' : 'none'}
          aria-hidden="true"
          onCanPlay={() => setReady((prev) => withAdded(prev, i))}
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
