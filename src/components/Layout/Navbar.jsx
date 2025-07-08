import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Shield, User, Bell, Code } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="w-8 h-8 text-blue-600" />
                <Code className="w-4 h-4 text-purple-600 absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">ProctorAI</span>
                <div className="text-xs text-gray-500">C++ & DSA Platform</div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                {user?.avatar && (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">{user?.name}</div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {user?.role}
                  </div>
                </div>
              </div>
              
              <button
                onClick={logout}
                className="p-2 rounded-full hover:bg-red-50 transition-colors group"
                title="Logout"
              >
                <LogOut className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;