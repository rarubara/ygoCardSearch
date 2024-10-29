import Hlogin from "../../Components/Hlogin"



const LoginSection = () => {
  return (
    <div className="flex flex-col gap-4 justify-between">
      <section className="bg-green-700 max-width-250px p-4 m-auto rounded-lg mt-4">
        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" />
      </section>
      <section className="bg-green-700 max-width-250px p-4 m-auto rounded-lg mt-4">
        <label htmlFor="password">Password</label>
        <input type="text" id="usuario" name="usuario" />
      </section>
      <button className="p-4 m-auto bg-yellow-700">
        <p className="texto-black">
          Login
        </p>
      </button>
    </div>

  )
}
// const LoginSection = () => {
//   return (
//     <section className="bg-green-700 max-width-250px p-4 m-auto rounded-lg">
//       <label htmlFor="usuario">Usuario</label>
//       <input type="text" id="usuario" name="usuario" />
//     </section>
//   )
// }

const Title = () => {
  return (
    <div className=" flex flex-col justify-center w-fit m-auto">
      <h1 className="green-700 text-3xl">Bienvenidos a
      </h1>
      <span className="yellow-200 justify-center text-4xl">
        Little Lemon
      </span>
    </div>

  )
}




const Login = () => {
  return (
    <div>
      <Hlogin />
      <Title />
      <LoginSection />
    </div>
  )
}

export default Login