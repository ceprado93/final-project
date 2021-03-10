import { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { Form, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap'
import './Signup.css'

class Signup extends Component {

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
            .signup(this.state)
            .then(response => {
                this.props.storeUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log({ err }))
    }

    render() {
        return (
            <>
                <section className="signup">
                    <h1>Sign up</h1>
                </section>
                <section>
                    <Container>

                        <Row>

                            <Col>

                                <Jumbotron className="jumbo-signup">

                                    <Form className="form-signup" onSubmit={e => this.handleSubmit(e)}>
                                        <Form.Group>
                                            <Form.Label className="label-signup">Username</Form.Label>
                                            <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className="label-signup">Password</Form.Label>
                                            <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                                        </Form.Group>

                                        <Button variant="outline-dark" block type="submit" className="sign-button">Sign up</Button>
                                    </Form>
                                </Jumbotron>

                            </Col>

                        </Row>

                    </Container>
                </section>
            </>
        )
    }
}

export default Signup



