import styled, { css } from 'styled-components'

export const Container = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;

    button {
      margin-left: 5px;
      width: 80px;
      height: 30px;
      background-color: ${theme.projectStyle.colors.primaryColor};
      color: ${theme.projectStyle.colors.thirdColor};
      border: none;
      border-radius: 5px;
    }

    button:hover{
        background-color: ${theme.projectStyle.colors.secondaryColor};
        color: ${theme.projectStyle.colors.primaryColor};
        cursor: pointer;
    }
  `}
`
export const TextInput = styled.input.attrs({ type: 'text' })`
  ${({ width, theme }) => css`
    width: ${width}%;
    height: 30px;
    margin-bottom: 10px;
    padding: 10px;
    font-size: ${theme.projectStyle.fontSize.body};
    &:focus {
      font-weight: 600;
    }
  `}
`
