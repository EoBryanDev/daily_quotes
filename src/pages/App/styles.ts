import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({theme}) => css`
    background-color: ${theme.projectStyle.colors.thirdColor};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin: 10px auto;
    padding: 10px;
    border-radius: 10px;
  `}
  width: 80%;
`
