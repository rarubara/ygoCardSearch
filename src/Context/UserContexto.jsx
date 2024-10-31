/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

// 1. Crear el contexto de usuario
const UserContext = createContext();

let initialState = {
  nombre: "Josue Patricio",
  login: () => {},
  logout: () => {},
};

// 2. Crear el proveedor de contexto de usuario
 const UserProvider = ({ children }) => {
  // `user` almacena la información del usuario, y `setUser` permite actualizarlo.
   const [ user, setUser ] = useState( initialState );
   

  // 3. Función para iniciar sesión
  const login = (userData) => {
    setUser(userData); // Actualiza la información del usuario
  };

  // 4. Función para cerrar sesión
  const logout = () => {
    setUser(); // Borra la información del usuario
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children} {/* Renderiza los componentes hijos */}
    </UserContext.Provider>
  );
};

// 5. Hook personalizado para usar el contexto de usuario
 const useUser = () => useContext(UserContext);
 
 export { UserProvider, useUser };
