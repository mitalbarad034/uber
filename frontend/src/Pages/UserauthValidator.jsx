import React from 'react'
import { useContext } from 'react';
import { UsercontextData } from '../context/UserContext.jsx';
import { Navigate } from 'react-router-dom';

export const UserauthValidator = ({ children }) => {
  const { users } = useContext(UsercontextData);
  const token = localStorage.getItem('token');
  console.log(users, token);
  return (

    users && token ? children : <Navigate to="/login" />
  )
}
