import styled from 'styled-components'

export const Container = styled.h1`
  font-size: ${({ theme }) => theme.projectStyle.fontSize.title};
  padding: 10px 100px;
  border-bottom: 2px solid;
  margin-bottom: 10px;
`
