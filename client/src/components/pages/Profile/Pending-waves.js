import { Component } from 'react'
import { Container, Row, Col, Modal, ButtonGroup, Button } from 'react-bootstrap'
import WaveService from '../../../service/wave.service'
import WaveForm from '../Wave-form/Wave-form'


class PendingWaves
    extends Component {

    constructor() {
        super()
        this.state = {
            showForm: false
        }
        this.waveService = new WaveService()
    }

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }
    acceptWave() {
        const waveId = this.props._id

        this.waveService
            .acceptWave(waveId)
            .then(() => this.props.refreshWaves())
            .catch(err => console.log(err))
    }
    deleteWave() {

        this.waveService
            .deleteWave(this.props._id)
            .then(() => this.props.refreshWaves())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container as="section">

                    <>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <h1>{this.props.title}</h1>
                                <hr />
                                <p>{this.props.description}</p>
                                <hr />
                                <p><strong>Swell Range:</strong> {this.props.swellRange} m | <strong>Quality</strong> {this.props.quality}</p>
                                <ButtonGroup size="mb" style={{ marginBottom: 20 }}>
                                    <Button variant="dark" onClick={() => this.togglemodalForm(true)} > Edit</Button>
                                    <Button variant="outline-dark"onClick={() => this.deleteWave()}>Delete</Button>
                                    <Button variant="dark"onClick={() => this.acceptWave()}> Accept wave</Button>
                                </ButtonGroup>

                            </Col>

                            <Col md={6}>
                                <h3>Photos</h3>
                                <img style={{ width: '100%', marginBottom: 20 }} src={this.props.images[0].url} alt={this.props.images[0].title} />
                                <small>{this.props.images[0].title}</small>
                            </Col>

                        </Row>
                        <hr></hr>

                        <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit wave</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <WaveForm closeModal={() => this.togglemodalForm(false)} wave={this.props} modalType="Edit" refreshList={() => this.loadWaves()} />
                            </Modal.Body>
                        </Modal>
                    </>

                </Container>
            </>
        )
    }
}


export default PendingWaves
