import React, { useState } from "react";
import Fetch from "./fetch";


const GetData = () => {
    const [inputVal, setInputVal] = useState('');
    const [showFavourite, setShowFavourite] = useState(false);

    const handleSearch = (e) => {
        return setInputVal(e.target.value);
    }
    const handleFavourite = () => {
        setShowFavourite(prevVal => !prevVal);
    }


    return (
        <div>
            <h1 className="text-center mt-5">React Movie App</h1>
            <button onClick={handleFavourite} className="border-3 text-red-700 p-2 px-4 border-red-900 rounded-xl mt-4 mr-0 mb-0 ml-8 hover:text-slate-100 hover:bg-red-400 hover:border-red-200 duration-300 ease-in-out hover:p-4">{showFavourite ? 'Browse Movies' : 'Show Favourites'}</button>
            <div className="flex justify-center my-3">
                <input value={inputVal} onChange={handleSearch} className="p-2 border-1 border-black rounded-lg" />
            </div>
            {inputVal !== '' ? <Fetch movie={inputVal} isFav={showFavourite}/> : ''}
        </div>
    );
}

export default GetData;