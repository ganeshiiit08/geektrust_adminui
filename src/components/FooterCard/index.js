import Pagination from '../Pagination'

import {
  DeleteButton,
  DeleteText,
  FooterContainer,
  PaginationContainer,
} from './styledComponents'

const Footer = props => {
  const {
    usersPerPage,
    totalUsers,
    paginate,
    previousPage,
    nextPage,
    onClickFirstPage,
    onClickLastPage,
    deleteUsersById,
  } = props

  return (
    <FooterContainer>
      <DeleteButton onClick={() => deleteUsersById()}>
        <DeleteText>Delete Selected</DeleteText>
      </DeleteButton>
      <PaginationContainer>
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={totalUsers}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          onClickFirstPage={onClickFirstPage}
          onClickLastPage={onClickLastPage}
        />
      </PaginationContainer>
    </FooterContainer>
  )
}

export default Footer
