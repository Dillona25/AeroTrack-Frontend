import { useState } from "react";
// Component imports
import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./Hero/Hero";
import { SugesstedArticles } from "./SuggestedArticles/SugesstedArticles";
import { Footer } from "./Footer/Footer";
import { About } from "./About/About";
import { SignInModal } from "./SignInModal/SignInModal";
import { NavDropDown } from "./NavbarDropDown/NavbarDropDown";
import { SignUpModal } from "./SignUpModal/SignUpModal";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavMenu = () => {
    setActiveModal("navMenu");
  };

  const handleSignInModal = () => {
    setActiveModal("signIn");
  };

  const handleSignUpModal = () => {
    setActiveModal("signUp");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <div>
      <div className="bg-MobileHeaderImage bg-cover bg-center">
        <Navbar handleNavMenu={handleNavMenu} />
        {activeModal === "navMenu" && (
          <NavDropDown
            isLoggedIn={isLoggedIn}
            closeModal={closeModal}
            handleSignInModal={handleSignInModal}
            handleSignUpModal={handleSignUpModal}
          />
        )}
        <Hero />
      </div>
      <SugesstedArticles isLoggedIn={isLoggedIn} />
      <About />
      <Footer />
      {activeModal === "signIn" && (
        <SignInModal
          handleSignUpModal={handleSignUpModal}
          closeModal={closeModal}
        />
      )}
      {activeModal === "signUp" && (
        <SignUpModal
          handleSignInModal={handleSignInModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
