import { useState, useEffect } from "react";
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
import { PreLoader } from "./PreLoader/PreLoader";
import { NotFound } from "./NotFound/Notfound";
import { getArticles } from "../utils/newsApi";
import { NoSearchYet } from "./NoSearchYet/NoSearchYet";
import useEscapeKey from "../hooks/useEscapeKey";
import { ArticleError } from "./ArticlesError/ArticlesError";
import * as auth from "../utils/authApi";
import {
  updateUser,
  saveArticle,
  getSavedArticles,
  deleteSaveArticles,
} from "../utils/MainApi";
import { LogoutConfirmModal } from "./LogoutConfirmModal/LogoutConfirmModal";

type GetArticlesParams = {
  fromDate: string;
  toDate: string;
  pageSize: number;
  userInput: string;
};

// A types object for thr Article that can be easily passed and used where needed
export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  _id: string;
}

type loginProps = {
  email: string;
  password: string;
};

type signupProps = {
  name: string;
  avatar: string;
  email: string;
  password: string;
};

export interface currentUser {
  name: string;
  avatar: string;
  email: string;
  password: string;
}

type updateUserProps = {
  name: string;
  avatar: string;
};

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [cardsData, setCardsData] = useState<Article[]>([]);
  const [searchedArticles, setSearchedArticles] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [ArticlesError, setArticlesError] = useState("");
  const [savedNewsArticles, setSavedNewsArticles] = useState<Article[]>([]);
  // @ts-expect-error error no important as selectedArticleid is not used
  const [selectedArticleid, setSelectedArticleId] = useState(null);

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

  const handleLogoutConfirm = () => {
    setActiveModal("logoutConfirm");
  };

  const handleArticlesConflictError = () => {
    setArticlesError("Error");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  // Calling the hook to close modals on escape
  useEscapeKey(closeModal);

  // Logic to handle Searching articles
  const handleSearch = ({
    fromDate,
    toDate,
    pageSize,
    userInput,
  }: GetArticlesParams) => {
    setIsLoading(true);
    getArticles({ fromDate, toDate, pageSize, userInput })
      .then((res) => {
        setCardsData(res.articles);
        setSearchedArticles(true);
        setSearchResults(true);
        setIsLoading(false);
      })
      .catch(() => {
        return handleArticlesConflictError();
      });
  };

  // Checking for token
  useEffect(() => {
    // Setting jwt to the token from local storage
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      auth
        .checkToken(jwt)
        .then((res) => {
          setIsLoggedIn(true);
          if (currentUser) setCurrentUser(res.data);
          getSavedArticles(jwt).then((SavedArticles) => {
            setSavedNewsArticles(SavedArticles);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  // Logic to login an existing user
  function handleLogin({ email, password }: loginProps) {
    auth
      .authorize({ email, password })
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data.data);
              setIsLoggedIn(true);
              getSavedArticles(res.token).then((SavedArticles) => {
                setSavedNewsArticles(SavedArticles);
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Logic to register a new user
  function handleSignup({ email, password, avatar, name }: signupProps) {
    auth
      .registration({ name, avatar, email, password })
      .then((res) => {
        if (res) {
          handleLogin({ email, password });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Logic go update the profile
  const updateProfile = ({ name, avatar }: updateUserProps) => {
    updateUser({ name, avatar })
      .then(({ data }) => {
        setCurrentUser(data);
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSaveArticle = (card: Article) => {
    saveArticle(card)
      .then((response) => response.json())
      .then(({ data }) => {
        setSavedNewsArticles([...savedNewsArticles, data]);
        setSelectedArticleId(data._id);
        console.log(savedNewsArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteArticle = (articleId: Article) => {
    deleteSaveArticles(articleId._id, localStorage.getItem("jwt") || "")
      .then(() => {
        const updatedArticles = savedNewsArticles.filter(
          (article) => article._id !== articleId._id
        );
        setSavedNewsArticles(updatedArticles);
      })
      .catch((error) => {
        console.error(error);
      });
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
                  currentUser={currentUser}
                  handleLogoutConfirm={handleLogoutConfirm}
                />
                {activeModal === "navMenu" && (
                  <NavDropDown
                    isLoggedIn={isLoggedIn}
                    closeModal={closeModal}
                    handleSignInModal={handleSignInModal}
                    handleSignUpModal={handleSignUpModal}
                    handleContactModal={handleContactModal}
                    handleProfileModal={handleProfileModal}
                    currentUser={currentUser}
                    handleLogoutConfirm={handleLogoutConfirm}
                  />
                )}
                {/* @ts-expect-error ignore error, error is not crucial */}
                <Hero handleSearch={handleSearch} />
              </div>
              {/* These will only appear for the user when they search and get
              results */}
              {searchResults === false && isLoading === false && (
                <NoSearchYet />
              )}
              {searchedArticles && cardsData.length > 0 && (
                <SearchArticles
                  isLoggedIn={isLoggedIn}
                  cardsData={cardsData}
                  handleSaveArticle={handleSaveArticle}
                  handleDeleteArticle={handleDeleteArticle}
                  savedNewsArticles={savedNewsArticles}
                />
              )}
              {/* These will only appear when the API is searching or when there are
              no results */}
              {isLoading && ArticlesError === "" && <PreLoader />}
              {cardsData.length === 0 && searchResults === true && <NotFound />}
              {ArticlesError === "Error" && searchResults === false && (
                <ArticleError handleContactModal={handleContactModal} />
              )}
              <About handleContactModal={handleContactModal} />
              <Footer handleContactModal={handleContactModal} />
              {activeModal === "signIn" && (
                <SignInModal
                  handleSignUpModal={handleSignUpModal}
                  closeModal={closeModal}
                  handleLogin={handleLogin}
                />
              )}
              {activeModal === "signUp" && (
                <SignUpModal
                  handleSignInModal={handleSignInModal}
                  closeModal={closeModal}
                  handleSignup={handleSignup}
                />
              )}
              {activeModal === "contact" && (
                <ContactModal closeModal={closeModal} />
              )}
              {activeModal === "profile" && (
                <ProfileModal
                  closeModal={closeModal}
                  currentUser={currentUser}
                  updateProfile={updateProfile}
                />
              )}
              {activeModal === "logoutConfirm" && (
                <LogoutConfirmModal
                  closeModal={closeModal}
                  setIsLoggedIn={setIsLoggedIn}
                  setCurrentUser={setCurrentUser}
                />
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
                currentUser={currentUser}
              />
              {activeModal === "navMenu" && (
                <NavDropDown
                  isLoggedIn={isLoggedIn}
                  closeModal={closeModal}
                  handleContactModal={handleContactModal}
                  handleProfileModal={handleProfileModal}
                  currentUser={currentUser}
                />
              )}
              <SavedArticlesHeader
                savedNewsArticles={savedNewsArticles}
                currentUser={currentUser}
              />
              <SavedArticles
                savedNewsArticles={savedNewsArticles}
                handleDeleteArticle={handleDeleteArticle}
              />
              {activeModal === "contact" && (
                <ContactModal closeModal={closeModal} />
              )}
              {activeModal === "profile" && (
                <ProfileModal
                  closeModal={closeModal}
                  updateProfile={updateProfile}
                  currentUser={currentUser}
                />
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
