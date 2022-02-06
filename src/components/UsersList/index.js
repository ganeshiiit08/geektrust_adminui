import {Component} from 'react'

import Header from '../HeaderCard'
import UsersCard from '../UsersCard'
import Footer from '../FooterCard'

import {UserCardContainer, SearchInput} from './styledComponents'

class Users extends Component {
  state = {
    usersList: [],
    
    currentPage: 1,
    usersPerPage: 10,
    allChecked: false,
    isUserChecked: false,
  }

  componentDidMount() {
    this.getUsersDetails()
  }

  getUsersDetails = async () => {
    const usersApiUrl =
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    const options = {
      method: 'GET',
    }
    const response = await fetch(usersApiUrl, options)
    const userDetails = await response.json()
    
    const updatedUsersDetails = userDetails.map(eachUs => ({
      ...eachUs,
      selected: false,
    }))

    this.setState({
      usersList: [...updatedUsersDetails],
    })
  }

  getDesiredUsers = () => {
    const {currentPage, usersPerPage, usersList} = this.state

    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = usersList.slice(indexOfFirstUser, indexOfLastUser)

    return currentUsers
  }

  previousPage = () => {
    const {currentPage} = this.state
    if (currentPage > 1) {
      this.setState(prevState => ({currentPage: prevState.currentPage - 1}))
    }
  }

  nextPage = () => {
    const {currentPage, usersList, usersPerPage} = this.state
    const totalPages = Math.ceil(usersList.length / usersPerPage)

    if (currentPage < totalPages) {
      this.setState(prevState => ({currentPage: prevState.currentPage + 1}))
    }
  }

  onClickFirstPage = () => this.setState({currentPage: 1})

  onClickLastPage = () => {
    const {usersList, usersPerPage} = this.state
    const LastPage = Math.ceil(usersList.length / usersPerPage)

    this.setState({currentPage: LastPage})
  }

  paginate = pageNumber => this.setState({currentPage: pageNumber})

  handleChange = event => {
    const {name, checked} = event.target

    this.setState(prevState => {
      let {usersList, allChecked} = prevState
     
      if (name === 'Header') {
        allChecked = checked
        usersList = usersList.map(item => ({...item, isChecked: checked}))
      } else {
        usersList = usersList.map(item =>
          item.name === name ? {...item, isChecked: checked} : item,
        )
        allChecked = usersList.every(item => item.isChecked)
      }
    
      return {usersList, allChecked}
    })

    this.setState({isUserChecked: checked})
  }

  userCardCheckbox = () => {}

  deleteUsersById = () => {
    const {usersList} = this.state
    const idsArray = []
    usersList.forEach(data => {
      if (data.isChecked) {
        idsArray.push(data.id)
      }
    })

    const resList = usersList.filter(each => idsArray.find(item => item !== each.id))

    this.setState({usersList: [...resList]})
  }

  deleteUser = userdata => {
    const {usersList} = this.state
    const index = usersList.indexOf(userdata)
    usersList.splice(index, 1)
    this.setState({usersList: [...usersList]})
  }

  render() {
    const {usersList, usersPerPage, allChecked, isUserChecked} = this.state
    const currentUsersList = this.getDesiredUsers(usersList)
    // console.log(usersList)
    // console.log(currentUsersList)
    // const currentUsersList = users.length === 0 ? uncheckedUsersList : users
    // console.log(currentUsersList)
    // console.log(users)
    // console.log(currentUsers)
    // return <h1>Hello</h1>
    return (
      <>
        <SearchInput
          type="search"
          name="userSearch"
          placeholder="Search by name, email or role"
        />
        <Header
          onChangeFunction={this.handleChange}
          users={currentUsersList}
          allChecked={allChecked}
        />
        <hr />

        {currentUsersList.map(eachUser => (
          <UserCardContainer key={eachUser.id}>
            <UsersCard
              key={eachUser.id}
              eachUser={eachUser}
              isUserChecked={isUserChecked}
              userCardCheckbox={this.handleChange}
              deleteUser={this.deleteUser}
            />
            <hr />
          </UserCardContainer>
        ))}
        <Footer
          usersPerPage={usersPerPage}
          totalUsers={usersList.length}
          paginate={this.paginate}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          onClickFirstPage={this.onClickFirstPage}
          onClickLastPage={this.onClickLastPage}
          deleteUsersById={this.deleteUsersById}
        />
      </>
    )
  }
}

export default Users
