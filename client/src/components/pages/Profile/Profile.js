import { Component } from 'react'
import { Container, Row, Col, Card, Carousel, Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Profile.css'
import AuthService from './../../../service/auth.service'
import CommentService from './../../../service/comment.service'
import WaveService from './../../../service/wave.service'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            waves: [],
            comments: undefined
        }
        this.authService = new AuthService()
        this.commentService = new CommentService()
        this.waveService = new WaveService()
    }

    componentDidMount() {
        this.load()
    }

    load() {
        const promise1 = this.authService.getFavourites(this.props.loggedUser._id)
        const promise2 = this.commentService.getUserComments(this.props.loggedUser._id)
        Promise
            .all([promise1, promise2])
            .then(response => {

                this.setState({
                    waves: response[0].data.favourites,
                    comments: response[1].data
                })
            })
            .catch(err => console.log(err))
    }

    handleDelete(e) {

        this.commentService
            .deleteComment(e.target.name)
            .then(() => this.load())
            .catch(err => console.log(err))

    }

    render() {
        return (
            <>
                <section className="profile-head">

                    <Container >
                        <h1>Profile</h1>
                    </Container>
                </section>
                <Container style={{ marginTop: 100 }}>
                    <Row>
                        <Col md={5}>
                            <div className='user-box' >
                                <img src={this.props.loggedUser.avatar} alt="avatar" />
                                <h3>{this.props.loggedUser.username}</h3>

                            </div>
                        </Col>

                        <Col md={6}>
                            <h2 style={{ letterSpacing: '0.1em', marginBottom: 40 }}>My comments</h2>
                            <ul style={{ paddingLeft: 0 }}>
                                {this.state.comments?.map(elm => {
                                    return elm.isAccepted ? <Accordion key={elm._id} as={Col} defaultActiveKey="0" size='xl' style={{ paddingLeft: 0 }}>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                <strong>{elm.title}</strong>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <p>{elm.description}</p>
                                                    <p>{elm.wave.title}</p>
                                                    <Button name={elm._id} variant="dark" onClick={(e) => this.handleDelete(e)}>Delete</Button>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion> : <div style={{ marginBottom: 20 }}> Comment waiting to be approved<hr /></div>
                                })}
                            </ul>
                        </Col>

                    </Row>
                    <hr></hr>
                    <h2 style={{ display: 'flex', justifyContent: 'center', margin: '40px', letterSpacing: '.1em' }}>My waves</h2>
                    <Row>

                        <Col md={{ span: 10, offset: 1 }}>
                            <Carousel style={{ height: 600, marginBottom: 100 }} slide='true' >
                                {this.state.waves?.map(elm =>
                                    <Carousel.Item interval={3000}>
                                        <img height={600}
                                            className=" profilewaves"
                                            src={elm.images[0].url}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <Link to={`/details/${elm._id}`} className="btn btn-outline-light btn-lg searchBtn carouselBtn" >{elm.title}</Link>
                                        </Carousel.Caption>
                                    </Carousel.Item>)}
                            </Carousel>
                        </Col>
                    </Row>
                </Container >
            </>
        )
    }
}
export default Profile