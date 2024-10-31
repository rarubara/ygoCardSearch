/* eslint-disable no-unused-vars */
import React from "react"

const HeroImage = () => {
    return (
        <img src="postre.webp" className="h-full cover-fit w-full" alt="postre principal" />
    )
}

const HeroButton = () => {
    return (
            <button type="button" className="bg-green-700 rounded-lg text-white min-with-200px max-width-250px px-4 py-2 border text-3xl">
                Reservar
            </button>
    )
}

const HeroContent = () => {
    return (
      <div className="flex flex-col justify-between self-start top-0 z-[40] relative w-fit mx-4  dark:bg-gray-900">
        <p className="text-3xl">Postres Saludables</p>
        <p className="text-3xl">Recomendacion</p>
        <HeroButton />
      </div>
    );
}

const Hero = () => {
    return (
        <div className="h-50dvh">
            <HeroImage />
            <HeroContent />
        </div>
    )
}

export default Hero
