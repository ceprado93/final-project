import { Component } from 'react'
import { Container, Row, Col, Modal, ButtonGroup, Button, Accordion, Table, Card } from 'react-bootstrap'
import AuthService from './../../../service/auth.service'
import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'
import Comments from '../Comments/CommentsList'
import WaveForm from '../Wave-form/Wave-form'
import './Wave-details.css'
import downArrow from './down-arrow.png'


class WaveDetails extends Component {

    constructor() {
        super()
        this.state = {
            wave: undefined,
            showForm: false,
            move: false,
            added: false,
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
            .then(response => this.setState({ added: true }))
            .catch(err => console.log(err))
    }

    scrollDown() {
        this.setState({ move: true }, () => window.scrollTo({ left: 0, top: 860, behavior: "smooth" }))
    }

    render() {
        return (
            <>
                { this.state.wave?.isAccepted ?
                <>
                <section className="wave-det-header" style={{ backgroundImage: `url(${this.state.wave?.images[0].url})` }}>
                    <h1>{this.state.wave?.title}</h1>
                    <img src={downArrow} onClick={() => this.scrollDown()} alt="arrow" />
                </section>
                <Container className={this.state.move ? 'active' : 'not-active'} as="section" style={{ marginTop: 100, marginBottom: 100 }}>

                    {this.state.wave

                        ?
                        <>
                            <Row>
                                <Col md={{ span: 6 }}>
                                    <h1>{this.state.wave?.title}</h1>
                                    <ButtonGroup size="mb" style={{ marginBottom: 20 }}>
                                        {this.props.loggedUser?._id === this.state.wave?.createdBy && <Button variant="dark" onClick={() => this.togglemodalForm(true)} > Edit</Button>}
                                        
                                        <Link to={`/waves/${this.state.wave?.region}`} className="btn btn-outline-dark">Back to {this.state.wave?.region}</Link>
                                        <Button variant="dark" onClick={() => this.addFavourite()} > Add to favourites {this.state.added && '🤍'}</Button>
                                    </ButtonGroup>
                                    <hr />
                                    <p>{this.state.wave?.description}</p>
                                    <hr />

                                </Col>

                                <Col md={6}>
                                    <h3>Photos</h3>
                                    <img style={{ width: '100%', marginBottom: 20 }} src={this.state.wave?.images[0].url} alt={this.state.wave?.images[0].title} />
                                    <small>{this.state.wave?.images[0].title}</small>
                                </Col>

                            </Row>
                            <Row>
                                <Col md={{span:8, offset:2}} className="conditions">
                                <Accordion defaultActiveKey="0">

                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">Ideal conditions</Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body><Table striped bordered hover>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Type:</strong> </td>
                                                        <td>{this.state.wave?.type} </td>
                                                    </tr>
                                                    <tr>

                                                        <td><strong>Swell Range:</strong> </td>
                                                        <td>{this.state.wave?.swellRange} m </td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Quality</strong></td>
                                                        <td>{this.state.wave?.quality}</td>

                                                    </tr>
                                                    <tr>

                                                        <td><strong>Sea Bed:</strong> </td>
                                                        <td>{this.state.wave?.seaBed}</td>
                                                    </tr>
                                                    <tr>

                                                        <td><strong>Swell Direction:</strong> </td>
                                                        <td>{this.state.wave?.swellDirections}º</td>
                                                    </tr>
                                                    <tr>

                                                        <td><strong>Wind Direction:</strong> </td>
                                                        <td>{this.state.wave?.windDirections}º</td>
                                                    </tr>
                                                    <tr>

                                                        <td><strong>Best Season:</strong> </td>
                                                        <td>{this.state.wave?.bestSeason}</td>
                                                    </tr>
                                                    <tr>

                                                        <td><strong>Crowd:</strong> </td>
                                                        <td>{this.state.wave?.crowd}</td>
                                                    </tr>
                                                    <tr>

                                                        <td><strong>Level:</strong> </td>
                                                        <td>{this.state.wave?.level}</td>
                                                    </tr>
                                                    <tr>

                                                        <td><strong>Tide:</strong> </td>
                                                        <td>{this.state.wave?.tide}</td>
                                                    </tr>
                                                </tbody>
                                            </Table></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                </Col>
                            </Row>
                            <hr></hr>
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
                :
                <>
                <section className="pending-wave">
                <h1>Your wave hasn´t been accepted yet!</h1>
                </section>
                </>
    }
            </>
        )
    }
}

export default WaveDetails