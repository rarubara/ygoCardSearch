/* eslint-disable no-unused-vars */
import React from "react";
import Hlogin from "../../Components/Hlogin";

const LoginSection = () => {
  return (
    <div className="gap-4 justify-between flex flex-col my-16 border-green-700  h-40dvh p-4 rounded-lg m-auto">
      <section className="flex bg-green-700 width-40pc h-10dvh p-4 m-auto rounded-lg mt-4">
        <label
          className="self-align-center justify-center m-auto"
          htmlFor="usuario"
        >
          Usuario
        </label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          className="m-auto width-90pc border-none rounded-md"
        />
      </section>
      <section className="flex bg-green-700 width-40pc h-10dvh p-4 m-auto rounded-lg mt-4">
        <label
          className="self-align-center justify-center m-auto"
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
      <button className="p-4 m-auto bg-yellow-700 border-green-700 rounded-md text-white">
        <p className="texto-black">Login</p>
      </button>
    </div>
  );
};

const Title = () => {
  return (
    <div className=" justify-center w-fit align-center m-auto flex flex-col mt-4">
      <h1 className="green-700 text-12xl text-center">Bienvenidos a</h1>
      <span className="yellow-200 justify-center text-10xl text-center">
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
