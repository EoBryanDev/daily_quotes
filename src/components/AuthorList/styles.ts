import styled, {css} from 'styled-components'

export const AuthorListSize = styled.div`
    ${({theme}) => css`
    
    width: 100%;
    height: 20px;
    background-color: ${theme.projectStyle.colors.backgroundColor};
    padding: 20px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    letter-spacing: 3px;
    color: ${theme.projectStyle.colors.primaryColor}
    `}

`
