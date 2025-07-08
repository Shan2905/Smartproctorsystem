import React from 'react';
import { Users, FileText, Monitor, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    { title: 'Active Exams', value: '12', change: '+2', icon: FileText, color: 'text-blue-600' },
    { title: 'Total Students', value: '1,247', change: '+15', icon: Users, color: 'text-green-600' },
    { title: 'Live Sessions', value: '34', change: '+8', icon: Monitor, color: 'text-purple-600' },
    { title: 'Violations Detected', value: '7', change: '-3', icon: AlertTriangle, color: 'text-red-600' }
  ];

  const recentExams = [
    { id: 1, name: 'Advanced DSA Assessment', students: 45, status: 'Active', violations: 2 },
    { id: 2, name: 'C++ Fundamentals Quiz', students: 32, status: 'Active', violations: 1 },
    { id: 3, name: 'Algorithm Design Test', students: 28, status: 'Completed', violations: 0 },
    { id: 4, name: 'Data Structures Final', students: 67, status: 'Scheduled', violations: 0 }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Last updated: 2 minutes ago</span>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
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

      {/* Recent Exams */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Exams</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exam Name
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
                <tr key={exam.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{exam.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{exam.students}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
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
    </div>
  );
};

export default AdminDashboard;