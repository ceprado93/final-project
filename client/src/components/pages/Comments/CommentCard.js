import { Card, Col } from 'react-bootstrap'
import CommentService from '../../../service/comment.service'
import { Component } from 'react'


class CommentCard extends Component {

    constructor() {
        super()
        this.state = {
            user: ''
        }
        this.CommentService = new CommentService()
    }

    componentDidMount(){
        this.loadUsers()
    }

    loadUsers(){
        console.log(this.props)
        this.CommentService
            .getUsers()
            .then(response => {
                console.log(response)

                const filteredArr = response.data.filter(elm => elm._id === this.props.writtenBy)
                console.log(filteredArr)

                this.setState({user: filteredArr[0].username })
            })
            .catch(err => console.log(err))
    }
render(){
    return (

        <Col md={4}>
             <Card>
                 {/* to do */}
                {/* <Card.Img variant="top" src={images[0].url} /> */}
                <Card.Body>
                    <h3>Title:{this.props.title}</h3>
                    <p>Description:{this.props.description}</p>
                    <p>Written by:{this.state.user}</p>
                    </Card.Body>
            </Card>
        </Col>
    )
}
}

export default CommentCard 