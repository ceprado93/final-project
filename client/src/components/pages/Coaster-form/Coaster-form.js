import { Component } from 'react'
import CoasterService from '../../../service/coasters.service'

import { Form, Button, Container } from 'react-bootstrap'

class CoasterForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            length: '',
            inversions: '',
            imageUrl: ''
        }

        this.coasterService = new CoasterService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.coasterService
            .saveCoaster(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshList()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>

                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="text" name="length" value={this.state.length} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control type="text" name="inversions" value={this.state.inversions} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" name="imageUrl" value={this.state.imageUrl} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Button variant="dark" block type="submit">Crear montaña rusa</Button>
                </Form>
            </Container>
        )
    }
}



export default CoasterForm