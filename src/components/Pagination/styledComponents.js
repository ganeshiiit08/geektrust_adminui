import styled from 'styled-components'

export const PageContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 70%;
  align-items: center;
`
export const EachPage = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  background-color: #2d87bb;
  border: 1px, solid, #9c9b9a;
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
  width: 28px;
  height: 28px;
`

export const EachPageNumber = styled.a`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
  text-decoration: none;
  font-weight: 500;
`
