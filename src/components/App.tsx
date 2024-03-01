import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./Hero/Hero";
import { SugesstedArticles } from "./SuggestedArticles/SugesstedArticles";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div>
      <div className="bg-MobileHeaderImage bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <SugesstedArticles />
      {/* this needs to be last at all times */}
      <Footer />
    </div>
  );
}

export default App;
