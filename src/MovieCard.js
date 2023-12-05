import React from 'react';
import "./moviecard.css";
import MovieRating from './MovieRating.js';

const MovieCard = ({ movie }) => {
    return (
        <div>
            {/* Movie card structure */}
            <div className="movie_card" id="bright">
                <div className="info_section">
                    {/* Movie header section */}
                    <div className="movie_header">
                        {/* Movie poster */}
                        <img
                            className="locandina"
                            src={movie.posterUrl}
                            alt='jpg'
                        />
                        {/* Movie title */}
                        <h1>{movie.title}</h1>
                    </div>

                    {/* Movie description section */}
                    <div className="movie_desc">
                        {/* Movie description */}
                        <p className="text">
                            {movie.description}
                        </p>
                        {/* Movie rating */}
                        <p>{movie.rating}</p>
                        {/* Movie rating component (assuming it handles movie ratings) */}
                        <MovieRating />
                    </div>

                    {/* Movie social section (if any social media links/info) */}
                    <div className="movie_social">
                        {/* Add social media content here */}
                    </div>
                </div>

                {/* Background blur for the movie card */}
                <div className="blur_back bright_back" />

            </div>
        </div>
    );
};

export default MovieCard;
