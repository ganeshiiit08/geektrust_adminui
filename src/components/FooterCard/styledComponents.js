/* Write your CSS here */
import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DeleteButton = styled.button`
  border: none;
  background-color: red;
  border-radius: 12px;
  width: 118px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const DeleteText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`
export const PaginationContainer = styled.div`
  width: 70%;
`
