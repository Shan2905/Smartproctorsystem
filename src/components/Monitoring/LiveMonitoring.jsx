import React, { useState } from 'react';
import { Camera, AlertTriangle, Eye, EyeOff, Users, Activity, Code, Brain, Monitor } from 'lucide-react';

const LiveMonitoring = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const activeStudents = [
    {
      id: '1',
      name: 'Alice Chen',
      exam: 'C++ Advanced Assessment',
      examType: 'C++',
      timeRemaining: '1h 23m',
      violations: 0,
      status: 'normal',
      faceDetected: true,
      tabSwitches: 0,
      currentQuestion: 3,
      totalQuestions: 8,
      codeSubmissions: 2,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Bob Kumar',
      exam: 'Binary Trees & Graphs',
      examType: 'DSA',
      timeRemaining: '1h 15m',
      violations: 2,
      status: 'warning',
      faceDetected: false,
      tabSwitches: 3,
      currentQuestion: 2,
      totalQuestions: 6,
      codeSubmissions: 1,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Carol Smith',
      exam: 'Dynamic Programming',
      examType: 'DSA',
      timeRemaining: '45m',
      violations: 0,
      status: 'normal',
      faceDetected: true,
      tabSwitches: 0,
      currentQuestion: 5,
      totalQuestions: 7,
      codeSubmissions: 4,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: '4',
      name: 'David Wilson',
      exam: 'C++ STL & Algorithms',
      examType: 'C++',
      timeRemaining: '58m',
      violations: 1,
      status: 'attention',
      faceDetected: true,
      tabSwitches: 1,
      currentQuestion: 4,
      totalQuestions: 10,
      codeSubmissions: 3,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=50&h=50&fit=crop&crop=face'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'normal': return 'bg-green-100 text-green-800 border-green-200';
      case 'warning': return 'bg-red-100 text-red-800 border-red-200';
      case 'attention': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getExamTypeColor = (type) => {
    return type === 'C++' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Monitoring</h1>
          <p className="text-gray-600 mt-1">Real-time proctoring for C++ & DSA assessments</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-green-500 animate-pulse" />
            <span className="text-sm text-gray-600">Live</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">{activeStudents.length} Active Sessions</span>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Students</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{activeStudents.length}</p>
            </div>
            <Monitor className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">C++ Exams</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {activeStudents.filter(s => s.examType === 'C++').length}
              </p>
            </div>
            <Code className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">DSA Exams</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {activeStudents.filter(s => s.examType === 'DSA').length}
              </p>
            </div>
            <Brain className="w-10 h-10 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Violations</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {activeStudents.reduce((sum, s) => sum + s.violations, 0)}
              </p>
            </div>
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
        </div>
      </div>

      {/* Student Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {activeStudents.map((student) => (
          <div
            key={student.id}
            className={`bg-white rounded-2xl shadow-sm border-2 cursor-pointer transition-all hover:shadow-lg ${
              selectedStudent === student.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
            }`}
            onClick={() => setSelectedStudent(student.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src={student.avatar} 
                    alt={student.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{student.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getExamTypeColor(student.examType)}`}>
                        {student.examType}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Camera Feed Simulation */}
              <div className="bg-gray-900 rounded-xl aspect-video mb-4 flex items-center justify-center relative overflow-hidden">
                <Camera className="w-12 h-12 text-gray-400" />
                {student.faceDetected && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                )}
                {!student.faceDetected && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Exam:</span>
                  <span className="font-medium text-right">{student.exam}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress:</span>
                  <span className="font-medium">{student.currentQuestion}/{student.totalQuestions}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Time Left:</span>
                  <span className="font-medium font-mono">{student.timeRemaining}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Face Detection:</span>
                  <div className="flex items-center space-x-1">
                    {student.faceDetected ? (
                      <Eye className="w-4 h-4 text-green-500" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-red-500" />
                    )}
                    <span className={student.faceDetected ? 'text-green-600' : 'text-red-600'}>
                      {student.faceDetected ? 'Active' : 'Lost'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Code Submissions:</span>
                  <span className="font-medium">{student.codeSubmissions}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tab Switches:</span>
                  <span className={`font-medium ${student.tabSwitches > 2 ? 'text-red-600' : 'text-gray-900'}`}>
                    {student.tabSwitches}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Violations:</span>
                  <div className="flex items-center space-x-1">
                    {student.violations > 0 && (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`font-medium ${student.violations > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {student.violations}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed View */}
      {selectedStudent && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Detailed Monitoring</h2>
            <p className="text-sm text-gray-500">
              {activeStudents.find(s => s.id === selectedStudent)?.name} - 
              {activeStudents.find(s => s.id === selectedStudent)?.exam}
            </p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Live Camera Feed</h3>
                <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center relative">
                  <Camera className="w-20 h-20 text-gray-400" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">LIVE</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Activity Timeline</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Code className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="text-blue-800 font-medium">12:45 PM</span>
                      <span className="text-blue-700"> - Code submitted for Question 3</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="text-yellow-800 font-medium">12:42 PM</span>
                      <span className="text-yellow-700"> - Tab switch detected</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <Eye className="w-4 h-4 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="text-green-800 font-medium">12:40 PM</span>
                      <span className="text-green-700"> - Face detection resumed</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Brain className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="text-blue-800 font-medium">12:38 PM</span>
                      <span className="text-blue-700"> - Started Question 3 (Binary Search)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <Code className="w-4 h-4 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="text-green-800 font-medium">12:35 PM</span>
                      <span className="text-green-700"> - Question 2 completed successfully</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveMonitoring;