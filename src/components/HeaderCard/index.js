// Write your code here
import {
  HeaderContainer,
  NameHeading,
  EmailHeading,
  RoleHeading,
  ActionHeading,
  HeaderCheckboxInput,
  HeaderContentContainer,
} from './styledComponents'

const Header = props => {
  const {onChangeFunction, allChecked} = props

  return (
    <HeaderContainer>
      <HeaderCheckboxInput
        onChange={e => onChangeFunction(e)}
        type="checkbox"
        name="Header"
        // checked={users.filter(user => user?.isChecked !== true).length < 1}
        checked={allChecked}
        value="Header0"
      />
      <HeaderContentContainer>
        <NameHeading>Name</NameHeading>
        <EmailHeading>Email</EmailHeading>
        <RoleHeading>Role</RoleHeading>
        <ActionHeading>Actions</ActionHeading>
      </HeaderContentContainer>
    </HeaderContainer>
  )
}

export default Header
