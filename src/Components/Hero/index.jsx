/* eslint-disable no-unused-vars */
import React from "react"
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import ComboBoxLang from "../ComboBoxLang";
import '../../../styles.css';  // Import your CSS file

const HeroImage = () => {
    return (
        <div className="absolute inset-0 w-full h-full">
            <img 
                src="collage.webp" 
                className="h-full w-full object-cover brightness-75" 
                alt="collage goat format" 
            />
        </div>
    )
}

const HeroButton = () => {
    let navigate = useNavigate();
    return (
        <button 
            type="button"             
            className="bg-gradient-to-br from-orange-500 to-black hover:from-orange-300 hover:to-gray-800 transition-colors rounded-lg text-white px-8 py-3 text-xl font-semibold shadow-lg hover:shadow-xl"
            onClick={() => {
                navigate("/reservation");
            }}
        >
            Advanced search
        </button>
    )
}

const CardRow = () => {
    return (
      <div className="cardrow">
        <div className="cardrow-description">
          This description is visible only on large screens.
        </div>
      </div>
    );
  };

const HeroContent = () => {
    return (
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-xl space-y-6">
                <h1 className="text-white text-5xl font-bold leading-tight custom-text-stroke">
                    Card searcher at your finger tips!
                </h1>
                <style jsx>{`
                    .custom-text-stroke {
                        -webkit-text-stroke: 2px black; /* 1px black border around each letter */
                        text-stroke: 2px black; /* For other browsers that support it */
                    }
                `}</style>
                <p className="text-white/90 text-2xl">
                    just write the name or card description to search
                </p>                      
                <ComboBoxLang/>
                <flex className="flex width-full items-center space-x-4">                    
                    <SearchBar />                                                            
                </flex>          
                <HeroButton />     
                <CardRow />                           
            </div>
        </div>
    )
}

const Hero = () => {
    return (
        <section className="relative h-[80vh] bg-gray-900">
            <HeroImage />
            <HeroContent />
        </section>
    )
}

export default Hero
