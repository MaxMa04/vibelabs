export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold text-[#1A1A2E] mb-6 leading-tight">
            VibeLabs
          </h1>
          <p className="text-xl md:text-2xl text-[#4A4A68] max-w-3xl mx-auto mb-10 leading-relaxed">
            Building the future of AI-driven products. We create innovative solutions
            that empower businesses to scale and thrive — completely self-built, 
            self-distributed, and self-marketed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="#team"
              className="px-8 py-4 bg-white text-[#1A1A2E] rounded-full font-semibold border border-[#E8E8EC] hover:border-[#4A4A68] transition"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white" id="values">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A2E] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[#4A4A68] max-w-2xl mx-auto">
              What drives us forward every day
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F8F8FA] border border-[#E8E8EC]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">Innovation</h3>
              <p className="text-[#4A4A68] leading-relaxed">
                Pushing boundaries with cutting-edge AI technology. We build what others think is impossible.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#F8F8FA] border border-[#E8E8EC]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">Autonomy</h3>
              <p className="text-[#4A4A68] leading-relaxed">
                AI agents as core team members. Full autonomy to execute tasks and drive results.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#F8F8FA] border border-[#E8E8EC]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">Quality</h3>
              <p className="text-[#4A4A68] leading-relaxed">
                Ship fast, but never sloppy. Clean code, tested features, production-ready deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-[#F8F8FA]" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A2E] mb-4">
              The Team
            </h2>
            <p className="text-lg text-[#4A4A68] max-w-2xl mx-auto">
              Meet the AI agents that make VibeLabs happen
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Clawdius */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E8EC]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2 text-center">Clawdius</h3>
              <p className="text-sm text-[#4A4A68] text-center mb-3">Strategy & Accountability</p>
              <p className="text-[#4A4A68] text-center leading-relaxed">
                Weekly planning, reviews, and keeping everyone on track. The strategic mind behind VibeLabs.
              </p>
            </div>

            {/* Alfred */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E8EC]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2 text-center">Alfred</h3>
              <p className="text-sm text-[#4A4A68] text-center mb-3">Emails & Tasks</p>
              <p className="text-[#4A4A68] text-center leading-relaxed">
                Sorting emails, creating tasks, and ensuring accountability across the agent team.
              </p>
            </div>

            {/* Byte */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E8EC]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">B</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2 text-center">Byte</h3>
              <p className="text-sm text-[#4A4A68] text-center mb-3">Developer</p>
              <p className="text-[#4A4A68] text-center leading-relaxed">
                Coding features, bug fixes, APIs, and deployments. Ship fast, quality-focused.
              </p>
            </div>

            {/* Echo */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E8EC]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2 text-center">Echo</h3>
              <p className="text-sm text-[#4A4A68] text-center mb-3">Marketing</p>
              <p className="text-[#4A4A68] text-center leading-relaxed">
                Organic TikTok, SEO, and paid ads. Getting the word out about VibeLabs products.
              </p>
            </div>

            {/* Sage */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E8EC]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2 text-center">Sage</h3>
              <p className="text-sm text-[#4A4A68] text-center mb-3">Deep Research</p>
              <p className="text-[#4A4A68] text-center leading-relaxed">
                Comprehensive research, article analysis, and market insights.
              </p>
            </div>

            {/* Hunter */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E8EC]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">H</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2 text-center">Hunter</h3>
              <p className="text-sm text-[#4A4A68] text-center mb-3">Outbound</p>
              <p className="text-[#4A4A68] text-center leading-relaxed">
                Finding opportunities and reaching out to potential partners and customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A2E] mb-8 text-center">
            About VibeLabs
          </h2>
          <div className="prose prose-lg mx-auto text-[#4A4A68]">
            <p className="leading-relaxed mb-6">
              VibeLabs is a company where AI agents take on real tasks and work as integral parts of the team. 
              Through strict documentation, continuous self-improvement, and seamless collaboration between 
              humans and agents, we're creating a new way of running businesses.
            </p>
            <p className="leading-relaxed mb-6">
              Our goal: Scale to €100,000 monthly revenue through digital products, apps, and SaaS — 
              completely self-built, self-distributed, and self-marketed. We're building a system of agents 
              and our own tools that perfectly match our workflow, enabling us to cover the entire process 
              from development to marketing to sales.
            </p>
            <p className="leading-relaxed">
              Products under VibeLabs include Floowify, DAZE, BulkUp, Featurama, SoulSketch, Recipe, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
