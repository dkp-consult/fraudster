import React from "react";
import heroBackgroundImage from '../background-6.webp'; 

const HeroSection = () => {
    return (
        <div>
        <section className="relative min-h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${heroBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          
          {/* Overlay Div */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>
  
          <div className="relative z-10 flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-5xl font-bold text-center px-4">
              Un site douteux, frauduleux ?
            </h1>
            <a href="#votre-CTA-link" className="mt-8 bg-rouge hover:bg-rouge-fonce text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              En savoir plus
            </a>
          </div>
        </section>
      </div>
    )
}

export default HeroSection;