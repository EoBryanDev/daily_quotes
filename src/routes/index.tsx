import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import { AuthorQuote } from '../pages/AuthorQuote'
import AuthorDetails from '../pages/AuthorDetails'
import DailyQuote from '../pages/DailyQuote'

const AllMyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DailyQuote />} />
      <Route path='/author' element={<AuthorQuote />} />
      <Route path='/author/:author' element={<AuthorDetails />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}
export default AllMyRoutes
