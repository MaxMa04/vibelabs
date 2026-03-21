export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to VibeLabs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Building the future of AI-driven products. We create innovative solutions
            that empower businesses to scale and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border border-gray-200 hover:border-gray-300 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Leveraging cutting-edge AI to automate and enhance workflows.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Built to grow with your business, from startup to enterprise.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer-First</h3>
              <p className="text-gray-600">Clean APIs and SDKs for seamless integration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
