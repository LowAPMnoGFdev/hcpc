import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import FadeIn from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';import { Gamepad2, MonitorSpeaker, ArrowUpCircle, Wrench, Droplet, MessageCircle } from 'lucide-react';
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
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

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600">
                From gaming beasts to professional workstations
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <ServiceCard
                icon={Gamepad2}
                title="Gaming PCs"
                description="High-performance gaming rigs built for maximum FPS"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                icon={MonitorSpeaker}
                title="Workstations"
                description="Professional workstations for content creation and productivity"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                icon={ArrowUpCircle}
                title="PC Upgrades"
                description="Upgrade your existing PC with the latest components"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                icon={Wrench}
                title="PC Repair"
                description="Expert troubleshooting and repair services"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                icon={Droplet}
                title="Custom Cooling"
                description="Water cooling and advanced thermal solutions"
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                icon={MessageCircle}
                title="Consulting"
                description="Expert advice on components and configurations"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Dream PC?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Let&apos;s create the perfect system for your needs
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition inline-block"
            >
              Contact Us Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
