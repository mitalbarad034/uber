import React, { useContext } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { UsercontextData } from '../context/UserContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
export const Signup = () => {

  const navigate = useNavigate();
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [UserData, setUserData] = React.useState({
    fullname: {
      firstname: '',
      lastname: ''
    },
    email: '',
    password: '',
  });

  const { users, setUsers } = useContext(UsercontextData);
  const SubmitEventHandler = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    const new_user = {
      fullname: { firstname: fullName.split(' ')[0], lastname: fullName.split(' ')[1] || '' }, email,
      password
    }

    const response = await axios.post(`http://localhost:5000/users/register`, new_user)
      .then((response) => {
        setUsers(response.data);
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      })
      .catch((error) => {
        console.error('Signup failed:', error);
      });

    setFullName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">


      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">MyApp</h1>
          <p className="text-gray-500 mt-2">Create your account</p>
        </div>


        <form onSubmit={SubmitEventHandler}>


          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div className="flex items-start gap-2 mb-6 text-sm">
            <input type="checkbox" className="mt-1 rounded text-indigo-600" />
            <p className="text-gray-600">
              I agree to the
              <a href="#" className="text-indigo-600 hover:underline">Terms</a>
              and
              <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
            </p>
          </div>


          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Create Account
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
          <span>🔐</span> Sign up with Google
        </button>


        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?
          <a href="#" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>

      </div>

    </div>
  )
}
