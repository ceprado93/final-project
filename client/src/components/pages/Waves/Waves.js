import { Component } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import WavesList from './WavesList'
import Spinner from '../../shared/Spinner/Spinner'
import WaveForm from './../Wave-form/Wave-form'
import './Waves.css'
import Map from './../Map/Map'
import MyMap from './../Cluster/MyMap'
import WavesService from './../../../service/wave.service'

class Waves extends Component {

    constructor() {
        super()
        this.state = {
            waves: [],
            showForm: false,
            lat: undefined,
            lng: undefined,
            zoom: 4
        }

        this.wavesService = new WavesService()
    }

    componentDidMount() {
        this.loadWaves()
    }

    loadWaves() {
        this.wavesService
            .getRegionalWaves(this.props.match.params.region)
            .then(response => {
                const filteredArr = response.data
                this.setState({ waves: filteredArr, lat: filteredArr[0].location.coordinates[0], lng: filteredArr[0].location.coordinates[1], zoom: 5 })
            })
            .catch(err => console.log(err))
    }

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    render() {
        return (

            <div className="all-waves">
                <section className="header">
                    <h1>The waves</h1>
                </section>
                <Container as="section">
                    <section className="region-map" style={{ width: "1000px", height: "1100px" }}>
                        {this.state.lat && <MyMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} region={this.props.match.params.region} ></MyMap>}
                    </section>
                    <section className="region-btn">
                        {this.props.loggedUser && <Button onClick={() => this.togglemodalForm(true)} variant="dark" className="new-waves-btn">New wave</Button>}
                        {this.state.waves.length ? <WavesList className="waves-list" waves={this.state.waves} loggedUser={this.props.loggedUser} /> : <Spinner />}
                    </section>
                </Container>

                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)} size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>New wave</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WaveForm closeModal={() => this.togglemodalForm(false)} modalType="New" refreshList={() => this.loadWaves()} />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Waves