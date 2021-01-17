import axios from 'axios';


export const getMovies = async (query: string) => {
    return await axios.get('http://www.omdbapi.com/'
        , {
            params: {
                s: query,
                apikey: "ff581cf0"
            },
        }
    )
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}
