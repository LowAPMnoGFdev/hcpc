'use client';

import FadeIn from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';
import { User, Package, MessageSquare, Settings, CreditCard, Clock } from 'lucide-react';

export default function MemberPage() {
  const myOrders = [
    { id: '#12345', service: 'Gaming PC Build - RTX 4080', status: 'In Progress', date: '2026-03-08', progress: 65 },
    { id: '#12340', service: 'PC Upgrade - RAM & SSD', status: 'Completed', date: '2026-02-15', progress: 100 },
    { id: '#12338', service: 'Custom Water Cooling Setup', status: 'Completed', date: '2026-01-20', progress: 100 },
  ];

  const memberInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'January 2025',
    totalOrders: 3,
    activeOrders: 1,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Member Dashboard</h1>
            <p className="text-xl text-purple-100">
              Welcome back, {memberInfo.name}!
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn direction="left">
              {/* Profile Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{memberInfo.name}</h3>
                    <p className="text-gray-600 text-sm">Member since {memberInfo.memberSince}</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <p className="text-gray-600"><span className="font-semibold">Email:</span> {memberInfo.email}</p>
                  <p className="text-gray-600"><span className="font-semibold">Total Orders:</span> {memberInfo.totalOrders}</p>
                  <p className="text-gray-600"><span className="font-semibold">Active Orders:</span> {memberInfo.activeOrders}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition text-left">
                    <Package className="text-purple-600" size={20} />
                    <span className="font-semibold text-gray-900">New Order</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition text-left">
                    <MessageSquare className="text-purple-600" size={20} />
                    <span className="font-semibold text-gray-900">Messages</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition text-left">
                    <CreditCard className="text-purple-600" size={20} />
                    <span className="font-semibold text-gray-900">Payment Methods</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition text-left">
                    <Settings className="text-purple-600" size={20} />
                    <span className="font-semibold text-gray-900">Account Settings</span>
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              {/* My Orders */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
                <StaggerContainer className="space-y-4">
                  {myOrders.map((order, index) => (
                    <StaggerItem key={index}>
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-mono text-sm text-gray-600 mb-1">{order.id}</p>
                            <h3 className="text-lg font-semibold text-gray-900">{order.service}</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                              <Clock size={14} />
                              {order.date}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                            order.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        {order.status === 'In Progress' && (
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-semibold text-purple-600">{order.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-purple-600 h-2 rounded-full transition-all"
                                style={{ width: `${order.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        <button className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
                          View Details →
                        </button>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 pb-4 border-b border-gray-200">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-900 font-semibold">Gaming PC Build started</p>
                      <p className="text-sm text-gray-600">Your order #12345 is now in progress</p>
                      <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pb-4 border-b border-gray-200">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-900 font-semibold">Order completed</p>
                      <p className="text-sm text-gray-600">PC Upgrade order #12340 has been completed</p>
                      <p className="text-xs text-gray-500 mt-1">23 days ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-900 font-semibold">New message from support</p>
                      <p className="text-sm text-gray-600">Your question has been answered</p>
                      <p className="text-xs text-gray-500 mt-1">1 month ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
