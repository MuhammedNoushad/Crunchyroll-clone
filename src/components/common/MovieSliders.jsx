import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import useFetch from "../../hooks/useFetch";

function MovieSliders({ filteredBy, heading, subHeading }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // fetch data from the api

  // Fetch data from the API
  const { data: animeData, loading: animeLoading } = useFetch(
    "https://api.jikan.moe/v4/top/anime?filter=" + filteredBy
  );

  const slidesToShow = 5;
  const totalSlides =
    (animeData && Math.ceil(animeData.length || 0 / slidesToShow)) || 1;

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
        <h2 className="text-2xl font-bold text-white mb-2">{heading}</h2>
        <p className="text-gray-400 text-sm md:text-base">{subHeading}</p>
      </div>

      {/* Slider */}
      {animeLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(animeData?.length || 0) * (100 / slidesToShow)}%`,
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            }}
          >
            {animeData &&
              animeData.map((anime, index) => (
                <div key={index} className="flex-shrink-0 px-2">
                  <MovieCard
                    image={anime.images.jpg.image_url}
                    title={anime.title}
                    audioOptions={anime.audioOptions}
                  />
                </div>
              ))}
          </div>
        </div>
      )}

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
