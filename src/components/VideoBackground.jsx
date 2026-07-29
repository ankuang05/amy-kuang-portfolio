import { useEffect, useState } from 'react'
import { VIDEOS } from '../data/resume'

/**
 * Three looping videos stacked with an opacity crossfade.
 * All sources are fetched as blobs up front so switching is instant;
 * any that fail fall back to streaming from the original URL.
 */
export default function VideoBackground({
  activeIndex,
  overlay = 'bg-black/10',
  scrim = false,
  blur = false,
}) {
  const [sources, setSources] = useState(VIDEOS)

  useEffect(() => {
    let cancelled = false
    const created = []

    Promise.all(
      VIDEOS.map(async (url) => {
        try {
          const res = await fetch(url)
          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          const objectUrl = URL.createObjectURL(await res.blob())
          created.push(objectUrl)
          return objectUrl
        } catch {
          return url
        }
      })
    ).then((resolved) => {
      if (cancelled) {
        created.forEach(URL.revokeObjectURL)
        return
      }
      setSources(resolved)
    })

    return () => {
      cancelled = true
      created.forEach(URL.revokeObjectURL)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {sources.map((src, i) => (
        <video
          key={i}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,filter,transform] duration-[1200ms] ease-in-out ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
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
