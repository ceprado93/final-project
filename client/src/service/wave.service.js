import axios from 'axios'

class WaveService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/wave`,
            withCredentials: true
        })
    }
    getWaves = () => this.api.get('/')
    getRegion = continent => this.api.get(`/${continent}`)
    getRegionalWaves = regionalWave => this.api.get(`/${regionalWave}/details`)
    getContinents = continent => this.api.get(`/${continent}/info`)
    getWave = waveId => this.api.get(`/details/${waveId}`)
    saveWave = waveDetails => this.api.post('/new', waveDetails)
    editWave = waveDetails => this.api.put(`/edit`, waveDetails)
    acceptWave = waveId => this.api.put(`/accept/${waveId}`,)
    deleteWave = (waveId) => this.api.delete(`/delete/${waveId}`)
}

export default WaveService