import styled, { css } from 'styled-components'

export const MenuList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    align-items: center;
    text-decoration: none;
    padding: 20px;
    transition: 3s ease-in-out;

    a {
      text-decoration: none;
      color: ${theme.projectStyle.colors.primaryColor};
    }
    a:visited {
      color: ${theme.projectStyle.colors.primaryColor};
    }
    a:hover {
      color: ${theme.projectStyle.colors.secondaryColor};
    }
  `}
`
