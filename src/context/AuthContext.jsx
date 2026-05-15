import React, { createContext, useState, useContext, useEffect } from 'react';
import { DataContext } from './DataContext';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { users, addUser } = useContext(DataContext);
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('paula_current_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('paula_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('paula_current_user');
    }
  }, [currentUser]);

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true, user };
    }
    return { success: false, message: 'Email ou senha incorretos' };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const register = (userData) => {
    const exists = users.find(u => u.email === userData.email || u.cpf === userData.cpf);
    if (exists) {
      return { success: false, message: 'Email ou CPF já cadastrados' };
    }
    
    const newUser = {
      ...userData,
      role: 'client',
      status: 'pending',
      propertyId: null
    };
    
    addUser(newUser);
    return { success: true, message: 'Cadastro realizado com sucesso! Aguarde aprovação do administrador.' };
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
