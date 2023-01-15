import MenuItem from '../MenuItem'
import * as Styled from './styles'

export default function MenuList() {
  return (
    <Styled.MenuList>
        <MenuItem>Daily Quote</MenuItem>
        <MenuItem>Search Author</MenuItem>
        <MenuItem>Tell more</MenuItem>
    </Styled.MenuList>
  )
}

