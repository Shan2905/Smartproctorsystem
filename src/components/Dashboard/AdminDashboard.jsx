import React from 'react';
import { Users, FileText, Monitor, TrendingUp, AlertTriangle, CheckCircle, Code, Brain } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Active C++ Exams', value: '8', change: '+2', icon: Code, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'DSA Assessments', value: '15', change: '+5', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Total Students', value: '1,247', change: '+15', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Live Sessions', value: '34', change: '+8', icon: Monitor, color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  const recentExams = [
    { 
      id: 1, 
      name: 'Advanced C++ STL Assessment', 
      type: 'C++',
      students: 45, 
      status: 'Active', 
      violations: 2,
      difficulty: 'Hard'
    },
    { 
      id: 2, 
      name: 'Binary Trees & BST Quiz', 
      type: 'DSA',
      students: 32, 
      status: 'Active', 
      violations: 1,
      difficulty: 'Medium'
    },
    { 
      id: 3, 
      name: 'Dynamic Programming Test', 
      type: 'DSA',
      students: 28, 
      status: 'Completed', 
      violations: 0,
      difficulty: 'Hard'
    },
    { 
      id: 4, 
      name: 'Object-Oriented Programming Final', 
      type: 'C++',
      students: 67, 
      status: 'Scheduled', 
      violations: 0,
      difficulty: 'Medium'
    }
  ];

  const topPerformers = [
    { name: 'Alice Chen', score: 98, subject: 'C++ Advanced', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=50&h=50&fit=crop&crop=face' },
    { name: 'Bob Kumar', score: 95, subject: 'Graph Algorithms', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=50&h=50&fit=crop&crop=face' },
    { name: 'Carol Smith', score: 92, subject: 'Dynamic Programming', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=50&h=50&fit=crop&crop=face' }
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">C++ & DSA Proctoring System Overview</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Last updated: 2 minutes ago</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`p-4 rounded-2xl ${stat.bg}`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">from last week</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Exams */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Recent Exams</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exam Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Violations
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentExams.map((exam) => (
                  <tr key={exam.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{exam.name}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            exam.type === 'C++' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                          }`}>
                            {exam.type}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            exam.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                            exam.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {exam.difficulty}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{exam.students}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        exam.status === 'Active' ? 'bg-green-100 text-green-800' :
                        exam.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {exam.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {exam.violations > 0 ? (
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-1" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        )}
                        <span className="text-sm text-gray-900">{exam.violations}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Top Performers</h2>
          </div>
          <div className="p-6 space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="relative">
                  <img 
                    src={performer.avatar} 
                    alt={performer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{performer.name}</div>
                  <div className="text-sm text-gray-500">{performer.subject}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{performer.score}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;