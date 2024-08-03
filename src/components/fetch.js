import axios from "axios";
import React, { useState, useEffect } from "react";

import MovieList from "./MovieList";


const Fetch = (props) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const fetchMovies = async () => {
            try {
                const API_KEY = process.env.REACT_APP_API_KEY;
                console.log(API_KEY);
                const response = await axios.get('https://api.themoviedb.org/3/search/movie?query=' + props.movie + '&api_key=' + API_KEY);

                const JSONresponse = response.data;

                if (JSONresponse.results.length !== 0) {
                    let getMovie = JSONresponse.results.map(mov => ({
                        ...mov,
                        favourite: false
                    }))

                    setMovies(getMovie);
                    setLoading(false);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchMovies();
    }, [props.movie]);

    return (
        <React.Fragment>
            <div className={`flex ${props.isFav ? '' : 'overflow-x-scroll'} pb-5 pl-4 mr-4`}>
                <MovieList movies={movies} isFav={props.isFav} isLoading={loading}/>
            </div>
        </React.Fragment>
    );
}

export default Fetch;
