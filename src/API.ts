import axios from 'axios';


export const getMovies = async (query: string) => {
    let cancel;
    return await axios.get('http://www.omdbapi.com/'
        , {
            params: {
                s: query,
                apikey: process.env.REACT_APP_API_KEY
            },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }
    )
        .then((res) => {
            return res.data && res.data;
        }).catch(err => console.error(err))
}
