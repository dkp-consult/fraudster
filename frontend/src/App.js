import './App.css';
import ConstructionPage from './pages/ConstructionPage';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

/* Testing connexion front 2 back */

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ConstructionPage />
    </div>
  )
}

export default App;
