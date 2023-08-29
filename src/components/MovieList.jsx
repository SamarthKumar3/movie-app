import React, { useState } from "react";

import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Loading from "../utils/Loading";
import './MovieList.css';

const MovieList = (props) => {
    const [favourite, setFavourite] = useState([]);




    const handleHeart = (mov) => {
        if (favourite.find(movieAdded => movieAdded.id === mov.id)) {
            const updatedFavourites = favourite.filter(movie => movie.id !== mov.id);
            setFavourite(updatedFavourites);
            NotificationManager.success('Removed from favourites', 'Success');

        }
        else {
            const updatedFavourites = [...favourite, mov];
            setFavourite(updatedFavourites);
            NotificationManager.success('Added to favourites', 'Success');
        }
    };

    return (
        <React.Fragment>
            {!props.isFav ?
                <div className="flex gap-x-10">
                    {props.movies.map((movie, index) => (
                        <div key={index} className="movie-card">
                            {props.isLoading ?
                                <div >
                                    <Loading />
                                </div>
                                :
                                movie.poster_path ? (
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="object-cover movie-image" />
                                ) : (
                                    <h3 key={index}>{movie.title}</h3>
                                )}

                            <div className="mt-5 " >
                                <button onClick={() => handleHeart(movie)} className="border-3 border-red-400 p-2 px-4 rounded-xl"> <FavoriteIcon className="text-red-600" />   Add to favourites</button>
                            </div>

                        </div>
                    ))}

                </div>
                :
                <div className="flex gap-x-10">

                    {favourite.length !== 0 ? (

                        favourite.map((mov, index) => (
                            <div key={index} className="movie-card">
                                {mov.poster_path ? (
                                    <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} alt={mov.title} className="object-cover movie-image" />
                                ) : (
                                    <h3 key={index}>{mov.title}</h3>
                                )}
                                <div className="mt-5 ">
                                    <button onClick={() => handleHeart(mov)} className="border-3 border-red-400 p-2 px-3 rounded-xl"> <HeartBrokenIcon className="text-red-600" />   Remove from favourites</button>
                                </div>
                            </div>

                        ))

                    )
                        :
                        <h2>Add some movies..</h2>

                    }

                </div>
            }
            <NotificationContainer />
        </React.Fragment>
    );
}

export default MovieList;




