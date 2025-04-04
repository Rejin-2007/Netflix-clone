import React, { useEffect, useState, useCallback } from 'react';
import { imageUrl, API_KEY } from '../Constants/constant.jsx';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';
import './Banner.css';

const categories = {
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const Banner = ({ selectedCategory }) => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(categories[selectedCategory])
      .then((response) => {
        const results = response.data.results;
        setMovies(results);
        setCurrentMovie(results[0]);
        setCurrentIndex(0);
      })
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  // Slideshow logic
  const startSlideshow = useCallback(() => {
    return setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % movies.length;
        setCurrentMovie(movies[newIndex]);
        return newIndex;
      });
    }, 3000);
  }, [movies]);

  useEffect(() => {
    if (movies.length === 0) return;
    const interval = startSlideshow();
    return () => clearInterval(interval);
  }, [movies, startSlideshow]);

  return (
    <>
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center bg-black">
          <div className="spinner"></div>
        </div>
      ) : (
        currentMovie && (
          <div
            id="banner"
            className="relative h-screen bg-cover bg-top md:bg-center bg-no-repeat transition-all duration-1000 pt-[120px] pb-20 filter brightness-75 md:brightness-100"
            style={{ backgroundImage: `url(${imageUrl + currentMovie.backdrop_path})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-[5%] z-10 text-white bg-gradient-to-r from-black/70 via-black/50 to-transparent">
              {/* Movie Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 fade-in delay-0">
                {currentMovie.original_name || currentMovie.title}
              </h1>

              {/* Movie Info */}
              <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3 fade-in delay-100">
                {currentMovie.vote_average && <span>⭐ {currentMovie.vote_average.toFixed(1)}</span>}
                {currentMovie.media_type && <span className="uppercase">{currentMovie.media_type}</span>}
                {currentMovie.original_language && (
                  <span className="uppercase">Lang: {currentMovie.original_language}</span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex space-x-3 sm:space-x-6 mb-2 sm:mb-6">
                <button className="flex items-center gap-1 sm:gap-2 bg-white text-black px-4 py-1 sm:px-6 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md hover:bg-gray-300 transition-all duration-200 fade-in delay-200">
                  <FaPlay className="text-xs sm:text-base" />
                  Play
                </button>
                <button className="bg-gray-700 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md hover:bg-gray-600 transition-all duration-200 fade-in delay-300">
                  My List
                </button>
              </div>

              {/* Movie Description */}
              <p className="text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-[35%] leading-relaxed fade-in delay-400">
                {currentMovie.overview}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Banner;
