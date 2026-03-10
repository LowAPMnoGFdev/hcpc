import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import BuildsCarousel from '@/components/BuildsCarousel';
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-20" style={{ backgroundColor: '#A799B7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom PC Building & Tech Solutions
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                High-performance gaming rigs, workstations, and upgrades tailored to you
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition"
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sample Builds Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sample Builds
              </h2>
              <p className="text-lg text-gray-600">
                Explore our latest custom PC builds
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <BuildsCarousel />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rgb-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Ready to Build Your Dream PC?
            </h2>
            <p className="text-xl mb-8 text-white/90 drop-shadow">
              Let&apos;s create the perfect system for your needs
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block shadow-lg"
            >
              Contact Us Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
