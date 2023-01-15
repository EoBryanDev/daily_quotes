import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.projectStyle.colors.primaryColor};
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `}
`
export const QuoteContainer = styled.article`
  width: 300px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
`
export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 10px;
    color: ${theme.projectStyle.colors.secondaryColor};
  `}
`
export const Author = styled.h4`
  ${({ theme }) => css`
    color: ${theme.projectStyle.colors.thirdColor};
  `}
`
