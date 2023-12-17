// App.js
import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending sci-fi thriller.",
      posterURL: "https://example.com/inception.jpg",
      rating: 4.5,
    },
    // Add more initial movies if needed
  ]);

  const [filter, setFilter] = useState({
    title: "",
    rating: "",
  });

  const handleFilterChange = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= parseInt(filter.rating) // Convert rating to integer for comparison
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie-form">
        <h2>Add a New Movie</h2>
        {/* Create a form for adding new movies */}
        {/* You can add more fields as needed */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Add your logic to handle the form submission and add a new movie
            // Use the addMovie function
          }}
        >
          <label>Title:</label>
          <input type="text" name="title" required />
          <label>Description:</label>
          <input type="text" name="description" required />
          <label>Poster URL:</label>
          <input type="text" name="posterURL" required />
          <label>Rating:</label>
          <input type="number" name="rating" required />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default App;
