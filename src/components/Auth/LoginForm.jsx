import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Shield, Eye, EyeOff, Code, Brain, Cpu } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="relative">
              <Shield className="w-16 h-16 text-blue-400" />
              <Code className="w-6 h-6 text-purple-400 absolute -top-1 -right-1" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">ProctorAI</h2>
          <p className="text-blue-200 text-lg">Smart Proctoring for C++ & DSA</p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <div className="flex items-center space-x-1 text-purple-300">
              <Brain className="w-4 h-4" />
              <span className="text-sm">AI Powered</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-300">
              <Cpu className="w-4 h-4" />
              <span className="text-sm">Real-time</span>
            </div>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 text-sm text-center py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
            <p className="font-medium mb-3 text-white">Demo Credentials:</p>
            <div className="text-sm space-y-2 text-gray-200">
              <div className="flex justify-between">
                <span className="font-medium text-blue-300">Admin:</span>
                <span>admin@proctoring.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-purple-300">Proctor:</span>
                <span>proctor@proctoring.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-pink-300">Student:</span>
                <span>student@proctoring.com</span>
              </div>
              <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                <span className="font-medium text-green-300">Password:</span>
                <span>password</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;