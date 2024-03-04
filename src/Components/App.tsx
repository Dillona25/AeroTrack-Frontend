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
import { ContactModal } from "./ContactModal/ContactModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SavedArticlesHeader } from "../routes/SavedArticlesHeader/SavedArticlesHeader";
import { SavedArticles } from "../routes/SavedArticles/SavedArticles";

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

  const handleContactModal = () => {
    setActiveModal("contact");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="bg-MobileHeaderImage bg-cover bg-center">
                <Navbar handleNavMenu={handleNavMenu} />
                {activeModal === "navMenu" && (
                  <NavDropDown
                    isLoggedIn={isLoggedIn}
                    closeModal={closeModal}
                    handleSignInModal={handleSignInModal}
                    handleSignUpModal={handleSignUpModal}
                    handleContactModal={handleContactModal}
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
              {activeModal === "contact" && (
                <ContactModal closeModal={closeModal} />
              )}
            </div>
          }
        />
        <Route
          path="/SavedArticles"
          element={
            <>
              <Navbar />
              <SavedArticlesHeader />
              <SavedArticles isLoggedIn={isLoggedIn} />
              <Footer />{" "}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
