import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import Logo from '../../assets/thanporunai-logo.png';

const AdminLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Note: localStorage is not available in this environment
      // In a real app, you would handle token storage here
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Login successful");
        navigate('/admin');
        // window.location.href = '/admin';
      } else {
        alert("❌ Login failed");
      }
    } catch (err) {
      alert("❌ Login failed");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            {/* Logo wrapper */}
            <div className="w-50 h-50 mx-auto mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Thanporunai Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white border-2 border-green-200 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-2">ADMIN PANEL</h1>
            <p className="text-green-600">Sign in to your account</p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-green-700 mb-2">EMAIL/USERNAME</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-green-200 rounded-lg text-green-800 focus:border-green-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-green-700 mb-2">PASSWORD</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 bg-white border-2 border-green-200 rounded-lg text-green-800 focus:border-green-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${isLoading
                ? 'bg-green-300 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 active:bg-green-800'
                }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'LOGIN'
              )}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-green-600 text-sm">Secure admin access only</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;