import MenuItem from '../MenuItem'
import * as Styled from './styles'
import { NavLink } from 'react-router-dom'

export default function MenuList() {
  return (
    <Styled.MenuList>
      <NavLink to='/'>
        <MenuItem>Daily Quote</MenuItem>
      </NavLink>
      <NavLink to='/author'>
        <MenuItem>Search Author</MenuItem>
      </NavLink>
      <NavLink to='/about'>
        <MenuItem>About</MenuItem>
      </NavLink>
    </Styled.MenuList>
  )
}
