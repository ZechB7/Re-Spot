import axios from 'axios';

// 
const search = async (spotUser) => {
    return axios({
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/user_profile/',
        headers: {
            'X-RapidAPI-Key': 'e2ee2a3bbdmsh9b20e51092686f7p1e16eajsna0daead8fb5f',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        },
        params: {
            id: `${spotUser}`, playlistLimit: '2', artistLimit: '10'
        },
    })
}

export default { search };

// Export an object with a "search" method that searches the Giphy API for the passed query