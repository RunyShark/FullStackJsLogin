import React from "react";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Soy el home</h1>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-12 p-5 ">
        <Outlet />
      </main>
    </>
  );
};

export default Home;
