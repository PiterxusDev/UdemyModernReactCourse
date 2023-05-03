import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ZPhDc24qcyk4JFen0xMBRU6X18QiiYgA62yFPX6gX5Q',
           
        },
        params: {
            query: term
        }
    })
    
    return response.data.results;
}

export default searchImages;