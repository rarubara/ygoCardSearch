import Header from "../../Components/Header"


const HeroImage = () => {
  return (

      <img src="postre.webp" className="h-50dvh cover-fit w-full" alt="postre principal" />
  )
}

const HeroButton = () => {
  return (
    <>
      <button type="button" className="bg-green-700 rounded-lg text-white min-with-200px max-width-250px px-4 py-2 border text-3xl">
        Reservar
      </button>
    </>
  )
}

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-between gap-12 align-start z-index-100 relative w-fit mx-4 ">
      <p className="text-white text-3xl">
        Postres Saludables
      </p>
      <p className="text-white text-3xl">
        Recomendacion
      </p>
      <HeroButton />
    </div>
  )
}

const Hero = () => {
  return (
    <>
      <HeroImage />
      <HeroContent />
    </>
  )

}

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default Home