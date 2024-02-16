import React from 'react';
import Logo from './Logo';

const Presentation = () => {
  return (
    
<div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100" id="presentation">
  {/* Header container for logo and title */}
  <div className="w-full flex items-center justify-between px-4 py-8">
    {/* Logo on the left */}
    <div className="w-48"> {/* Adjust this div to control the size of the logo */}
      <Logo />
    </div>
    {/* Title centered */}
    <h1 className="text-4xl font-bold text-gray-800 absolute left-1/2 transform -translate-x-1/2">Fraudster.tech</h1>
  </div>

  {/* Text explanation section */}
  <div className="text-center max-w-4xl mx-auto mt-8 px-4 text-justify"> {/* Adjust mt-4 to control spacing */}
    <p className="text-lg text-gray-600">L'idée sous-jacente était de créer un site permettant simplement de signaler et référencer les formations malhonnêtes, après discussion, il s'avère que ce projet est délicat et qu'il pourrait être en dehors de la réglementation entourant le RGPD.</p>
    <br />
    <p className="text-lg text-gray-600">Ici, nous sommes malheureusement dans un cas de figure où malgré l'idée louable et bénéfique, celle-ci n'est pas conforme aux réglementations en place. Ce projet est donc susceptible de ne jamais voir le jour.</p>
    <p className="text-lg text-gray-600">Cependant, après avoir réfléchis quelque temps à celui-ci, je vais prendre la peine de le créer, pour ensuite le classer dans les archives de mes sides projects</p>
  </div>
  <div className="ml-auto mr-8 mt-5"><a href="https://x.com/dkp_consult">dkp-consult</a></div>

  {/* Buttons */}
  <div className="mt-8 flex justify-center space-x-4"> {/* Adjust mt-4 to control spacing */}
    <a href="https://x.com/dkp_consult" className="text-lg text-gray-600 bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
      Twitter
    </a>
    <a href="https://github.com/dkp-consult" className="text-lg text-gray-600 bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
      GitHub
    </a>
  </div>
</div>



  );
};

export default Presentation;
