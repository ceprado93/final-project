import { Component } from 'react'
import CommentService from '../../../service/comment.service'
import { Form, Button, Container } from 'react-bootstrap'

class CommentForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            wave: ''
        }

        this.CommentService = new CommentService()
    }
    componentDidMount() {
        this.setWave()
    }
    setWave() {
        this.setState({ wave: this.props.wave })
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.CommentService
            .saveComment(this.state)
            .then((response) => {
                this.props.refreshList()
                this.setState({ title: '', description: '' })
                this.props.handleAlert(true, 'New comment sent', 'Thank you for your opinion!')

            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Button variant="dark" block type="submit">New Comment</Button>
                </Form>

            </Container>
        )
    }
}

export default CommentForm