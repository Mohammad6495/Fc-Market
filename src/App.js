import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header/Header";
import Main from "./container/Main/Main";
import ScrollUp from "./components/UI/ScrollUp/ScrollUp";
import Footer from "./components/UI/Footer/Footer";
import Products from "./container/Products/Products";
import BackDropModal from "./components/UI/BackDrop2/BackDropModal";
import BackDrop from "./components/UI/BackDrop/BackDrop";
import ProductsDetails from "./container/ProductsDetails/ProductsDetails";
import ContactUs from "./container/ContactUs/ContactUs";
import AboutUs from "./container/AboutUs/AboutUs";
import { AuthContext } from "./context/auth";

const App = () => {
  const [styled, setStyled] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  const showDropDownHandler = () => {
    const sql = window.innerWidth;
    if (sql < 991) {
      if (showDropDown) {
        setShowDropDown(false);
      } else {
        setShowDropDown(true);
      }
    } else {
      setShowDropDown(false);
    }
  };

  const changeStyleHandle = (event) => {
    event.preventDefault();
    if (styled) {
      setStyled(false);
    } else {
      setStyled(true);
    }
  };

  const showModalHandler = (event) => {
    event.preventDefault();
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  let backDrop = null;
  if (styled) {
    backDrop = <BackDrop click={changeStyleHandle} />;
  }

  let backDropModal = null;
  if (showModal) {
    backDropModal = <BackDropModal click={showModalHandler} />;
  }

  const GuestLayout = () => {
    return (
      <main>
        <Main />
      </main>
    );
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        {backDropModal}
        {backDrop}
        <Header
          showModalHandler={showModalHandler}
          changeStyleHandle={changeStyleHandle}
          showDropDown={showDropDown}
          showDropDownHandler={showDropDownHandler}
          styled={styled}
          showModalState={showModal}
        />
        <Routes>
          <Route path="/" element={<GuestLayout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/productdetails/:id" element={<ProductsDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
        <ScrollUp />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
