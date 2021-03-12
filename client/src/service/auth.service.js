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
    verifyChanges = () => this.api.get('/admin-profile')
    addChanges = changes => this.api.post('/admin-profile', changes)
    addFavourites = (waveid, userData) => this.api.put(`/favourite/${waveid}`, userData)
    removeFavourites = (waveid, userData) => this.api.put(`/unfavourite/${waveid}`, userData)
    getFavourites = userId => this.api.get(`/favourite/${userId}`)

}

export default AuthService