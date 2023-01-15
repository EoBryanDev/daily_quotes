import { IProps as IPageTitleProps } from '../../interface/IProps'
import * as Styled from './styles'

export const PageTitle = ({ children }: IPageTitleProps) => {
  return <Styled.Container>{children}</Styled.Container>
  
}
