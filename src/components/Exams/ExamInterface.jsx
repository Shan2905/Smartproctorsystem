import React, { useState, useEffect } from 'react';
import { Clock, Camera, AlertTriangle, Code, Send, Save, Brain, CheckCircle, XCircle } from 'lucide-react';

const ExamInterface = () => {
  const [timeRemaining, setTimeRemaining] = useState(7200); // 2 hours in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [violations, setViolations] = useState(0);

  const questions = [
    {
      id: 1,
      type: 'mcq',
      title: 'C++ Memory Management',
      question: 'Which of the following is the correct way to dynamically allocate memory for an array of 10 integers in C++?',
      options: [
        'int* arr = new int[10];',
        'int* arr = malloc(10 * sizeof(int));',
        'int arr[10] = new int;',
        'int* arr = alloc(10);'
      ],
      marks: 2,
      category: 'C++'
    },
    {
      id: 2,
      type: 'coding',
      title: 'Binary Search Implementation',
      question: 'Implement a binary search function that returns the index of the target element in a sorted array. Return -1 if the element is not found.',
      template: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    // Your implementation here
    int left = 0;
    int right = arr.size() - 1;
    
    // Complete the binary search algorithm
    
    return -1; // Return -1 if not found
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11, 13, 15};
    int target = 7;
    
    int result = binarySearch(arr, target);
    cout << "Index: " << result << endl;
    
    return 0;
}`,
      marks: 15,
      category: 'DSA'
    },
    {
      id: 3,
      type: 'short-answer',
      title: 'Time Complexity Analysis',
      question: 'Analyze the time complexity of the following C++ code snippet and explain your reasoning:\n\nfor (int i = 0; i < n; i++) {\n    for (int j = i; j < n; j++) {\n        cout << arr[i] + arr[j] << " ";\n    }\n}',
      marks: 8,
      category: 'DSA'
    },
    {
      id: 4,
      type: 'coding',
      title: 'Linked List Reversal',
      question: 'Write a C++ function to reverse a singly linked list and return the new head.',
      template: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Your implementation here
        
        return nullptr;
    }
};

// Helper function to print the list
void printList(ListNode* head) {
    while (head) {
        cout << head->val << " -> ";
        head = head->next;
    }
    cout << "NULL" << endl;
}`,
      marks: 12,
      category: 'DSA'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const enableCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraEnabled(true);
    } catch (error) {
      console.error('Camera access denied');
    }
  };

  const runCode = () => {
    // Simulate code execution
    console.log('Running code...');
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">C++ & DSA Assessment</h1>
              <p className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Camera className={`w-5 h-5 ${cameraEnabled ? 'text-green-500' : 'text-red-500'}`} />
                <span className="text-sm text-gray-600">
                  {cameraEnabled ? 'Camera Active' : 'Camera Disabled'}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">Violations: {violations}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-lg font-mono text-gray-900">{formatTime(timeRemaining)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-lg font-semibold text-gray-900">{currentQ.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      currentQ.category === 'C++' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {currentQ.category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{currentQ.marks} marks</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{currentQ.question}</p>
                </div>

                {currentQ.type === 'mcq' && (
                  <div className="space-y-3">
                    {currentQ.options?.map((option, index) => (
                      <label key={index} className="flex items-start space-x-3 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name={`question-${currentQ.id}`}
                          value={option}
                          checked={answers[currentQ.id] === option}
                          onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                          className="w-4 h-4 text-blue-600 mt-1"
                        />
                        <span className="text-gray-700 font-mono text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQ.type === 'coding' && (
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden">
                      <div className="flex items-center justify-between p-4 bg-gray-800">
                        <div className="flex items-center space-x-2">
                          <Code className="w-5 h-5 text-blue-400" />
                          <span className="text-blue-400 font-medium">C++ Code Editor</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={runCode}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                          >
                            Run Code
                          </button>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                            Submit
                          </button>
                        </div>
                      </div>
                      <textarea
                        value={answers[currentQ.id] || currentQ.template}
                        onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                        className="w-full h-80 bg-gray-900 text-green-400 font-mono text-sm p-4 resize-none focus:outline-none code-editor"
                        placeholder="Write your C++ code here..."
                        spellCheck={false}
                      />
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                        <Brain className="w-4 h-4" />
                        <span>Test Results</span>
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">Test case 1: Passed (Expected: 3, Got: 3)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">Test case 2: Passed (Expected: -1, Got: -1)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600">Test case 3: Failed (Expected: 7, Got: -1)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">Test case 4: Running...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentQ.type === 'short-answer' && (
                  <div>
                    <textarea
                      value={answers[currentQ.id] || ''}
                      onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                      className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Type your detailed answer here..."
                    />
                    <div className="mt-2 text-sm text-gray-500">
                      Tip: Include time complexity analysis, space complexity, and reasoning for full marks.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Camera Setup */}
            {!cameraEnabled && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-medium text-gray-900 mb-3">Camera Setup Required</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Camera monitoring is required for this proctored exam. Please enable your camera to continue.
                </p>
                <button
                  onClick={enableCamera}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Enable Camera
                </button>
              </div>
            )}

            {/* Question Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-medium text-gray-900 mb-4">Question Navigation</h3>
              <div className="grid grid-cols-2 gap-2">
                {questions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`h-12 rounded-xl text-sm font-medium transition-all ${
                      index === currentQuestion
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : answers[questions[index].id]
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span>{index + 1}</span>
                      <span className="text-xs">{q.category}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                <div className="flex items-center justify-between">
                  <span>Answered: {Object.keys(answers).length}/{questions.length}</span>
                  <span>Progress: {Math.round((Object.keys(answers).length / questions.length) * 100)}%</span>
                </div>
              </div>
            </div>

            {/* Exam Progress */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-medium text-gray-900 mb-4">Exam Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">C++ Questions:</span>
                  <span className="font-medium">1/1 answered</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">DSA Questions:</span>
                  <span className="font-medium">0/3 answered</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Marks:</span>
                  <span className="font-medium">37 marks</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors">
                  <Save className="w-4 h-4" />
                  <span>Save Progress</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105">
                  <Send className="w-4 h-4" />
                  <span>Submit Exam</span>
                </button>
              </div>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                Make sure to save your progress regularly
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;