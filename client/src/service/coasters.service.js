import axios from 'axios'

class CoastersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/coasters`,
            withCredentials: true
        })
    }

    getCoasters = () => this.api.get('/getAllCoasters')
    getCoaster = coasterId => this.api.get(`/getOneCoaster/${coasterId}`)
    saveCoaster = coasterDetails => this.api.post('/newCoaster', coasterDetails)
    editCoaster = (coasterId, coasterDetails) => this.api.put(`/editCoaster/${coasterId}`, coasterDetails)
}

export default CoastersService