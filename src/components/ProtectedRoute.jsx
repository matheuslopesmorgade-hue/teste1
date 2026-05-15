import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const ProtectedRoute = ({ children, requireAdmin }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/area-cliente" replace />;
  }

  if (requireAdmin && currentUser.role !== 'admin') {
    return <Navigate to="/area-cliente" replace />;
  }

  return children;
};
