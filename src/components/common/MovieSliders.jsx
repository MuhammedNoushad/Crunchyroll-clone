import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieSliders() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = [
    {
      image: "/carousel/image1.png",
      title: "Solo Leveling",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "JUJUTSU KAISEN",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "SPY x FAMILY",
      audioOptions: "Sub | Dub",
    },

    {
      image: "/carousel/image1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "Demon Slayer: Kimetsu no Yaiba",
      audioOptions: "Sub | Dub",
    },
    {
      image: "/carousel/image1.png",
      title: "Kaiju No. 8",
      audioOptions: "Sub | Dub",
    },
    // Add more movies as needed
  ];

  const slidesToShow = 5;
  const totalSlides = Math.ceil(movies.length / slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < totalSlides ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : totalSlides - 1
    );
  };

  return (
    <div className="relative bg-black py-8 mx-[2.5rem]">
      {/* Header */}
      <div className="text-start px-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Hindi Dubs Available on Crunchyroll!
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Check out these great Hindi dubs!
        </p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${movies.length * (100 / slidesToShow)}%`,
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
          }}
        >
          {movies.map((movie, index) => (
            <div key={index} className="flex-shrink-0 px-2">
              <MovieCard
                image={movie.image}
                title={movie.title}
                audioOptions={movie.audioOptions}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}

export default MovieSliders;
