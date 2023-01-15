import axios from 'axios'


export const getQuotes = async () => {
  try {
    const response = await axios.get('https://type.fit/api/quotes')
    console.log(response);

    return response.data
  } catch (error) {
    console.log(error)
  }
}
