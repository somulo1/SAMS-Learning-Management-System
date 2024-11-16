import React from 'react';
import { BookOpen, Calendar, BarChart2, FileText, Folder, Home, MessageSquare, Users } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, current: true },
  { name: 'Courses', icon: BookOpen, current: false },
  { name: 'Calendar', icon: Calendar, current: false },
  { name: 'Messages', icon: MessageSquare, current: false },
  { name: 'Resources', icon: Folder, current: false },
  { name: 'Assignments', icon: FileText, current: false },
  { name: 'Analytics', icon: BarChart2, current: false },
  { name: 'Community', icon: Users, current: false },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-blue-600 pt-5 pb-4 overflow-y-auto">
          <div className="flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`${
                    item.current
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-700'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <item.icon
                    className="mr-3 h-6 w-6 text-blue-200"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}