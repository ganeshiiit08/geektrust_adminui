import styled from 'styled-components'

export const UserList = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`

export const UserName = styled.p`
  color: #9c9b9a;
  font-size: 18px;
  font-family: 'Roboto';
  width: 25%;
`

export const UserEmail = styled.p`
  color: #9c9b9a;
  font-size: 18px;
  font-family: 'Roboto';
  width: 37%;
`

export const UserRole = styled.p`
  color: #9c9b9a;
  font-size: 18px;
  font-family: 'Roboto';
  width: 25%;
`

export const CheckboxInput = styled.input`
  width: 17px;
  height: 17px;
  cursor: pointer;
`

export const UserInfoContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`

export const IconsContainer = styled.div`
  width: 20%;
`
export const EditIconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const DeleteIconButton = styled.button`
  border: none;
  margin-left: 15px;
  background-color: transparent;
  cursor: pointer;
`