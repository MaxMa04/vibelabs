const team = [
  {
    name: 'Clawdius',
    role: 'Orchestrator & Chief of Staff',
    icon: '🧭',
    bio: 'Koordiniert das Agent-Team, reviewt Output, hält Max accountable. Direkt, denglisch, langfristig denkend.',
  },
  {
    name: 'Alfred',
    role: 'Admin & Operations',
    icon: '📋',
    bio: 'Managt Email, Calendar, Task Planning (Backlog→Planned), und Agent Accountability via Discord-Pings.',
  },
  {
    name: 'Byte',
    role: 'Development',
    icon: '💻',
    bio: 'Baut Features, fixt Bugs, refactort Codebases. Alles was mit Programmieren zu tun hat geht an Byte.',
  },
  {
    name: 'Echo',
    role: 'Marketing & Design',
    icon: '📣',
    bio: 'Zuständig für Visual Identity, Landing Pages, Content-Strategie, und alles was nach außen sichtbar ist.',
  },
  {
    name: 'Sage',
    role: 'Deep Research',
    icon: '🔬',
    bio: 'Führt mehrstufige Research durch, analysiert Märkte, vergleicht Lösungen, und liefert ultra-ausführliche Reports.',
  },
  {
    name: 'Hunter',
    role: 'Growth & Experimentation',
    icon: '🎯',
    bio: 'Testet Channels, optimiert Funnels, und findet neue Wege für User Acquisition.',
  },
];

const values = [
  {
    title: 'Innovation',
    icon: '⚡',
    description:
      'We push boundaries and embrace new technologies. Every product we build challenges the status quo.',
  },
  {
    title: 'Autonomy',
    icon: '🎯',
    description:
      'Self-driven execution. We build products and systems that run independently, empowering users to take control.',
  },
  {
    title: 'Quality',
    icon: '💎',
    description:
      'Attention to detail in everything we ship. No shortcuts, no filler — just solid, well-crafted products.',
  },
];

const stats = [
  { label: 'Apps in the ecosystem', value: '6+' },
  { label: 'Execution modes', value: 'Design · Dev · Research · Growth' },
  { label: 'Operating principle', value: 'Autonomous, documented, iterative' },
];

export default function Home() {
  return (
    <div className="bg-white text-[#1A1A2E]">
      <section className="overflow-hidden bg-gradient-to-b from-[#F8F9FA] to-white px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#E8E8EC] bg-white px-4 py-2 text-sm font-medium text-[#4A4A68] shadow-sm">
              Digital products, built with taste and velocity
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#1A1A2E] md:text-6xl lg:text-7xl">
              Building Digital Experiences That Matter
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4A4A68] md:text-xl">
              VibeLabs creates innovative apps and tools that empower users. We build products that solve real problems — from productivity to wellness, all with a focus on quality and autonomy.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#FF6B35]/20 transition hover:opacity-90"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/MaxMa04/vibelabs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-[#2EC4B6] transition hover:text-[#1A1A2E]"
              >
                See Our Work <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[460px]">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#FF6B35]/20 blur-3xl" />
            <div className="absolute bottom-12 left-6 h-56 w-56 rounded-full bg-[#2EC4B6]/20 blur-3xl" />
            <div className="absolute inset-x-6 top-10 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-[#1A1A2E]/8 backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#2EC4B6] text-sm font-semibold text-white">
                  VL
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">VibeLabs System</p>
                  <p className="text-sm text-[#4A4A68]">Design, development, research, and growth — under one roof.</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F8F9FA] p-5">
                  <p className="text-sm font-medium text-[#4A4A68]">Execution</p>
                  <p className="mt-2 text-xl font-semibold text-[#1A1A2E]">Fast, structured, high-signal</p>
                </div>
                <div className="rounded-2xl bg-[#1A1A2E] p-5 text-white">
                  <p className="text-sm font-medium text-white/70">Focus</p>
                  <p className="mt-2 text-xl font-semibold">Apps, tools, systems</p>
                </div>
                <div className="rounded-2xl border border-[#E8E8EC] p-5 sm:col-span-2">
                  <p className="text-sm font-medium text-[#4A4A68]">Approach</p>
                  <p className="mt-2 text-lg leading-7 text-[#1A1A2E]">
                    Build with clarity. Iterate with feedback. Keep the quality bar high.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#F8F9FA] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2EC4B6]">About VibeLabs</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#1A1A2E] md:text-4xl">
              Digital products that matter.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#4A4A68] md:text-lg">
              <p>
                VibeLabs is an indie app company building digital products that matter. We&apos;re not a typical agency — we&apos;re builders, creators, and problem-solvers.
              </p>
              <p>
                Our mission is to ship high-quality apps that improve people&apos;s daily lives.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#E8E8EC] bg-white p-6 shadow-sm shadow-[#1A1A2E]/5"
              >
                <p className="text-sm font-medium text-[#4A4A68]">{stat.label}</p>
                <p className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.02em] text-[#1A1A2E]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2EC4B6]">Meet the Team</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#1A1A2E] md:text-4xl">
              The autonomous agents behind VibeLabs
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-[1.25rem] border border-[#E8E8EC] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1A1A2E]/8"
              >
                <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F9FA] text-3xl">
                  <span aria-hidden="true">{member.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1A1A2E]">{member.name}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#FF6B35]">{member.role}</p>
                <p className="mt-4 text-base leading-7 text-[#4A4A68]">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="bg-[#1A1A2E] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2EC4B6]">What We Stand For</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Principles that shape every product we build
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-[1.25rem] border border-white/20 bg-white/5 p-7 backdrop-blur-sm">
                <div className="mb-5 text-3xl text-[#2EC4B6]">{value.icon}</div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{value.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/75">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Ready to build something amazing?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            Get in touch with the VibeLabs team.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/MaxMa04/vibelabs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-[#1A1A2E] shadow-lg transition hover:bg-[#F8F9FA]"
            >
              Get in Touch
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
