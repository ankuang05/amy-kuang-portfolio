import { useReveal } from '../hooks/useReveal'

/**
 * variant: 'up' | 'right' | 'fade'
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'fade',
  delay = 0,
  threshold = 0.2,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, visible] = useReveal(threshold)

  return (
    <Tag
      ref={ref}
      className={`reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
