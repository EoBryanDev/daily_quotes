import styled, { css } from 'styled-components'

export const MenuStructure = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.projectStyle.colors.thirdColor};
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100px;
    font-size: ${theme.projectStyle.fontSize.subtitle};
  `}
`
