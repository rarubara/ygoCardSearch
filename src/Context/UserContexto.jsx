/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const register = (userData) => {
    if (!userData.nombre || !userData.password || !userData.email) {
      throw new Error("Todos los campos son requeridos");
    }

    // Check if user already exists
    const userExists = registeredUsers.some(
      (user) => user.email === userData.email || user.nombre === userData.nombre
    );

    if (userExists) {
      throw new Error("El usuario ya existe");
    }

    // Add new user to registered users
    setRegisteredUsers([...registeredUsers, userData]);

    // Automatically login after registration
    setUser(userData);
    return true;
  };

  const login = (userData) => {
    if (!userData.nombre || !userData.password) {
      throw new Error("Usuario y contraseña son requeridos");
    }

    // Find user in registered users
    const foundUser = registeredUsers.find(
      (user) =>
        user.nombre === userData.nombre && user.password === userData.password
    );

    if (!foundUser) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    setUser(foundUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user,
  };

  const Provider = UserContext.Provider;

  return <Provider value={value}>{children}</Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser debe ser usado dentro de un UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
