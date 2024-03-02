import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./Hero/Hero";
import { SugesstedArticles } from "./SuggestedArticles/SugesstedArticles";
import { Footer } from "./Footer/Footer";
import { About } from "./About/About";
import { SignInModal } from "./SignInModal/SignInModal";
import { useModal } from "../hooks/useModal";

function App() {
  const { isOpen } = useModal();

  return (
    <div>
      <div className="bg-MobileHeaderImage bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <SugesstedArticles />
      <About />
      <Footer />
      {isOpen && <SignInModal />}
    </div>
  );
}

export default App;
