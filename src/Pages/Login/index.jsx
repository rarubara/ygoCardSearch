/* eslint-disable no-unused-vars */
import React from "react";
import Hlogin from "../../Components/Hlogin";

const LoginSection = () => {
  return (
    <div className="gap-4 justify-between flex flex-col my-16 border border-green-700  h-40dvh p-4 rounded-lg m-auto">
      <section className="flex bg-green-700 gap-3 h-10dvh p-4 m-auto rounded-lg mt-4">
        <label
          className="self-center justify-center m-auto text-white"
          htmlFor="usuario"
        >
          Usuario
        </label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          className="m-auto w-[90%] border-none rounded-md"
        />
      </section>
      <section className="flex bg-green-700 gap-3 h-10dvh p-4 m-auto rounded-lg mt-4">
        <label
          className="self-align-center justify-center m-auto text-white"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="m-auto width-90pc border-none rounded-md"
        />
      </section>
      <button className="p-4 m-auto bg-yellow-300 border-green-700 rounded-md text-white">
        <p className="texto-black">Login</p>
      </button>
    </div>
  );
};

const Title = () => {
  return (
    <div className="flex flex-col justify-center w-fit self-center m-auto mt-4">
      <h1 className="text-green-700 text-4xl text-center">Bienvenidos a</h1>
      <span className="text-yellow-200 justify-center text-3xl text-center">
        Little Lemon
      </span>
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex flex-col h-100dvh">
      <Hlogin />
      <Title />
      <LoginSection />
    </div>
  );
};

export default Login;
