import React, { createContext, useReducer, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { IMovie, IContextValues } from '../interface';



export const favContext = createContext<IContextValues | null>(null);


type Propstype = {
    children: React.ReactNode
}


const FavContextProvider = ({ children }: Propstype) => {
    const [favorites, setFavorites] = useState<IMovie[]>(() => {
        const storage = localStorage.getItem("favs");
        return storage ? JSON.parse(storage) : [];
    })
    const [size, setSize] = useState(favorites.length);

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(favorites));
    });

    const addMovie = (payload: IMovie) => {

        if (favorites.length >= 5) {
            return toast.info("You can't vote more than 5 movies");
        }
        else {

            if (!favorites.find((movie: IMovie) => movie.imdbID === payload.imdbID)) {
                setFavorites([...favorites, payload])
                setSize((prev) => prev + 1)
            }
            else {
                return toast.error("Movie already voted");
            }
        }

    };

    const removeMovie = (payload: IMovie) => {
        setFavorites((prevState) => prevState.filter((movie) => movie.imdbID !== payload.imdbID))
        setSize((prev) => prev - 1)
    };


    const contextValue = useMemo(
        () => ({
            addMovie,
            removeMovie,
            favorites,
            size
        }),
        [favorites]
    );

    return (
        <favContext.Provider value={contextValue}>
            {children}
        </favContext.Provider>
    )

};

export default FavContextProvider;
