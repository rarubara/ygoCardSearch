import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para mostrar el cargando
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener los datos
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://api.npoint.io/05f3068bb73af58c01f5");
      setUsers(response.data); // Guardamos los datos en el estado
    } catch (err) {
      setError(err.message); // Guardamos el error si ocurre
    } finally {
      setLoading(false); // Ocultamos el mensaje de carga
    }
  };

  // useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    fetchUsers();
  }, []);

  // Renderizamos los datos o el estado de error/cargando
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>            
            <strong>{user.name}</strong> - {user.email}
            <img src={user.imageUrl} alt={user.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
