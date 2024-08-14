import React from "react";
import Header from "../layouts/Header";
import Carousel from "../common/Carousel";
import MovieSliders from "../common/MovieSliders";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <MovieSliders />
      <MovieSliders />
    </>
  );
}

export default Home;
