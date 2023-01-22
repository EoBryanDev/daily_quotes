import axios from 'axios'

export type TQuote = {
  text: string
  author: string
}
export const getQuotes = async () => {
  try {
    const registerDate = localStorage.getItem('isThereData')
    const currentDate = new Date().getDate()

    const quote = localStorage.getItem('isAlreadyRequestToday')
    const quoteData = quote !== null ? JSON.parse(quote) : ''

    if ((registerDate == currentDate.toString()) && (quote !== null)) {
      return quoteData
    }
     const response = await axios.get('https://type.fit/api/quotes')

    const randomItem = Math.floor(Math.random() * response.data.length)

    localStorage.setItem('isAlreadyRequestToday', JSON.stringify(response.data[randomItem]))
    localStorage.setItem('isThereData', JSON.stringify(currentDate))

    return response.data[randomItem]
  } catch (error) {
    return `something was wrong: ${error}`
  }
}
