import Navbar from "./Navbar";
import HeroText from "./HeroText";
import WhoWeAre from "./WhoWeAre";
import ProductsCarousel from "./ProductsCarousel";
import Tournament from "./Tournament";
import AccordionTips from "./AccordionTips";
import Footer from "./Footer";
import CharacterSelect from "./CharacterSelect";
import VSScreen from "./VSScreen";
import MusicPlayer from "./MusicPlayer";
import MusicPlayerContextProvider from "./Contexts/MusicPlayerContext";


function App() {

  return (
    <div>
      <MusicPlayerContextProvider>
        <Navbar />
        <HeroText />
        <WhoWeAre />
        <ProductsCarousel />
        <VSScreen />
        <CharacterSelect />
        <Tournament />
        <AccordionTips />
        <Footer />
        <MusicPlayer />
      </MusicPlayerContextProvider>
    </div>
  );
}

export default App;
