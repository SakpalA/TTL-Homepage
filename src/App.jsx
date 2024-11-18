import './App.css';
import RaceReady from './Components/race-ready/RaceReady';
import HeroIntro from './Components/hero-intro/HeroIntro';
import ImgTextMain from './Components/ImgTextSection/ImgTextMain';
import Navigation from './Components/Navigation/Navigation';
import ProductSection from './Components/product/ProductSection';
import HeroIconComp from './Components/hero-icon/HeroIconComp';
import ImageSec from './Components/image-section/ImageSec';
import HorseSupport from './Components/horse-support/HorseSupport';
import Trainers from './Components/trainers/Trainers';
import Support from './Components/customer-support/Support';
import Subscribe from './Components/subscribe/Subscribe';
import ImgContact from './Components/contact/ImgContact';
import FooterComp from './Components/footer/FooterComp';
import ScrollBtn from './Components/scroll-btn/ScrollBtn';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroIntro />
      <HeroIconComp />
      <ImgTextMain />
      <ProductSection />
      <ImageSec />
      <HorseSupport />
      <Trainers />
      <RaceReady />
      <Support />
      <Subscribe />
      <ImgContact />
      <FooterComp />
      <ScrollBtn />
    </div>
  );
}

export default App;
