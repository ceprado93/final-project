import { Card, Col, Button, ButtonGroup } from 'react-bootstrap'
import CommentService from '../../../service/comment.service'
import { Component } from 'react'
import './../Comments/Comments.css'

class PendingComment extends Component {

    constructor() {
        super()
        this.state = {
            user: ''
        }
        this.CommentService = new CommentService()
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers() {
        this.CommentService
            .getUsers()
            .then(response => {
                const filteredArr = response.data.filter(elm => elm._id === this.props.writtenBy)
                this.setState({ user: filteredArr[0].username })
            })
            .catch(err => console.log(err))
    }

    handleDelete() {
        this.CommentService
            .deleteComment(this.props._id)
            .then(() => this.props.refreshComments())
            .catch(err => console.log(err))

    }
    acceptComment() {
        const commentId = this.props._id
        this.CommentService
            .acceptComment(commentId)
            .then(() => {
                this.props.refreshComments()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <Col md={12}>
                <Card className="comment-card">
                    <Card.Body>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <p>Written by:{this.state.user}</p>
                        <ButtonGroup size="mb" style={{ marginBottom: 20 }}>
                            <Button variant="dark" onClick={() => this.handleDelete()}>Delete</Button>
                            <Button variant="outline-dark" onClick={() => this.acceptComment()}> Accept comment</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default PendingComment