import { Component } from 'react'
import './App.css'
import Routes from './routes/Routes'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'
import AuthService from '../service/auth.service'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      isAdmin: undefined
    }
    this.authService = new AuthService()
  }

  storeUser(loggedUser) {
    this.setState({ loggedUser, isAdmin: loggedUser?.role }, () => console.log('Usuario modificado:', this.state.loggedUser))
  }

  fetchUser() {
    this.authService
      .isLoggedIn()
      .then(response => this.storeUser(response.data))
      .catch(() => this.storeUser(undefined))
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    return (
      <>
        <Navigation storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} isAdmin={this.state.isAdmin} />
        <main>
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} isAdmin={this.state.isAdmin} />
        </main>
        <Footer />
      </>
    )
  }
}

export default App