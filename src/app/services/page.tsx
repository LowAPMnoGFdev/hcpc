import ServiceCard from '@/components/ServiceCard';
import FadeIn from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';
import { Gamepad2, MonitorSpeaker, Building2, ArrowUpCircle, Wrench, Droplet, Monitor, MessageCircle, Palette } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Gamepad2,
      title: 'Gaming PC Builds',
      description: 'High-performance gaming PCs with the latest GPUs, processors, and cooling solutions. Optimized for 1080p, 1440p, or 4K gaming at maximum settings.'
    },
    {
      icon: MonitorSpeaker,
      title: 'Workstation Builds',
      description: 'Professional workstations for 3D rendering, video editing, CAD, programming, and content creation. Optimized for productivity and reliability.'
    },
    {
      icon: Building2,
      title: 'Office PCs',
      description: 'Efficient and reliable office computers for everyday tasks, productivity software, and business applications. Great value for money.'
    },
    {
      icon: ArrowUpCircle,
      title: 'PC Upgrades',
      description: 'Upgrade your existing system with new components. GPU upgrades, RAM expansion, storage additions, and CPU/motherboard replacements.'
    },
    {
      icon: Wrench,
      title: 'Repair & Maintenance',
      description: 'Professional PC repair services, troubleshooting, virus removal, data recovery, and regular maintenance to keep your system running smoothly.'
    },
    {
      icon: Droplet,
      title: 'Custom Water Cooling',
      description: 'Custom water cooling loops and AIO installations for optimal thermal performance and stunning aesthetics. RGB lighting integration available.'
    },
    {
      icon: Monitor,
      title: 'Peripherals Setup',
      description: 'Complete setup with monitors, keyboards, mice, headsets, and other gaming peripherals. Cable management and desk setup included.'
    },
    {
      icon: MessageCircle,
      title: 'PC Consulting',
      description: 'Expert advice on component selection, compatibility, and system configuration. Budget planning and build optimization recommendations.'
    },
    {
      icon: Palette,
      title: 'Custom Aesthetics',
      description: 'Custom PC case modifications, RGB lighting setups, custom paint jobs, and unique builds tailored to your aesthetic preferences.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-purple-100">
              Professional PC building and tech services for every need
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
