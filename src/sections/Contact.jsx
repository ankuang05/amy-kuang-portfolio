import SectionShell from '../components/SectionShell'
import Reveal from '../components/Reveal'
import { profile } from '../data/resume'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  {
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
  },
  { label: 'Based in', value: profile.location, href: null },
]

export default function Contact({ onNavigate }) {
  return (
    <SectionShell id="contact" eyebrow="Get in touch" onNavigate={onNavigate}>
      <div className="grid grid-cols-12 gap-8 border-y border-white/15 py-12 md-tablet:gap-5 mobile:flex mobile:flex-col mobile:gap-8 mobile:py-10">
        <div className="col-span-7 md-tablet:col-span-8">
          <Reveal variant="up" className="flex items-center gap-5 mobile:gap-4">
            <img
              src={profile.photo}
              alt={`${profile.firstName} ${profile.lastName}`}
              width="112"
              height="112"
              className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-white/25 mobile:h-20 mobile:w-20"
            />
            <div>
              <p className="text-lg font-medium uppercase leading-5 tracking-[-0.5px]">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="mt-2 text-xs font-medium uppercase leading-4 tracking-[-0.12px] opacity-65">
                {profile.title}
              </p>
              <p className="mt-1 flex items-center gap-2 text-xs font-medium uppercase leading-4 tracking-[-0.12px] opacity-50">
                <span
                  className="dot-pulse block h-[6px] w-[6px] shrink-0 rounded-full"
                  style={{
                    background: 'var(--accent)',
                    boxShadow: '0 0 10px 2px var(--accent)',
                  }}
                  aria-hidden="true"
                />
                {profile.availability}
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.06} className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="fill-button border border-white px-6 py-3 text-xs font-medium lowercase leading-4 tracking-[-0.12px]"
            >
              send an email
            </a>
            <a
              href="/Amy-Kuang-Resume.pdf"
              download
              className="fill-button border border-white/40 px-6 py-3 text-xs font-medium lowercase leading-4 tracking-[-0.12px]"
            >
              download résumé
            </a>
          </Reveal>
        </div>

        <div className="col-span-5 md-tablet:col-span-4">
          <ul className="flex flex-col">
            {channels.map((channel, i) => (
              <Reveal
                as="li"
                key={channel.label}
                variant="right"
                delay={i * 0.06}
                className="flex items-baseline justify-between gap-6 border-b border-white/15 py-4 first:border-t"
              >
                <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] opacity-60">
                  {channel.label}
                </span>
                {channel.href ? (
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                    className="nav-link-underline text-sm font-medium leading-5 tracking-[-0.14px]"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium leading-5 tracking-[-0.14px]">
                    {channel.value}
                  </span>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
