import axios from 'axios'

export const getAllQuotes = async () => {
    try {
        const response = await axios.get('https://type.fit/api/quotes')
        return response.data

    } catch(error){
        console.log(error);
        
    }
}
