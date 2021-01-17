import axios from 'axios';


export const getMovies = async (query: string) => {
    return await axios.get('http://www.omdbapi.com/'
        , {
            params: {
                s: query,
                apikey: process.env.REACT_APP_API_KEY
            },
        }
    )
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}
