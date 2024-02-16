import React, { useState } from 'react';
import Logo from './Logo';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gris-clair text-noir">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div className="w-1/6">
                            <Logo />
                        </div>
                        {/* Liens principaux */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#presentation" className="py-5 px-3 hover:text-rouge">Présentation</a>
                            <a href="#faq" className="py-5 px-3 hover:text-rouge">FAQ</a>
                            <a href="#contact" className="py-5 px-3 hover:text-rouge">Contact</a>
                        </div>
                    </div>
                    {/* Boutons Signalement et Liste */}
                    <div className="hidden md:flex items-center space-x-1">
                        <div className="flex items-stretch space-x-1">
                            <a href="/signalement" className="flex-1 py-2 px-3 bg-rouge hover:bg-rouge-fonce text-blanc rounded transition duration-300 text-center w36">Signalement</a>
                            <a href="/liste" className="flex-1 py-2 px-3 bg-bleu hover:bg-bleu-fonce text-blanc rounded transition duration-300 text-center w-36">Liste</a>
                        </div>
                    </div>
                    {/* Bouton menu mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Menu mobile */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute w-full left-0 z-20`}>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <a href="#presentation" className="block py-2 px-4 text-sm text-noir hover:bg-gris-clair text-center">Présentation</a>
          <a href="#faq" className="block py-2 px-4 text-sm text-noir hover:bg-gris-clair text-center">FAQ</a>
          <a href="#contact" className="block py-2 px-4 text-sm text-noir hover:bg-gris-clair text-center">Contact</a>
          <a href="/signalement" className="block py-2 px-4 text-sm text-noir hover:bg-gris-clair text-center">Signalement</a>
          <a href="/liste" className="block py-2 px-4 text-sm text-noir hover:bg-gris-clair text-center">Liste</a>
        </div>
      </div>
        </nav>
    );
}

export default Navbar;
