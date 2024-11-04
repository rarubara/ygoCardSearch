/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContexto";
import Hlogin from "../../Components/Hlogin";

const LoginSection = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    password: ""
  });
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.usuario || !formData.password) {
      setError("Por favor complete todos los campos");
      return;
    }

    try {
      await login({
        nombre: formData.usuario,
        // In a real app, you'd want to hash the password
        password: formData.password
      });
      navigate("/"); // Redirect to home after successful login
    } catch (err) {
      setError("Error al iniciar sesión. Por favor intente nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="space-y-6">
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            htmlFor="usuario"
          >
            Usuario
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Ingrese su usuario"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Ingrese su contraseña"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button 
          type="submit"
          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

const Title = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-green-700 mb-2">Bienvenidos a</h1>
      <span className="text-3xl font-medium text-yellow-500">
        Little Lemon
      </span>
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <Hlogin />
      <div className="max-w-md mx-auto space-y-8 mt-8">
        <Title />
        <LoginSection />
      </div>
    </div>
  );
};

export default Login;
