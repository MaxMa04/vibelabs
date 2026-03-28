import Image from 'next/image';

const team = [
  {
    name: 'Clawdius',
    role: 'Orchestrator',
    image: '/team/clawdius.webp',
    bio: 'Koordiniert das Gesamtsystem, setzt Prioritäten und sorgt dafür, dass alles in die richtige Richtung läuft.',
  },
  {
    name: 'Alfred',
    role: 'Admin',
    image: '/team/alfred.webp',
    bio: 'Verwaltet Postfächer, Aufgaben und operative Verantwortlichkeiten — nichts geht verloren.',
  },
  {
    name: 'Byte',
    role: 'Developer',
    image: '/team/byte.webp',
    bio: 'Baut Features, fixt Bugs, liefert APIs und hält die Produktqualität hoch — bei maximalem Tempo.',
  },
  {
    name: 'Echo',
    role: 'Marketing',
    image: '/team/echo.webp',
    bio: 'Verantwortet Positionierung, Content und Growth Loops — damit Produkte sichtbar und überzeugend werden.',
  },
  {
    name: 'Sage',
    role: 'Research',
    image: '/team/sage.webp',
    bio: 'Verwandelt komplexe Fragen in klare Analysen, tiefe Recherchen und umsetzbare Erkenntnisse.',
  },
  {
    name: 'Hunter',
    role: 'Growth',
    image: '/team/hunter.webp',
    bio: 'Identifiziert Chancen, Partnerschaften und Kanäle, um die richtigen Menschen zu erreichen.',
  },
];

const values = [
  {
    title: 'Innovation',
    icon: '⚡',
    description:
      'Wir treiben bessere Produkte, schärfere Systeme und neue Wege voran, AI in Unternehmen zu verankern.',
  },
  {
    title: 'Autonomie',
    icon: '🎯',
    description:
      'Eigenverantwortliche Umsetzung ist unser Kern — schnelles Ownership, klare Verantwortung, echte Ergebnisse.',
  },
  {
    title: 'Qualität',
    icon: '💎',
    description:
      'Wir liefern schnell, aber nicht nachlässig. Starkes Handwerk, Liebe zum Detail und saubere Umsetzung zählen.',
  },
];

const stats = [
  { label: 'Apps im Ökosystem', value: '6+' },
  { label: 'Agenten', value: 'Clawdius · Alfred · Byte · Echo · Sage · Hunter' },
  { label: 'Prinzip', value: 'Autonom, dokumentiert, iterativ' },
];

export default function Home() {
  return (
    <div className="bg-white text-[#1A1A2E]">
      <section className="overflow-hidden bg-gradient-to-b from-[#F8F9FA] to-white px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#E8E8EC] bg-white px-4 py-2 text-sm font-medium text-[#4A4A68] shadow-sm">
              Innovation am Edge der Zeit
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#1A1A2E] md:text-6xl lg:text-7xl">
              Das ist VibeLabs
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4A4A68] md:text-xl">
              Wir zeigen, was heute mit AI möglich ist. Ein System aus autonomen Agents, das komplette Produktwelten baut — ohne klassisches Team, ohne klassische Struktur.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://github.com/MaxMa04/vibelabs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-[#2EC4B6] transition hover:text-[#1A1A2E]"
              >
                Unsere Arbeit ansehen <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[460px]">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#FF6B35]/20 blur-3xl" />
            <div className="absolute bottom-12 left-6 h-56 w-56 rounded-full bg-[#2EC4B6]/20 blur-3xl" />
            <div className="absolute inset-x-6 top-10 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-[#1A1A2E]/8 backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="VibeLabs Logo"
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">VibeLabs System</p>
                  <p className="text-sm text-[#4A4A68]">Strategie, Entwicklung, Research und Growth — aus einer Hand.</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F8F9FA] p-5">
                  <p className="text-sm font-medium text-[#4A4A68]">Umsetzung</p>
                  <p className="mt-2 text-xl font-semibold text-[#1A1A2E]">Schnell, strukturiert, wirkungsvoll</p>
                </div>
                <div className="rounded-2xl bg-[#1A1A2E] p-5 text-white">
                  <p className="text-sm font-medium text-white/70">Fokus</p>
                  <p className="mt-2 text-xl font-semibold">Apps, Tools, Systeme</p>
                </div>
                <div className="rounded-2xl border border-[#E8E8EC] p-5 sm:col-span-2">
                  <p className="text-sm font-medium text-[#4A4A68]">Ansatz</p>
                  <p className="mt-2 text-lg leading-7 text-[#1A1A2E]">
                    Mit Klarheit bauen. Mit Feedback iterieren. Den Qualitätsanspruch hochhalten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="bg-[#F8F9FA] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2EC4B6]">Über VibeLabs</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#1A1A2E] md:text-4xl">
              Ein Experiment in autonomer Entwicklung.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#4A4A68] md:text-lg">
              <p>
                VibeLabs ist ein Experiment: Was ist möglich, wenn AI nicht nur Tool ist, sondern aktiver Teil des Teams?
              </p>
              <p>
                Wir haben ein System aus 6 autonomen Agents gebaut — jeder mit klarer Rolle, jeder verantwortlich für einen Teil des Ganzen. Zusammen entwickeln sie Apps, SDKs und digitale Produkte.
              </p>
              <p>
                Das hier ist kein Consulting-Pitch. Wir zeigen einfach, was geht. Wer Inspiration sucht oder Fragen hat — meldet sich.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2EC4B6]">Das Team</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#1A1A2E] md:text-4xl">
              Die autonomen Agents hinter VibeLabs
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-[1.25rem] border border-[#E8E8EC] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1A1A2E]/8"
              >
                <div className="relative mb-5 h-20 w-20 overflow-hidden rounded-full bg-[#F8F9FA]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1A1A2E]">{member.name}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#FF6B35]">{member.role}</p>
                <p className="mt-4 text-base leading-7 text-[#4A4A68]">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="werte" className="bg-[#1A1A2E] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2EC4B6]">Wofür wir stehen</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Prinzipien, die jedes Produkt prägen, das wir bauen
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

      <section id="kontakt" className="bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Fragen oder Inspiration?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            Wer sehen will, wie AI-gesteuerte Entwicklung in der Praxis aussieht — meldet sich. Kein Pitch, kein Sales. Einfach Austausch.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/MaxMa04/vibelabs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-[#1A1A2E] shadow-lg transition hover:bg-[#F8F9FA]"
            >
              GitHub
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Mehr über uns
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
