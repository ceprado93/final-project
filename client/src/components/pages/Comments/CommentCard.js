import { Card, Col, Button } from 'react-bootstrap'
import CommentService from '../../../service/comment.service'
import { Component } from 'react'
import './Comments.css'


class CommentCard extends Component {

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
            .then(() => this.props.refreshList())
            .catch(err => console.log(err))

    }
    render() {
        return (

            <Col md={4}>
                <Card className="comment-card">
                    {/* to do */}
                    {/* <Card.Img variant="top" src={images[0].url} /> */}
                    <Card.Body>
                        <h3>Title:{this.props.title}</h3>
                        <p>Description:{this.props.description}</p>
                        <p>Written by:{this.state.user}</p>
                        {this.props?.userId === this.props.writtenBy && <Button onClick={() => this.handleDelete()}>Delete</Button>}

                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default CommentCard 