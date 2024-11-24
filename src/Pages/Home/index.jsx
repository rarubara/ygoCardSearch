/* eslint-disable no-unused-vars */
import React from "react"
import Detalle from "../../Components/Detalle"
import Header from "../../Components/Header"
import Hero from "../../Components/Hero"
import Menu from "../../Components/Menu"
import Footer from "../../Components/Footer"
import ComboBoxLang from "../../Components/ComboBoxLang"
import SearchBar from "../../Components/SearchBar"
import CardTable from "../../Components/CardTable"
import TestTable from "../../Components/TestTable"
const Home = () => {
  return (
    <>
      <Header />
      <Hero />      
      <CardTable />
      <Menu />            
      <Detalle />      
      <Footer/>
    </>
  )
}

export default Home
