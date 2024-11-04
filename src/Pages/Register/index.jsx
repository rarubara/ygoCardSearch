/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../Context/UserContexto";
import Hlogin from "../../Components/Hlogin";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const { register } = useUser();
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

    // Validations
    if (!formData.nombre || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (!formData.email.includes('@')) {
      setError("Por favor ingrese un email válido");
      return;
    }

    try {
      await register({
        nombre: formData.nombre,
        email: formData.email,
        password: formData.password
      });
      navigate("/"); // Redirect to home after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="space-y-6">
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            htmlFor="nombre"
          >
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Ingrese su nombre de usuario"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Ingrese su email"
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

        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            htmlFor="confirmPassword"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Confirme su contraseña"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button 
          type="submit"
          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Registrarse
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </form>
  );
};

const Title = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-green-700 mb-2">Crear Cuenta</h1>
      <span className="text-3xl font-medium text-yellow-500">
        Little Lemon
      </span>
    </div>
  );
};

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <Hlogin />
      <div className="max-w-md mx-auto space-y-8 mt-8">
        <Title />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
