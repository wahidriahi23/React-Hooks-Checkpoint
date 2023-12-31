
import { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Filter from "./Filter";
function App() {
 // Initialize state for movies and filter
  const [movies, setMovie] = useState([
     // Array containing movie objects with title, posterUrl, rating, and description
    // You can add or modify movie entries here
    {
      title: "peaky blinders",
      posterUrl: "https://fr.web.img6.acsta.net/c_310_420/pictures/22/06/07/11/57/5231272.jpg",
      rating: 4,
      description:
        "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.",
    },
    {
      title: "Il Etait Une Fois En Amerique",
      posterUrl: "https://www.cnewyork.net/wp-content/uploads/2016/02/Il-etait-une-fois-en-amerique-affiche.jpg",
      rating: 1,
      description:
        "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient,",
    },
    {
      title: "Fast & Furious X",
      posterUrl: "https://media.senscritique.com/media/000021250637/300/fast_furious_x.png",
      rating: 5,
      description:
        "Après bien des missions et contre toute attente, Dom Toretto et sa famille ont su déjouer, devancer, surpasser et distancer tous les adversaires qui ont croisé leur route."
    },

    {
      title: "John Wick - Chapitre 4",
      posterUrl: "https://media.senscritique.com/media/000021226583/300/john_wick_chapitre_4.png",
      rating: 7,
      description:
        "John Wick découvre un moyen de vaincre l’organisation criminelle connue."
    },
    {
      title: "Creed III",
      posterUrl: "https://media.senscritique.com/media/000021193692/300/creed_iii.png",
      rating: 6,
      description:
        "Idole de la boxe et entouré de sa famille, Adonis Creed n’a plus rien à prouver."
    },
    {
      title: "Tirailleurs",
      posterUrl: "https://media.senscritique.com/media/000021016363/300/tirailleurs.jpg",
      rating: 6,
      description:
        "1917. Bakary Diallo s'enrôle dans l'armée française pour rejoindre Thierno."
    },
    {
      title: "PRED4TOR",
      posterUrl: "https://www.geekqc.ca/wp-content/uploads/2018/01/Premi%C3%A8re-affiche-du-nouveau-Predator-RDV-le-15-ao%C3%BBt-2018..jpg",
      rating: 5,
      description:
        "The surviving members of the resistance face the First Order once again",
    }])
  const [filter, setFilter] = useState({ title: '', rating: '' });

  // Function to handle changes in filter values
  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  // Filtering movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating.toString().includes(filter.rating))
  );
   // Function to handle addition of a new movie to the movies state
  const handleAddMovie = (newMovie) => {
    setMovie([...movies, newMovie]);
  };
  // Render the application
  return (
    <div className="App">
      <header className="App-header">
        <Filter onFilterChange={handleFilterChange} />
        <AddMovie onAddMovie={handleAddMovie} />
        <MovieList movies={filteredMovies} />

      </header>
    </div>
  );
}

export default App;
