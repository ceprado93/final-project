import { Component } from 'react'
import { Container, Button, Modal, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WavesList from './WavesList'
import Spinner from '../../shared/Spinner/Spinner'
import WaveForm from './../Wave-form/Wave-form'
import './Waves.css'
import MyMap from './../Cluster/MyMap'
import WavesService from './../../../service/wave.service'
import Alert from './../../shared/Alert/Alert'


class Waves extends Component {

    constructor() {
        super()
        this.state = {
            waves: [],
            showForm: false,
            lat: undefined,
            lng: undefined,
            zoom: 4,
            alert: {
                show: false,
                title: '',
                text: ''

            }
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
            .catch(err => this.setState({ alert: { show: true, title: 'Error', text: err.response.data.message } }))
    }

    togglemodalForm(value) {
       this.setState({ showForm: value })
    }
    handleAlert = (show, title, text) => this.setState({ alert: { show, title, text } })

    render() {
        return (
            <>

                <section className={this.state.waves[0]?.continent === 'Africa' ? "continent-hero-africa" : (this.state.waves[0]?.continent === 'Europe' ? "continent-hero-europe" : (this.state.waves[0]?.continent === 'America' ? "continent-hero-america" : (this.state.waves[0]?.continent === 'AustraliaNZ' ? "continent-hero-ausNz" : (this.state.waves[0]?.continent === 'Asia' ? "continent-hero-asia" : 'continent-hero-pacific'))))}>
                    <h1 className="continent-title">{this.props.match.params.region}</h1>
                </section>
                <Container as="section">
                    <ButtonGroup size="mb" style={{ marginBottom: 20 }}>
                        <Link to={`/subregion/${this.state.waves[0]?.continent}`} className="btn btn-dark">Back to {this.state.waves[0]?.continent}</Link>
                        {this.props.loggedUser && <Button onClick={() => this.togglemodalForm(true)} variant="outline-dark" className="new-waves-btn">New wave</Button>}
                    </ButtonGroup>
                    <section className="region-map" style={{ width: "1000px", height: "1100px" }}>
                        {this.state.lat && <MyMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} region={this.props.match.params.region} ></MyMap>}
                    </section>
                    <section className="region-btn">
                        {this.state.waves.length ? <WavesList className="waves-list" waves={this.state.waves} loggedUser={this.props.loggedUser} /> : <Spinner />}
                    </section>
                </Container>

                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)} size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>New wave</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WaveForm closeModal={() => this.togglemodalForm(false)} modalType="New" refreshList={() => this.loadWaves()} loggedUser={this.props.loggedUser} handleAlert={this.props.handleAlert} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default Waves