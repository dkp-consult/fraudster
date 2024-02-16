import React from 'react';
import Logo from '../components/Logo';

const ConstructionPage = () => {
  return (
    
<div className="bg-gray-100 px-4 py-8 flex flex-col items-center justify-center min-h-screen w-full">
  <div className="w-full max-w-xs mx-auto"> {/* Ajustez cette div pour contrôler la taille du logo */}
    <Logo className="mx-auto" />
  </div>
  <div className="text-center max-w-4xl mx-auto mt-4"> {/* Ajustez mt-4 pour contrôler l'espacement entre le logo et le texte */}
    <h1 className="text-4xl font-bold text-gray-800">Fraudster.tech</h1>
    <p className="text-lg text-gray-600 pt-8">Le POC du projet est en cours de construction, ce projet se veut collaboratif et d'utilité commune. Si vous souhaitez participer à son élaboration, n'hésitez pas à prendre contact.</p>
    <ul className="mt-4">
      <li className="text-lg text-gray-600"><a href="https://x.com/dkp_consult">Twitter</a></li>
      <li className="text-lg text-gray-600 mt-4"><a href="https://github.com/dkp-consult">GitHub</a></li>
    </ul>
  </div>
</div>


  );
};

export default ConstructionPage;
