import { ReactNode } from 'react'
import * as Styled from './styles'

interface IMenuItemProps {
    children: ReactNode
}

export default function MenuItem( { children } : IMenuItemProps) {
  return (
    <Styled.MenuList>
        {children}
    </Styled.MenuList>
  )
}

