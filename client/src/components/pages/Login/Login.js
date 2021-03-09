import { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { Form, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap'
import './Login.css'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.authService = new AuthService()

    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()
        this.authService
            .login(this.state)
            .then(response => {
                this.props.storeUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log({ err }))
    }

    render() {
        return (
            <section className="login">
                <Container>

                    <Row>

                        <Col>

                            <Jumbotron className="jumbo-login">
                                <Form onSubmit={e => this.handleSubmit(e)}>
                                    <Form.Group>
                                        <Form.Label className="label-login">Username</Form.Label>
                                        <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="label-login">Password</Form.Label>
                                        <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                                    </Form.Group>

                                    <Button variant="outline-dark" block type="submit" className="log-button">Log in</Button>
                                </Form>
                            </Jumbotron>

                        </Col>

                    </Row>

                </Container>
            </section>
        )
    }
}



export default Login