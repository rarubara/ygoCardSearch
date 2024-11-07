/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useTable } from '../../Context/TableContext';
import Header from '../../Components/Header';

const Table = ({ number, onSelect }) => (
  <button
    onClick={() => {
      onSelect(number);
      alert(`Mesa ${number} reservada`);
    }}
    className="w-40 h-40 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center"
  >
    <span className="text-xl font-medium text-green-700">Mesa {number}</span>
  </button>
);

const ReservationForm = () => {
  // @ts-ignore
  const { availableDishes, makeReservation } = useTable();
  const [selectedTable, setSelectedTable] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedDish, setSelectedDish] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!selectedTable) {
      setError('Por favor seleccione una mesa');
      return;
    }

    if (!date || !time || !selectedDish) {
      setError('Por favor complete todos los campos');
      return;
    }

    try {
      makeReservation(selectedTable, date, time, selectedDish);
      alert('¡Reserva realizada con éxito!');
      // Reset form
      setSelectedTable(null);
      setDate('');
      setTime('');
      setSelectedDish('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
        Reserva tu Mesa
      </h1>

      {/* Tables Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((number) => (
          <Table
            key={number}
            number={number}
            onSelect={setSelectedTable}
          />
        ))}
      </div>

      {/* Reservation Form */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        {selectedTable && (
          <div className="text-center text-lg text-green-600 font-medium">
            Mesa {selectedTable} seleccionada
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Fecha
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Hora
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Plato
          </label>
          <select
            value={selectedDish}
            onChange={(e) => setSelectedDish(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Seleccione un plato</option>
            {availableDishes.map((dish) => (
              <option key={dish.id} value={dish.name}>
                {dish.name} - ${dish.price}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Realizar Pedido
        </button>
      </form>
    </div>
  );
};

const Reservation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ReservationForm />
    </div>
  );
};

export default Reservation;
