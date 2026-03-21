const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#values', label: 'Values' },
];

const legalLinks = [
  { href: '#', label: 'Imprint' },
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Terms' },
];

const socialLinks = [
  { href: 'https://github.com/MaxMa04/vibelabs', label: 'GitHub' },
  { href: 'https://github.com/MaxMa04', label: 'Founder' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#2EC4B6] text-sm font-semibold text-white">
                VL
              </span>
              <span className="text-lg font-semibold tracking-[-0.02em]">VibeLabs</span>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/70">
              A modern indie app company building digital products with autonomous agents.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
              Social
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-white"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/55">
          © 2026 VibeLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
