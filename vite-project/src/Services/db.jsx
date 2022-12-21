import axios from 'axios';
 
export const getMovieData = async(name)=>{
    const response = await axios.get(`http://www.omdbapi.com/?s=${name}&apikey=99d929d9`);
    return response.data.search;
}