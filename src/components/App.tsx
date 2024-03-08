import { useState } from "react";
// Component imports
import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./Hero/Hero";
import { SearchArticles } from "./SearchArticles/SearchArticles";
import { Footer } from "./Footer/Footer";
import { About } from "./About/About";
import { SignInModal } from "./SignInModal/SignInModal";
import { NavDropDown } from "./NavbarDropDown/NavbarDropDown";
import { SignUpModal } from "./SignUpModal/SignUpModal";
import { ContactModal } from "./ContactModal/ContactModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SavedArticlesHeader } from "../routes/SavedArticlesHeader/SavedArticlesHeader";
import { SavedArticles } from "../routes/SavedArticles/SavedArticles";
import { ProfileModal } from "./ProfileModal/ProfileModal";
// import { PreLoader } from "./PreLoader/PreLoader";
// import { NotFound } from "./NotFound/Notfound";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showMore, setShowMore] = useState(false);

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

  const handleProfileModal = () => {
    setActiveModal("profile");
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
              <div className={`bg-MobileHeaderImage bg-cover bg-center`}>
                <Navbar
                  handleNavMenu={handleNavMenu}
                  handleSignInModal={handleSignInModal}
                  handleProfileModal={handleProfileModal}
                  handleContactModal={handleContactModal}
                  isLoggedIn={isLoggedIn}
                />
                {activeModal === "navMenu" && (
                  <NavDropDown
                    isLoggedIn={isLoggedIn}
                    closeModal={closeModal}
                    handleSignInModal={handleSignInModal}
                    handleSignUpModal={handleSignUpModal}
                    handleContactModal={handleContactModal}
                    handleProfileModal={handleProfileModal}
                  />
                )}
                <Hero />
              </div>
              {/* These will only appear for the user when they search and get
              results */}
              <SearchArticles
                isLoggedIn={isLoggedIn}
                showMore={showMore}
                setShowMore={setShowMore}
              />
              {/* These will only appear when the API is searching or when there are
              no results */}
              {/* <PreLoader />
              <NotFound /> */}
              <About />
              <Footer handleContactModal={handleContactModal} />
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
              {activeModal === "profile" && (
                <ProfileModal closeModal={closeModal} />
              )}
            </div>
          }
        />

        <Route
          path="/SavedArticles"
          element={
            <>
              <Navbar
                handleNavMenu={handleNavMenu}
                handleProfileModal={handleProfileModal}
                handleContactModal={handleContactModal}
              />
              {activeModal === "navMenu" && (
                <NavDropDown
                  isLoggedIn={isLoggedIn}
                  closeModal={closeModal}
                  handleContactModal={handleContactModal}
                  handleProfileModal={handleProfileModal}
                />
              )}
              <SavedArticlesHeader />
              <SavedArticles />
              <Footer handleContactModal={handleContactModal} />
              {activeModal === "contact" && (
                <ContactModal closeModal={closeModal} />
              )}
              {activeModal === "profile" && (
                <ProfileModal closeModal={closeModal} />
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
