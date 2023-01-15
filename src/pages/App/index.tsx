import { Route, Routes } from 'react-router-dom'
import * as Styled from './styles'
import Menu from '../../components/Menu'
import { About } from '../About'
import { AuthorQuote } from '../AuthorQuote'
import DailyQuote from '../DailyQuote'

function App() {
  return (
    <div>
      <Menu />
      <Styled.Container>
        <Routes>
          <Route path='/' element={<DailyQuote />} />
          <Route path='/author' element={<AuthorQuote />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Styled.Container>
    </div>
  )
}

export default App
