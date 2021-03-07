import { Component } from 'react'
import { Container } from 'react-bootstrap'
import waveservice from '../../../service/wave.service'

class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waves: [],
            comment: []
        }

        this.Waveservice = new waveservice()

    }

    componentDidMount() {
        this.loadWaves()

    }

    loadWaves() {
        this.Waveservice
            .getWaves()
            .then(response => {
                const pendingWaves = response.data.filter(elm => !elm.isAccepted)
                this.setState({ waves: pendingWaves })
            })
            .catch(err => console.log(err))
    }

    acceptWave(e) {
        console.log(e)
        const wave = this.state.waves.filter(elm => elm.title === e.target.innerText)
        console.log(wave)
        wave[0].isAccepted = true
        console.log(wave[0]._id)
        const waveId = wave[0]._id
        this.Waveservice
            .acceptWave(waveId)
            .then(() => {
                this.loadWaves()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>

                {this.props.isAdmin && <h1>¡Holaaaaaaaaaaaa!</h1>}
                <h1>Pending waves</h1>
                <ul>
                    {this.state.waves?.map(elm => <li key={elm._id}><button onClick={e => this.acceptWave(e)}> {elm.title}</button>
                    </li>)}
                </ul>

            </Container >
        )

    }
}

export default AdminPage 