import axios from 'axios'

class ProfileService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/profile`,
            withCredentials: true
        })
    }

    cancelAccount = userId => this.api.delete(`/delete/${userId}`)
    editAccount = (userId, userData) => {
        console.log("estupendo un string", userData)
        return this.api.put(`/edit/${userId}`, {avatar: userData})}

}

export default ProfileService