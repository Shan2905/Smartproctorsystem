import React, { useState } from 'react';
import { Play, Save, Download, Upload, Settings, Terminal, Code, Cpu, CheckCircle, XCircle } from 'lucide-react';

const CPPEditor = () => {
  const [code, setCode] = useState(`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // Welcome to the C++ Editor!
    // Write your C++ code here
    
    vector<int> numbers = {5, 2, 8, 1, 9, 3};
    
    cout << "Original array: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Sort the array
    sort(numbers.begin(), numbers.end());
    
    cout << "Sorted array: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`);

  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [compilationStatus, setCompilationStatus] = useState(null);

  const cppExamples = [
    {
      title: 'Hello World',
      code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`
    },
    {
      title: 'Binary Search',
      code: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11, 13, 15};
    int target = 7;
    
    int result = binarySearch(arr, target);
    
    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    } else {
        cout << "Element not found" << endl;
    }
    
    return 0;
}`
    },
    {
      title: 'Linked List',
      code: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class LinkedList {
private:
    ListNode* head;
    
public:
    LinkedList() : head(nullptr) {}
    
    void insert(int val) {
        ListNode* newNode = new ListNode(val);
        newNode->next = head;
        head = newNode;
    }
    
    void display() {
        ListNode* current = head;
        while (current) {
            cout << current->val << " -> ";
            current = current->next;
        }
        cout << "NULL" << endl;
    }
    
    ~LinkedList() {
        while (head) {
            ListNode* temp = head;
            head = head->next;
            delete temp;
        }
    }
};

int main() {
    LinkedList list;
    
    list.insert(3);
    list.insert(7);
    list.insert(1);
    list.insert(9);
    
    cout << "Linked List: ";
    list.display();
    
    return 0;
}`
    }
  ];

  const runCode = async () => {
    setIsRunning(true);
    setOutput('');
    setCompilationStatus(null);

    // Simulate compilation and execution
    setTimeout(() => {
      try {
        // Mock compilation success
        setCompilationStatus('success');
        
        // Mock output based on the current code
        if (code.includes('Hello, World!')) {
          setOutput('Hello, World!');
        } else if (code.includes('Original array')) {
          setOutput(`Original array: 5 2 8 1 9 3 
Sorted array: 1 2 3 5 8 9 `);
        } else if (code.includes('binarySearch')) {
          setOutput('Element found at index: 3');
        } else if (code.includes('LinkedList')) {
          setOutput('Linked List: 9 -> 1 -> 7 -> 3 -> NULL');
        } else {
          setOutput('Program executed successfully.\nNo output to display.');
        }
      } catch (error) {
        setCompilationStatus('error');
        setOutput('Compilation Error: ' + error.message);
      }
      
      setIsRunning(false);
    }, 2000);
  };

  const loadExample = (example) => {
    setCode(example.code);
    setOutput('');
    setCompilationStatus(null);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">C++ Code Editor</h1>
          <p className="text-gray-600 mt-1">Write, compile, and run C++ code online</p>
        </div>
        <div className="flex items-center space-x-2">
          <Cpu className="w-6 h-6 text-blue-600" />
          <span className="text-sm text-gray-500">GCC 11.2.0</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Code Editor */}
        <div className="lg:col-span-3 space-y-4">
          {/* Toolbar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50"
                >
                  {isRunning ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Running...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Run Code</span>
                    </>
                  )}
                </button>
                
                <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                
                <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                {compilationStatus === 'success' && (
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Compiled Successfully</span>
                  </div>
                )}
                {compilationStatus === 'error' && (
                  <div className="flex items-center space-x-1 text-red-600">
                    <XCircle className="w-4 h-4" />
                    <span className="text-sm">Compilation Error</span>
                  </div>
                )}
                
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Settings className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-medium text-sm">main.cpp</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 bg-gray-900 text-green-400 font-mono text-sm p-4 resize-none focus:outline-none code-editor"
              placeholder="Write your C++ code here..."
              spellCheck={false}
            />
          </div>

          {/* Output */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Output</span>
            </div>
            <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 h-32 overflow-y-auto">
              {output ? (
                <pre>{output}</pre>
              ) : (
                <span className="text-gray-500">Output will appear here after running the code...</span>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Examples */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Code Examples</h2>
            </div>
            <div className="p-6 space-y-3">
              {cppExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example)}
                  className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200"
                >
                  <div className="font-medium text-gray-900">{example.title}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Click to load example
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Compiler Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Compiler Info</h2>
            </div>
            <div className="p-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Compiler:</span>
                <span className="font-medium">GCC 11.2.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Standard:</span>
                <span className="font-medium">C++17</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Flags:</span>
                <span className="font-medium">-O2 -Wall</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Memory Limit:</span>
                <span className="font-medium">256 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time Limit:</span>
                <span className="font-medium">5 seconds</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full flex items-center space-x-2 text-left p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <Upload className="w-4 h-4 text-gray-600" />
                <span>Upload File</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-left p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <Code className="w-4 h-4 text-gray-600" />
                <span>Format Code</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-left p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <Settings className="w-4 h-4 text-gray-600" />
                <span>Editor Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPPEditor;