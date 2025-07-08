import React, { useState } from 'react';
import { Brain, Clock, Trophy, Code, CheckCircle, AlertCircle, Play } from 'lucide-react';

const DSAProblems = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      category: 'Arrays',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      solved: true,
      attempts: 3,
      successRate: 85,
      cppTemplate: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};`
    },
    {
      id: 2,
      title: 'Binary Tree Inorder Traversal',
      difficulty: 'Medium',
      category: 'Trees',
      description: 'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h)',
      solved: false,
      attempts: 1,
      successRate: 65,
      cppTemplate: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        // Your code here
        return result;
    }
};`
    },
    {
      id: 3,
      title: 'Longest Common Subsequence',
      difficulty: 'Hard',
      category: 'Dynamic Programming',
      description: 'Given two strings text1 and text2, return the length of their longest common subsequence.',
      timeComplexity: 'O(m*n)',
      spaceComplexity: 'O(m*n)',
      solved: false,
      attempts: 0,
      successRate: 45,
      cppTemplate: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.length();
        int n = text2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        // Your code here
        
        return dp[m][n];
    }
};`
    },
    {
      id: 4,
      title: 'Merge K Sorted Lists',
      difficulty: 'Hard',
      category: 'Linked Lists',
      description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
      timeComplexity: 'O(n log k)',
      spaceComplexity: 'O(1)',
      solved: true,
      attempts: 5,
      successRate: 35,
      cppTemplate: `#include <iostream>
#include <vector>
#include <queue>
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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Your code here
        return nullptr;
    }
};`
    }
  ];

  const categories = ['all', 'Arrays', 'Trees', 'Dynamic Programming', 'Linked Lists', 'Graphs', 'Sorting'];
  const difficulties = ['all', 'Easy', 'Medium', 'Hard'];

  const filteredProblems = problems.filter(problem => {
    const difficultyMatch = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
    const categoryMatch = selectedCategory === 'all' || problem.category === selectedCategory;
    return difficultyMatch && categoryMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">DSA Problem Bank</h1>
          <p className="text-gray-600 mt-1">Practice Data Structures & Algorithms with C++</p>
        </div>
        <div className="flex items-center space-x-2">
          <Brain className="w-6 h-6 text-purple-600" />
          <span className="text-sm text-gray-500">{filteredProblems.length} problems available</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Problems</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{problems.length}</p>
            </div>
            <Brain className="w-10 h-10 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Solved</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{problems.filter(p => p.solved).length}</p>
            </div>
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">68%</p>
            </div>
            <Trophy className="w-10 h-10 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Time</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">25m</p>
            </div>
            <Clock className="w-10 h-10 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? 'All Difficulties' : difficulty}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {filteredProblems.map((problem) => (
          <div key={problem.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {problem.category}
                  </span>
                  {problem.solved && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{problem.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Time: {problem.timeComplexity}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Brain className="w-4 h-4" />
                    <span>Space: {problem.spaceComplexity}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4" />
                    <span>Success: {problem.successRate}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>Attempts: {problem.attempts}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                  <Play className="w-4 h-4" />
                  <span>Solve</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                  <Code className="w-4 h-4" />
                  <span>View Code</span>
                </button>
              </div>
            </div>
            
            {/* Code Template Preview */}
            <div className="mt-4 bg-gray-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-400 font-medium text-sm">C++ Template</span>
                <span className="text-gray-400 text-xs">Click to expand</span>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{problem.cppTemplate.split('\n').slice(0, 8).join('\n')}
{problem.cppTemplate.split('\n').length > 8 && '...'}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSAProblems;