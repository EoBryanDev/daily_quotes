import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.projectStyle.colors.secondaryColor};
    width: 100%
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
  `}
`
export const QuoteContainer = styled.article`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
`
export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 10px;
    color: ${theme.projectStyle.colors.primaryColor};
  `}
`
export const Author = styled.h4`
  ${({ theme }) => css`
    color: ${theme.projectStyle.colors.thirdColor};
  `}
`
