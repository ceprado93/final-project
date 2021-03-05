import axios from 'axios'

class WaveService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/wave`,
            withCredentials: true
        })
    }

    getWaves = () => this.api.get('/')
    getRegion = () => this.api.get('/region')
    getRegionalWaves = regionalWave => this.api.get(`/${regionalWave}/details`)
    getWave = waveId => this.api.get(`/details/${waveId}`)
    saveWave = waveDetails => this.api.post('/new', waveDetails)
    editWave = (waveId, waveDetails) => this.api.put(`/edit/${waveId}`, waveDetails)
    deleteWave = (waveId) => this.api.post(`/delete/${waveId}`)

}

export default WaveService