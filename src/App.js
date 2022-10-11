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
import Chibis from "./Chibis";
import useMediaQuery from "./Hooks/useMediaQuery";


function App() {

  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div>
      <MusicPlayerContextProvider>
        <Navbar />
        <HeroText />
        <WhoWeAre />
        <ProductsCarousel />
        {isDesktop ? <VSScreen /> : null }
        <CharacterSelect />
        <Tournament />
        <Chibis />
        <AccordionTips />
        <Footer />
        <MusicPlayer />
      </MusicPlayerContextProvider>
    </div>
  );
}

export default App;
