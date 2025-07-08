import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import LiveMonitoring from './components/Monitoring/LiveMonitoring';
import ExamInterface from './components/Exams/ExamInterface';
import DSAProblems from './components/DSA/DSAProblems';
import CPPEditor from './components/CPP/CPPEditor';

const MainApp = () => {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto"></div>
          <p className="mt-6 text-gray-700 text-lg">Loading ProctorAI...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return user.role === 'admin' ? <AdminDashboard /> : <StudentDashboard />;
      case 'monitoring':
        return <LiveMonitoring />;
      case 'exams':
        return user.role === 'student' ? <ExamInterface /> : <AdminDashboard />;
      case 'dsa':
        return <DSAProblems />;
      case 'cpp-editor':
        return <CPPEditor />;
      default:
        return (
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Feature Coming Soon</h1>
            <p className="text-gray-600">This feature is under development and will be available soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-hidden">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;