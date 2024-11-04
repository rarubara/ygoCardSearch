/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

// 1. Crear el contexto de usuario
const UserContext = createContext();

// 2. Crear el proveedor de contexto de usuario
const UserProvider = ({ children }) => {
  // `user` almacena la información del usuario, y `setUser` permite actualizarlo.
  const [user, setUser] = useState(null);

  // 3. Función para iniciar sesión
  const login = (userData) => {
    if (!userData.nombre) {
      throw new Error("El nombre de usuario es requerido");
    }
    setUser(userData);
  };

  // 4. Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  // 5. Valor del contexto que incluye el estado y las funciones
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// 6. Hook personalizado para usar el contexto de usuario
const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser debe ser usado dentro de un UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
