import { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { Modal, Form, Button } from 'react-bootstrap'

class AuthModal extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            showForm: false
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
            .then(() => {
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Button variant="dark" block type="submit">Crear montaña rusa</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default AuthModal
