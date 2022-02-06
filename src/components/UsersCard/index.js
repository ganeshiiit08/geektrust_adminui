// Write your code here
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'
import {
  UserName,
  UserEmail,
  UserRole,
  CheckboxInput,
  UserInfoContainer,
  IconsContainer,
  EditIconButton,
  DeleteIconButton,
} from './styledComponents'

const UsersCard = props => {
  const {eachUser, userCardCheckbox, deleteUser, isUserChecked} = props
  const {id, name, email, role} = eachUser
  console.log(isUserChecked)
  const reqClassName = isUserChecked ? '' : ''

  return (
    <li className={`user-list ${reqClassName}`}>
      <CheckboxInput
        onChange={e => userCardCheckbox(e)}
        type="checkbox"
        // checked={eachUser.selected}
        checked={eachUser.isChecked || false}
        name={name}
        value={id}
      />
      <UserInfoContainer>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
        <UserRole>{role.charAt(0).toUpperCase() + role.slice(1)}</UserRole>
        <IconsContainer>
          <EditIconButton>
            <FiEdit className="edit-icon" />
          </EditIconButton>
          <DeleteIconButton>
            <AiOutlineDelete
              onClick={() => deleteUser(eachUser)}
              className="delete-icon"
            />
          </DeleteIconButton>
        </IconsContainer>
      </UserInfoContainer>
    </li>
  )
}

export default UsersCard
