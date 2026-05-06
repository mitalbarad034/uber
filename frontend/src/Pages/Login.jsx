import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useContext } from 'react';
import { UsercontextData } from '../context/UserContext.jsx';

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserData, setUserData] = useState(null);

  const { users, setUsers } = useContext(UsercontextData);
  const submitHandler = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password
    }

    axios.post('http://localhost:5000/users/login', loginData)
      .then(response => {
        console.log('Login successful:', response.data);
        setUsers(response.data);
        localStorage.setItem('token', response.data.token);
        navigate('/home');
        // Handle successful login (e.g., store token, redirect)
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle login error (e.g., show error message)
      });
    setEmail('');
    setPassword('')
    // Handle login logic here
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600'>
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">


        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">MyApp</h1>
          <p className="text-gray-500 mt-2">Welcome back! Please login</p>
        </div>


        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input required
              onChange={(e) => setEmail(e.target.value)}
              type="email" value={email}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-indigo-600" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>


        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>


        <button
          className="w-full border py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <span>🔒</span> Login with Google
        </button>


        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div >
  )
}
