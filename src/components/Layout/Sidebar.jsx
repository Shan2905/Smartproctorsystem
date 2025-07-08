import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Monitor, 
  BarChart3, 
  Settings,
  BookOpen,
  Clock,
  Code,
  Brain,
  Cpu
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', roles: ['admin', 'proctor', 'student'] },
  { icon: FileText, label: 'Exams', id: 'exams', roles: ['admin', 'proctor', 'student'] },
  { icon: Brain, label: 'DSA Problems', id: 'dsa', roles: ['admin', 'proctor', 'student'] },
  { icon: Code, label: 'C++ Editor', id: 'cpp-editor', roles: ['admin', 'proctor', 'student'] },
  { icon: Monitor, label: 'Live Monitoring', id: 'monitoring', roles: ['admin', 'proctor'] },
  { icon: Users, label: 'Students', id: 'students', roles: ['admin', 'proctor'] },
  { icon: BarChart3, label: 'Analytics', id: 'analytics', roles: ['admin', 'proctor'] },
  { icon: BookOpen, label: 'Question Bank', id: 'questions', roles: ['admin', 'proctor'] },
  { icon: Clock, label: 'My Sessions', id: 'sessions', roles: ['student'] },
  { icon: Settings, label: 'Settings', id: 'settings', roles: ['admin', 'proctor', 'student'] }
];

const Sidebar = ({ activeTab, onTabChange }) => {
  const { user } = useAuth();

  const filteredItems = sidebarItems.filter(item => 
    item.roles.includes(user?.role || '')
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white w-64 min-h-screen p-4 shadow-2xl">
      <div className="space-y-2">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:transform hover:scale-102'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-gray-800 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-gray-300">System Status</span>
        </div>
        <div className="space-y-1 text-xs text-gray-400">
          <div className="flex justify-between">
            <span>AI Monitor:</span>
            <span className="text-green-400">Active</span>
          </div>
          <div className="flex justify-between">
            <span>Code Analysis:</span>
            <span className="text-green-400">Online</span>
          </div>
          <div className="flex justify-between">
            <span>Proctoring:</span>
            <span className="text-green-400">Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;