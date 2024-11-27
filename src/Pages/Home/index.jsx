/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Detalle from "../../Components/Detalle";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import ComboBoxLang from "../../Components/ComboBoxLang";
import CardTable from "../../Components/CardTable";
import ExampleComponent from "../../Components/ExampleComponent";

const Home = () => {
  const [query, setQuery] = useState(''); // State to manage the search query

  return (
    <>
      {/* Top Section with Header, Hero, and CardTable */}
      <Header />
      <Hero onSearch={setQuery} /> {/* Pass setQuery to Hero */}
      <CardTable searchQuery={query} /> {/* Pass query to CardTable */}

      {/* Additional Components */}
      <ExampleComponent />
      <Footer />
    </>
  );
};

export default Home;
