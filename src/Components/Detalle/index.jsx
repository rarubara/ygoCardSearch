/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react"


const Card = (props) => {
    const { url = "", texto = "" } = props
    return (
      <div className="flex justify-between  gap-4 border border-green-700 width-[70%] mx-3 p-1 rounded-md">
        <img alt="img" src={url} className="w-[50%] h-[10%] rounded-md" />
        <p className="text-xl">{texto}</p>
      </div>
    );
}

const detalles = [
    {
        url: "https://cdn.pixabay.com/photo/2021/10/30/12/50/woman-6754248_1280.jpg",
        texto: "Un desayuno ejecutivo",
        id: "menu-01a01"
    },
    {
        url: "https://cdn.pixabay.com/photo/2021/10/30/12/50/woman-6754248_1280.jpg",
        texto: "El mejor Salmon en la ciudad",
        id: "menu-02b02"
    },
    {
        url: "https://cdn.pixabay.com/photo/2021/10/30/12/50/woman-6754248_1280.jpg",
        texto: "El mejor Salmon en la ciudad",
        id: "menu-03c03"
    },
    {
        url: "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_1280.jpg",
        texto: "El Ramen premiado en los awards 2024",
        id: "menu-04d04"
    }
]

const Detalle = () => {

    return (
        <div className="flex flex-col gap-4">
            {
                detalles.map(({ url, texto, id }) => (<Card key={id} url={url} texto={texto} />))
            }
        </div>
    )
}

export default Detalle
