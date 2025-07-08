import React, { useState } from 'react';
import { Camera, AlertTriangle, Eye, EyeOff, Users, Activity } from 'lucide-react';

const LiveMonitoring: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const activeStudents = [
    {
      id: '1',
      name: 'Alice Johnson',
      exam: 'Advanced DSA Assessment',
      timeRemaining: '1h 23m',
      violations: 0,
      status: 'normal',
      faceDetected: true,
      tabSwitches: 0
    },
    {
      id: '2',
      name: 'Bob Smith',
      exam: 'Advanced DSA Assessment',
      timeRemaining: '1h 15m',
      violations: 2,
      status: 'warning',
      faceDetected: false,
      tabSwitches: 1
    },
    {
      id: '3',
      name: 'Charlie Brown',
      exam: 'C++ Fundamentals Quiz',
      timeRemaining: '45m',
      violations: 0,
      status: 'normal',
      faceDetected: true,
      tabSwitches: 0
    },
    {
      id: '4',
      name: 'Diana Prince',
      exam: 'Advanced DSA Assessment',
      timeRemaining: '58m',
      violations: 1,
      status: 'attention',
      faceDetected: true,
      tabSwitches: 3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-red-100 text-red-800';
      case 'attention': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Live Monitoring</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Live</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">{activeStudents.length} Active</span>
          </div>
        </div>
      </div>

      {/* Student Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {activeStudents.map((student) => (
          <div
            key={student.id}
            className={`bg-white rounded-xl shadow-sm border-2 cursor-pointer transition-all ${
              selectedStudent === student.id ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => setSelectedStudent(student.id)}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{student.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(student.status)}`}>
                  {student.status}
                </span>
              </div>

              {/* Camera Feed Simulation */}
              <div className="bg-gray-900 rounded-lg aspect-video mb-3 flex items-center justify-center">
                <Camera className="w-12 h-12 text-gray-400" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Exam:</span>
                  <span className="font-medium">{student.exam}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Time Left:</span>
                  <span className="font-medium">{student.timeRemaining}</span>
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
                      {student.faceDetected ? 'Detected' : 'Not Detected'}
                    </span>
                  </div>
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Detailed Monitoring</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Camera Feed</h3>
                <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Activity Log</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  <div className="text-sm p-2 bg-yellow-50 rounded">
                    <span className="text-yellow-800">12:34 PM - Tab switch detected</span>
                  </div>
                  <div className="text-sm p-2 bg-green-50 rounded">
                    <span className="text-green-800">12:32 PM - Face detected</span>
                  </div>
                  <div className="text-sm p-2 bg-blue-50 rounded">
                    <span className="text-blue-800">12:30 PM - Question answered</span>
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