import React from 'react';
import { Clock, BookOpen, TrendingUp, Calendar, Play, CheckCircle, Code, Brain, Trophy } from 'lucide-react';

const StudentDashboard = () => {
  const upcomingExams = [
    {
      id: 1,
      title: 'Advanced C++ STL Assessment',
      subject: 'C++ Programming',
      type: 'C++',
      date: 'Today, 2:00 PM',
      duration: '120 min',
      difficulty: 'Hard',
      status: 'ready',
      topics: ['Vectors', 'Maps', 'Algorithms', 'Iterators']
    },
    {
      id: 2,
      title: 'Binary Trees & Graph Algorithms',
      subject: 'Data Structures & Algorithms',
      type: 'DSA',
      date: 'Tomorrow, 10:00 AM',
      duration: '150 min',
      difficulty: 'Hard',
      status: 'pending',
      topics: ['Binary Trees', 'BFS', 'DFS', 'Shortest Path']
    },
    {
      id: 3,
      title: 'Dynamic Programming Fundamentals',
      subject: 'Algorithms',
      type: 'DSA',
      date: 'Dec 15, 3:00 PM',
      duration: '90 min',
      difficulty: 'Medium',
      status: 'pending',
      topics: ['Memoization', 'Tabulation', 'LCS', 'Knapsack']
    }
  ];

  const recentResults = [
    { exam: 'Object-Oriented Programming', type: 'C++', score: 92, maxScore: 100, date: '2 days ago', grade: 'A' },
    { exam: 'Sorting & Searching Algorithms', type: 'DSA', score: 88, maxScore: 100, date: '1 week ago', grade: 'A-' },
    { exam: 'Pointers & Memory Management', type: 'C++', score: 85, maxScore: 100, date: '2 weeks ago', grade: 'B+' }
  ];

  const achievements = [
    { title: 'C++ Master', description: 'Completed 10 C++ assessments', icon: Code, color: 'text-blue-600' },
    { title: 'Algorithm Expert', description: 'Solved 50 DSA problems', icon: Brain, color: 'text-purple-600' },
    { title: 'Perfect Score', description: 'Achieved 100% in an exam', icon: Trophy, color: 'text-yellow-600' }
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your C++ & DSA learning progress</p>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-500">December 12, 2024</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Exams Today</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">1</p>
            </div>
            <Clock className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">88%</p>
            </div>
            <TrendingUp className="w-10 h-10 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">15</p>
            </div>
            <CheckCircle className="w-10 h-10 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Rank</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">#12</p>
            </div>
            <Trophy className="w-10 h-10 text-yellow-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Exams */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Exams</h2>
          </div>
          <div className="p-6 space-y-4">
            {upcomingExams.map((exam) => (
              <div key={exam.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{exam.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        exam.type === 'C++' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {exam.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{exam.subject}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {exam.topics.map((topic, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4">
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
                      <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                        <Play className="w-4 h-4" />
                        <span>Start Exam</span>
                      </button>
                    )}
                    {exam.status === 'pending' && (
                      <button className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-6 py-3 rounded-xl cursor-not-allowed">
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

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Results */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Recent Results</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-gray-900">{result.exam}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        result.type === 'C++' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {result.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{result.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      {result.score}/{result.maxScore}
                    </p>
                    <p className="text-sm font-medium text-green-600">{result.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Achievements</h2>
            </div>
            <div className="p-6 space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50">
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                    <div>
                      <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;