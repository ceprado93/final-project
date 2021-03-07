import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
            withCredentials: true
        })
    }

    login = userData => this.api.post('/login', userData)
    signup = userData => this.api.post('/signup', userData)
    logout = () => this.api.post('/logout')
    isLoggedIn = () => this.api.get('/loggedin')
    isAdmin = () => this.api.get('/admin-profile')
    addChanges = changes => this.api.post('/admin-profile', changes)
}

export default AuthService 