import FadeIn from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';import { Zap, Award, HeadphonesIcon } from 'lucide-react';
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About HCPC</h1>
            <p className="text-xl text-purple-100">
              Your trusted partner in custom PC building
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                HCPC is a team of passionate PC enthusiasts and tech experts dedicated to
                building the perfect computer for every customer. With years of experience
                in custom PC building, we&apos;ve helped gamers, content creators, and professionals
                achieve their dream setups.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to deliver high-performance, reliable systems that exceed
                expectations. We carefully select every component, ensure perfect compatibility,
                and provide expert guidance throughout the entire process.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Quality</h3>
                    <p className="text-gray-600">
                      We use only premium components from trusted brands and
                      ensure every build meets our strict quality standards.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Performance</h3>
                    <p className="text-gray-600">
                      Every system is optimized for maximum performance, with
                      proper cooling, cable management, and BIOS tuning.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Support</h3>
                    <p className="text-gray-600">
                      We provide ongoing support, troubleshooting, and advice
                      to ensure your system performs flawlessly.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Us?
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="text-center">
                <div className="text-purple-600 mb-4 flex justify-center">
                  <Zap size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">
                  Most builds completed within 3-5 business days
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="text-purple-600 mb-4 flex justify-center">
                  <Award size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Builders</h3>
                <p className="text-gray-600">
                  Certified technicians with years of building experience
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="text-purple-600 mb-4 flex justify-center">
                  <HeadphonesIcon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Warranty & Support</h3>
                <p className="text-gray-600">
                  Comprehensive warranty and lifetime technical support
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
