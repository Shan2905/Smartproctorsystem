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
  Clock
} from 'lucide-react';

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  id: string;
  roles: string[];
}

const sidebarItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', roles: ['admin', 'proctor', 'student'] },
  { icon: FileText, label: 'Exams', id: 'exams', roles: ['admin', 'proctor', 'student'] },
  { icon: Monitor, label: 'Live Monitoring', id: 'monitoring', roles: ['admin', 'proctor'] },
  { icon: Users, label: 'Students', id: 'students', roles: ['admin', 'proctor'] },
  { icon: BarChart3, label: 'Analytics', id: 'analytics', roles: ['admin', 'proctor'] },
  { icon: BookOpen, label: 'Question Bank', id: 'questions', roles: ['admin', 'proctor'] },
  { icon: Clock, label: 'My Sessions', id: 'sessions', roles: ['student'] },
  { icon: Settings, label: 'Settings', id: 'settings', roles: ['admin', 'proctor', 'student'] }
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { user } = useAuth();

  const filteredItems = sidebarItems.filter(item => 
    item.roles.includes(user?.role || '')
  );

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="space-y-2">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;