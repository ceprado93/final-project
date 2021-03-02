import { Component } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import WavesList from './WavesList'
import Spinner from '../../shared/Spinner/Spinner'
import WaveForm from './../Wave-form/Wave-form'
import './Waves.css'

import WavesService from './../../../service/wave.service'

class Waves extends Component {

    constructor() {
        super()
        this.state = {
            waves: [],
            showForm: false
        }

        this.wavesService = new WavesService()
    }


    componentDidMount() {
        this.loadWaves()
    }

    loadWaves() {
        this.wavesService
            .getWaves()
            .then(response => this.setState({ waves: response.data }))
            .catch(err => console.log(err))
    }


    togglemodalForm(value) {
        this.setState({ showForm: value })
    }


    render() {
        return (

            <>
                <Container as="section">
                    <h1>The waves</h1>
                    {this.props.loggedUser && <Button onClick={() => this.togglemodalForm(true)} variant="dark" className="new-waves-btn">New wave</Button>}
                    {this.state.waves.length ? <WavesList waves={this.state.waves} loggedUser={this.props.loggedUser} /> : <Spinner />}
                </Container>


                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New wave</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WaveForm closeModal={() => this.togglemodalForm(false)} refreshList={() => this.loadWaves()} />
                    </Modal.Body>
                </Modal>

            </>

        )
    }
}

export default Waves