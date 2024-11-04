/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"

const Card = (props) => {
    const { url = "", texto = "" } = props
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img 
                        alt="Plato" 
                        src={url} 
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                        {texto}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Descubre esta deliciosa opción preparada con los mejores ingredientes.
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mt-auto self-start">
                        Ver más
                    </button>
                </div>
            </div>
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
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid gap-8">
                    {detalles.map(({ url, texto, id }) => (
                        <Card key={id} url={url} texto={texto} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Detalle
