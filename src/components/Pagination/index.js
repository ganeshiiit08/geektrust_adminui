import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'

import './index.css'
import {PageContainer, EachPage, EachPageNumber} from './styledComponents'

const Pagination = props => {
  const {
    usersPerPage,
    totalUsers,
    paginate,
    previousPage,
    nextPage,
    onClickFirstPage,
    onClickLastPage,
  } = props
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <PageContainer>
        <AiOutlineDoubleLeft
          onClick={() => onClickFirstPage()}
          className="double-prev-icon"
        />
        <GrFormPrevious
          onClick={() => previousPage()}
          className="previous-icon"
        />
        {pageNumbers.map(number => (
          <EachPage className="each-page" key={number}>
            <EachPageNumber onClick={() => paginate(number)} href="!#">
              {number}
            </EachPageNumber>
          </EachPage>
        ))}
        <GrFormNext onClick={() => nextPage()} className="next-icon" />
        <AiOutlineDoubleRight
          onClick={() => onClickLastPage()}
          className="double-next-icon"
        />
      </PageContainer>
    </nav>
  )
}

export default Pagination
