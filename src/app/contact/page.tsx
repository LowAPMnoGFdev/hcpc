'use client';

import FadeIn from '@/components/FadeIn';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-purple-100">
              Let&apos;s discuss your custom PC build or tech needs
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12">
          {/* Contact Information */}
          <FadeIn direction="up">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@yourservices.com</p>
                    <p className="text-gray-600">support@yourservices.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">(555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Business Street</p>
                    <p className="text-gray-600">Suite 100</p>
                    <p className="text-gray-600">City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              </div>

              <div className="bg-purple-600 text-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Ready to Build Your Dream PC?</h3>
                <p className="mb-4">
                  Contact us today for a free consultation and get a custom quote for your
                  perfect build!
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
