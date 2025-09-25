import React, { useState } from 'react';
import { ArrowLeft, Github, Facebook } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <button className="mb-6 p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft size={24} />
        </button>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Log in to track your bus in real-time</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <div className="text-right">
            <button type="button" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-gray-500 text-sm mb-4">Or continue with</p>
          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Github size={20} />
            </button>
            <button className="flex-1 flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Facebook size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account? 
            <button className="text-blue-500 ml-1 hover:underline">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};