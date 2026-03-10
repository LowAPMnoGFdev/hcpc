'use client';

import FadeIn from '@/components/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';
import { Users, Package, Settings, BarChart3, MessageSquare, ShoppingCart } from 'lucide-react';

export default function AdminPage() {
  const stats = [
    { label: 'Total Orders', value: '124', icon: ShoppingCart, color: 'bg-blue-500' },
    { label: 'Active Users', value: '89', icon: Users, color: 'bg-green-500' },
    { label: 'Pending Builds', value: '12', icon: Package, color: 'bg-yellow-500' },
    { label: 'Messages', value: '8', icon: MessageSquare, color: 'bg-purple-500' },
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Smith', service: 'Gaming PC Build', status: 'In Progress', date: '2026-03-08' },
    { id: '#12346', customer: 'Sarah Johnson', service: 'PC Upgrade', status: 'Completed', date: '2026-03-07' },
    { id: '#12347', customer: 'Mike Wilson', service: 'Custom Water Cooling', status: 'Pending', date: '2026-03-09' },
    { id: '#12348', customer: 'Emily Brown', service: 'Workstation Build', status: 'In Progress', date: '2026-03-10' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-xl text-purple-100">
              Manage orders, users, and system settings
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Quick Actions */}
        <FadeIn delay={0.3}>
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition">
                <Users className="text-purple-600" size={24} />
                <span className="font-semibold text-gray-900">Manage Users</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition">
                <Package className="text-purple-600" size={24} />
                <span className="font-semibold text-gray-900">View Orders</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition">
                <Settings className="text-purple-600" size={24} />
                <span className="font-semibold text-gray-900">System Settings</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition">
                <BarChart3 className="text-purple-600" size={24} />
                <span className="font-semibold text-gray-900">View Analytics</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition">
                <MessageSquare className="text-purple-600" size={24} />
                <span className="font-semibold text-gray-900">Messages</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition">
                <ShoppingCart className="text-purple-600" size={24} />
                <span className="font-semibold text-gray-900">New Order</span>
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Recent Orders */}
        <FadeIn delay={0.4}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Order ID</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Customer</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Service</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono text-sm">{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4">{order.service}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          order.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{order.date}</td>
                      <td className="py-3 px-4">
                        <button className="text-purple-600 hover:text-purple-800 font-semibold">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
