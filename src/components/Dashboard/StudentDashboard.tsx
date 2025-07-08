import React from 'react';
import { Clock, BookOpen, TrendingUp, Calendar, Play, CheckCircle } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const upcomingExams = [
    {
      id: 1,
      title: 'Advanced DSA Assessment',
      subject: 'Data Structures & Algorithms',
      date: 'Today, 2:00 PM',
      duration: '120 min',
      difficulty: 'Hard',
      status: 'ready'
    },
    {
      id: 2,
      title: 'C++ Fundamentals Quiz',
      subject: 'C++ Programming',
      date: 'Tomorrow, 10:00 AM',
      duration: '90 min',
      difficulty: 'Medium',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Algorithm Design Test',
      subject: 'Algorithms',
      date: 'Dec 15, 3:00 PM',
      duration: '150 min',
      difficulty: 'Hard',
      status: 'pending'
    }
  ];

  const recentResults = [
    { exam: 'Data Structures Midterm', score: 85, maxScore: 100, date: '2 days ago' },
    { exam: 'C++ Basic Concepts', score: 92, maxScore: 100, date: '1 week ago' },
    { exam: 'Algorithm Analysis', score: 78, maxScore: 100, date: '2 weeks ago' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-500">December 12, 2024</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Exams Today</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1</p>
            </div>
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">85%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            </div>
            <CheckCircle className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Exams</h2>
        </div>
        <div className="p-6 space-y-4">
          {upcomingExams.map((exam) => (
            <div key={exam.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{exam.title}</h3>
                  <p className="text-sm text-gray-600">{exam.subject}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{exam.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{exam.duration}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      exam.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                      exam.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {exam.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {exam.status === 'ready' && (
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <Play className="w-4 h-4" />
                      <span>Start Exam</span>
                    </button>
                  )}
                  {exam.status === 'pending' && (
                    <button className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg cursor-not-allowed">
                      <BookOpen className="w-4 h-4" />
                      <span>Pending</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Results */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Results</h2>
        </div>
        <div className="p-6 space-y-4">
          {recentResults.map((result, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div>
                <h3 className="font-medium text-gray-900">{result.exam}</h3>
                <p className="text-sm text-gray-500">{result.date}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  {result.score}/{result.maxScore}
                </p>
                <p className="text-sm text-gray-500">
                  {Math.round((result.score / result.maxScore) * 100)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;