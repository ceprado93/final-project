import { Component } from 'react'
import { Container, Row, Col, Modal, ButtonGroup, Button } from 'react-bootstrap'
import AuthService from './../../../service/auth.service'
import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'
import Comments from '../Comments/CommentsList'
import WaveForm from '../Wave-form/Wave-form'
import './Wave-details.css'
import downArrow from './arrow.png'


class WaveDetails extends Component {

    constructor() {
        super()
        this.state = {
            wave: undefined,
            showForm: false
        }
        this.waveService = new WaveService()
        this.authService = new AuthService()

    }

    componentDidMount() {

        const wave_id = this.props.match.params.id

        this.waveService
            .getWave(wave_id)
            .then(response => this.setState({ wave: response.data }))
            .catch(err => console.log(err))
        window.scrollTo(0, 0)
    }

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    addFavourite() {
        const waveid = this.props.match.params.id
        this.authService
            .addFavourites(waveid, this.props.loggedUser)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    scrollDown() {
        window.scrollTo(0, 600)
    }

    render() {
        return (
            <>
                <section className="wave-det-header" style={{ backgroundImage: `url(${this.state.wave?.images[0].url})` }}>
                    <h1>{this.state.wave?.title}</h1>
                    <img src={downArrow} onClick={() => this.scrollDown()} alt="arrow"/>
                </section>
                <Container as="section" style={{ marginTop: 100, marginBottom:100 }}>

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
                                        <Link to={`/waves/${this.state.wave?.region}`} className="btn btn-outline-dark">Back to {this.state.wave?.region}</Link>
                                        <Button variant="dark" onClick={() => this.addFavourite()} > Add to favourites  🤍</Button>
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

                            <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)} size='xl'>
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