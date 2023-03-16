import axios from 'axios';

// 
const search = async (spotUser) => {
    return axios({
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/user_profile/',
        headers: {
            'X-RapidAPI-Key': "1c08c0f7bcmsh30123ec845c4827p18e6c9jsnd05582c46b83",
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        },
        params: {
            id: `${spotUser}`, playlistLimit: '5', artistLimit: '10'
        },
    })
}

export default { search };
// Export an object with a "search" method that searches the Giphy API for the passed query