/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        // Couleurs Principales
        rouge: {
          DEFAULT: '#E10600', // Rouge principal
          clair: '#F24C3D', // Rouge clair
          fonce: '#B50000', // Rouge foncé
        },
        noir: {
          DEFAULT: '#000000', // Noir principal
          'gris-fonce': '#333333', // Gris foncé
        },
        blanc: '#FFFFFF',
        'gris-clair': {
          DEFAULT: '#F2F2F2', // Gris clair principal
          tresclair: '#FAFAFA', // Gris très clair
        },
        
        // Couleurs Complémentaires
        bleu: {
          DEFAULT: '#007BFF', // Bleu principal
          clair: '#3399FF', // Bleu clair
          fonce: '#0056b3', // Bleu foncé
        },
        vert: {
          DEFAULT: '#28A745', // Vert principal
          clair: '#5cb85c', // Vert clair
          fonce: '#1e7e34', // Vert foncé
        },
      },
    },
  },
  plugins: [],
}

