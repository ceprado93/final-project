import { Component } from 'react'
import { Container, Row, Col, Modal, ButtonGroup, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'
import Comments from '../Comments/CommentsList'
import WaveForm from '../Wave-form/Wave-form'


class WaveDetails extends Component {

    constructor() {
        super()
        this.state = {
            wave: undefined,
            showForm: false
        }
        this.waveService = new WaveService()
    }


    componentDidMount() {

        const wave_id = this.props.match.params.id
        console.log(this.props)

        this.waveService
            .getWave(wave_id)
            .then(response => this.setState({ wave: response.data }))
            .catch(err => console.log(err))
    }

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    render() {
        return (
            <>
                <Container as="section">

                    {this.state.wave

                        ?
                        <>
                            <Row>
                                <Col md={{ span: 6 }}>
                                    <h1>{this.state.wave?.title}</h1>
                                    <hr />
                                    <p>{this.state.wave?.description}</p>
                                    <hr />
                                    <p><strong>Swell Range:</strong> {this.state.wave?.swellRange} m | <strong>Quality</strong> {this.state.wave?.quality}</p>
                                    <ButtonGroup size="mb" style={{ marginBottom: 20 }}>
                                        <Button variant="dark" onClick={() => this.togglemodalForm(true)} > Edit</Button>
                                        <Link to="/waves" className="btn btn-dark">Back to {this.state.wave?.region}</Link>
                                    </ButtonGroup>
                                    {/* to do */}
                                </Col>

                                <Col md={6}>
                                    <h3>Photos</h3>
                                    <img style={{ width: '100%', marginBottom: 20 }} src={this.state.wave?.images[0].url} alt={this.state.wave?.images[0].title} />
                                    <small>{this.state.wave?.images[0].title}</small>
                                </Col>

                            </Row>

                            <Row>
                                <Col><Comments wave_id={this.state.wave._id} commentUser={this.props.loggedUser?._id}></Comments></Col>
                            </Row>

                            <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit wave</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <WaveForm closeModal={() => this.togglemodalForm(false)} wave={this.state?.wave} modalType="Edit" refreshList={() => this.loadWaves()} />
                                </Modal.Body>
                            </Modal>
                        </>
                        :
                        <Spinner />}
                </Container>
            </>
        )
    }
}


export default WaveDetails