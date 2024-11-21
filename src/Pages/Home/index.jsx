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
const Home = () => {
  return (
    <>
      <Header />
      <Hero />      
      <Menu />
      <CardTable />
      <Detalle />      
      <Footer/>
    </>
  )
}

export default Home
