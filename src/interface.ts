
export interface IMovie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}


export interface IContextValues {
    addMovie: any,
    removeMovie: any,
    favorites: IMovie[],
    size: number
}


export interface IState {
    favorites: IMovie[]
}


export interface IAction {
    payload: IMovie,
    type: string
}

export interface IMovies {
    movies: IMovie[]
}
