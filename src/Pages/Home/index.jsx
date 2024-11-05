/* eslint-disable no-unused-vars */
import React from "react"
import Detalle from "../../Components/Detalle"
import Header from "../../Components/Header"
import Hero from "../../Components/Hero"
import Menu from "../../Components/Menu"

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Detalle />
      {/* AQUI VA EL FOOTER */}
    </>
  )
}

export default Home
