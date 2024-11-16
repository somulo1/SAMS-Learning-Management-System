import React from 'react';
import { Users, School, BookOpen, BarChart2, Settings } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const stats = [
  { name: 'Total Users', value: '5,234', icon: Users },
  { name: 'Active Institutions', value: '42', icon: School },
  { name: 'Total Courses', value: '156', icon: BookOpen },
  { name: 'System Health', value: '99.9%', icon: Settings },
];

export default function SuperAdminDashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Super Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back, {user?.name}</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                          <dd className="text-lg font-semibold text-gray-900">{item.value}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}