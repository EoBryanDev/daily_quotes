import * as Styled from './styles'
import Menu from '../../components/Menu'

import AllMyRoutes from '../../routes'

function App() {
  return (
    <div>
      <Menu />
      <Styled.Container>
        <AllMyRoutes />
      </Styled.Container>
    </div>
  )
}

export default App
