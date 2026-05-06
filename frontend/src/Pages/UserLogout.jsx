import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
export const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token.........................', token);
    axios.get('http://localhost:5000/users/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        localStorage.removeItem('token');
        navigate('/login');
        // Handle successful logout (e.g., clear user data, redirect)
      })
      .catch(error => {
        console.error('Logout failed:', error);
        // Handle logout error (e.g., show error message)
      });
  });

  return null; // This component doesn't render anything
}
