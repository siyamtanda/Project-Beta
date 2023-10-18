import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Navbar />
        < HeroSection />
        < Section2 className="section" />
        < Section3 className="section" />
        < Section4 className="section" />
        < Footer className="section" />
      </header>
    </div>
  );
}

export default App;
