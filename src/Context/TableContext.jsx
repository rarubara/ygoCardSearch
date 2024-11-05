// @ts-nocheck
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useUser } from "./UserContexto";

const TableContext = createContext(null);

const initialDishes = [
  { id: 1, name: "Pasta Carbonara", price: 15.99 },
  { id: 2, name: "Salmon a la Parrilla", price: 22.99 },
  { id: 3, name: "Ensalada César", price: 12.99 },
  { id: 4, name: "Risotto de Champiñones", price: 18.99 },
  { id: 5, name: "Pollo al Limón", price: 16.99 },
];

const TableProvider = ({ children }) => {
  const { user } = useUser();
  const [reservations, setReservations] = useState([]);
  const [availableDishes] = useState(initialDishes);

  const makeReservation = (tableNumber, date, time, selectedDish) => {
    if (!user) {
      throw new Error("Debe iniciar sesión para hacer una reserva");
    }

    const newReservation = {
      id: Date.now(),
      userId: user.nombre,
      tableNumber,
      date,
      time,
      dish: selectedDish,
      createdAt: new Date().toISOString(),
    };

    // @ts-ignore
    setReservations((prev) => [...prev, newReservation]);
    return newReservation;
  };

  const getUserReservations = () => {
    if (!user) return [];
    // @ts-ignore
    return reservations.filter((res) => res.userId === user.nombre);
  };

  const value = {
    reservations,
    availableDishes,
    makeReservation,
    getUserReservations,
  };

  const Provider = TableContext.Provider;
  return <Provider value={value}>{children}</Provider>;
};

const useTable = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error("useTable debe ser usado dentro de un TableProvider");
  }
  return context;
};

export { TableProvider, useTable };
