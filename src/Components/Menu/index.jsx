/* eslint-disable no-unused-vars */
import React from "react"

/* eslint-disable react/prop-types */
const MenuButton = (props) => {
    const { texto } = props
    return (
        <button type="button" className="bg-green-600 rounded-lg text-white min-w-52 max-w-72 px-4 py-2 border text-3xl">
            {texto}
        </button>
    )
}

const opciones = [
    {
        texto: "Vegano",
        id: "veg-01"
    },
    {
        texto: "Carnes",
        id: "car-01"
    },
    {
        texto: "Asiatica",
        id: "asi-01"
    }
]

const Menu = () => {
    return (
      <nav className="flex gap-4 justify-between w-full p-4 flex-wrap my-4 dark:bg-gray-900">
        {opciones.map(({ texto, id }) => (
          <MenuButton key={id} texto={texto} />
        ))}
      </nav>
    );
}

export default Menu
