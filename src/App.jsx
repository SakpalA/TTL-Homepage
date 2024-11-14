import './App.css';
import NavBar from './Components/navbar/NavBar';
import Hero from './Components/hero/Hero';
import HeroIcon from './Components/hero-icon/HeroIcon';
import IntroSection from './Components/intro-sections/IntroSection';
import Product from './Components/product/Product';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HeroIcon />
      <IntroSection />
      <Product />
    </div>
  );
}

export default App;
