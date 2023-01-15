import { ReactNode } from 'react'
import { IProps as IMenuItemProps } from '../../interface/IProps'
import * as Styled from './styles'


export default function MenuItem( { children } : IMenuItemProps) {
  return (
    <Styled.MenuList>
        {children}
    </Styled.MenuList>
  )
}

