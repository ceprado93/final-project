import { Component } from 'react'
import AuthService from '../../../service/auth.service'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'

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
            <Container>

                <Row>

                    <Col md={{ span: 4, offset: 4 }}>

                        <h1>Registro de usuario</h1>

                        <hr />

                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>

                            <Button variant="dark" block type="submit">Registrarme</Button>
                        </Form>

                    </Col>

                </Row>

            </Container>
        )
    }
}



export default Signup