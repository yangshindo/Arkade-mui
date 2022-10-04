import Navbar from "./Navbar";
import HeroText from "./HeroText";
import WhoWeAre from "./WhoWeAre";
import ProductsCarousel from "./ProductsCarousel";
import Tournament from "./Tournament";
import AccordionTips from "./AccordionTips";
import Footer from "./Footer";
import CharacterSelect from "./CharacterSelect";

import VSScreen from "./VSScreen";
function App() {
  return (
    <div>
      
      <Navbar />
      <HeroText />
      <WhoWeAre />
      <ProductsCarousel />
      <VSScreen />
      <CharacterSelect />
      <Tournament />
      <AccordionTips />
      <Footer />
    </div>
  );
}

export default App;
