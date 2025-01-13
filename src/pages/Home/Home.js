import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import About from "../../components/About/About";
import Records from "../../components/Records/Records";
import Navbar  from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Records />
    </div>
  );
};

export default Home;
